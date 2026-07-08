import { randomUUID } from "crypto";
import { desc, eq, inArray } from "drizzle-orm";
import { db, receiptsTable, receiptItemsTable } from "@workspace/db";

export type Verdict = "alert" | "no_action" | "review";

export interface ReceiptItem {
  id: string;
  itemNumber: string;
  name: string;
  category: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  priceDrop: number;
  percentDrop: number;
  verdict: Verdict;
  policyRuleId: string | null;
  policyRuleTitle: string | null;
  evidenceSnippet: string | null;
  withinPolicyWindow: boolean;
  daysUntilExpiry: number | null;
}

export interface ReceiptDetail {
  id: string;
  filename: string;
  uploadedAt: Date;
  warehouse: string;
  purchaseDate: string;
  memberNumber: string | null;
  totalAmount: number;
  status: "processing" | "ready" | "error";
  items: ReceiptItem[];
  alertCount: number;
  reviewCount: number;
  estimatedRefund: number;
  itemCount: number;
}

export interface PolicyRule {
  id: string;
  title: string;
  description: string;
  conditions: string[];
  exclusions: string[];
  windowDays: number | null;
  category: string;
}

// ─── DB helpers ───────────────────────────────────────────────────────────────

async function rowsToDetail(
  receiptRows: (typeof receiptsTable.$inferSelect)[],
): Promise<ReceiptDetail[]> {
  if (receiptRows.length === 0) return [];

  const ids = receiptRows.map((r) => r.id);
  // Fetch all items for these receipts in one query
  const allItems = await db
    .select()
    .from(receiptItemsTable)
    .where(inArray(receiptItemsTable.receiptId, ids));

  const itemsByReceipt = new Map<string, ReceiptItem[]>();
  for (const item of allItems) {
    const list = itemsByReceipt.get(item.receiptId) ?? [];
    list.push(dbItemToReceiptItem(item));
    itemsByReceipt.set(item.receiptId, list);
  }

  return receiptRows.map((r) => ({
    id: r.id,
    filename: r.filename,
    uploadedAt: r.uploadedAt,
    warehouse: r.warehouse,
    purchaseDate: r.purchaseDate,
    memberNumber: r.memberNumber,
    totalAmount: r.totalAmount,
    status: r.status as ReceiptDetail["status"],
    alertCount: r.alertCount,
    reviewCount: r.reviewCount,
    estimatedRefund: r.estimatedRefund,
    itemCount: r.itemCount,
    items: itemsByReceipt.get(r.id) ?? [],
  }));
}

function dbItemToReceiptItem(
  row: typeof receiptItemsTable.$inferSelect,
): ReceiptItem {
  return {
    id: row.id,
    itemNumber: row.itemNumber,
    name: row.name,
    category: row.category,
    quantity: row.quantity,
    purchasePrice: row.purchasePrice,
    currentPrice: row.currentPrice,
    priceDrop: row.priceDrop,
    percentDrop: row.percentDrop,
    verdict: row.verdict as Verdict,
    policyRuleId: row.policyRuleId,
    policyRuleTitle: row.policyRuleTitle,
    evidenceSnippet: row.evidenceSnippet,
    withinPolicyWindow: row.withinPolicyWindow,
    daysUntilExpiry: row.daysUntilExpiry,
  };
}

// ─── Public store API (async) ─────────────────────────────────────────────────

export async function getReceipts(): Promise<ReceiptDetail[]> {
  const rows = await db
    .select()
    .from(receiptsTable)
    .orderBy(desc(receiptsTable.uploadedAt));
  return rowsToDetail(rows);
}

export async function getReceiptById(
  id: string,
): Promise<ReceiptDetail | undefined> {
  const rows = await db
    .select()
    .from(receiptsTable)
    .where(eq(receiptsTable.id, id));
  if (rows.length === 0) return undefined;
  const details = await rowsToDetail(rows);
  return details[0];
}

export async function addReceipt(receipt: ReceiptDetail): Promise<void> {
  await db.insert(receiptsTable).values({
    id: receipt.id,
    filename: receipt.filename,
    uploadedAt: receipt.uploadedAt,
    warehouse: receipt.warehouse,
    purchaseDate: receipt.purchaseDate,
    memberNumber: receipt.memberNumber,
    totalAmount: receipt.totalAmount,
    status: receipt.status,
    alertCount: receipt.alertCount,
    reviewCount: receipt.reviewCount,
    estimatedRefund: receipt.estimatedRefund,
    itemCount: receipt.itemCount,
  });

  if (receipt.items.length > 0) {
    await db.insert(receiptItemsTable).values(
      receipt.items.map((item) => ({
        id: item.id,
        receiptId: receipt.id,
        itemNumber: item.itemNumber,
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        purchasePrice: item.purchasePrice,
        currentPrice: item.currentPrice,
        priceDrop: item.priceDrop,
        percentDrop: item.percentDrop,
        verdict: item.verdict,
        policyRuleId: item.policyRuleId,
        policyRuleTitle: item.policyRuleTitle,
        evidenceSnippet: item.evidenceSnippet,
        withinPolicyWindow: item.withinPolicyWindow,
        daysUntilExpiry: item.daysUntilExpiry,
      })),
    );
  }
}

export async function deleteReceipt(id: string): Promise<boolean> {
  const result = await db
    .delete(receiptsTable)
    .where(eq(receiptsTable.id, id))
    .returning({ id: receiptsTable.id });
  return result.length > 0;
}

// ─── Policy knowledge base ────────────────────────────────────────────────────
export const POLICY_RULES: PolicyRule[] = [
  {
    id: "policy-30-day",
    title: "30-Day Price Protection",
    description:
      "Costco will refund the difference if an item you purchased goes on sale or drops in price within 30 days of your purchase date. Visit the Returns counter or request an adjustment at Member Services.",
    conditions: [
      "Item purchased within the last 30 days",
      "Item is still currently available at a lower price at Costco",
      "Original receipt or membership lookup required",
      "Refund issued to original payment method",
    ],
    exclusions: [
      "Items purchased more than 30 days ago",
      "Clearance or final-sale items",
      "Limited-time promotional pricing that has since expired",
    ],
    windowDays: 30,
    category: "general",
  },
  {
    id: "policy-electronics-90-day",
    title: "Electronics & Major Appliances — 90-Day Return Window",
    description:
      "Televisions, computers, cameras, major appliances, and other electronics qualify for a 90-day return and price-adjustment window. This extended window reflects Costco's commitment to member satisfaction on big-ticket tech purchases.",
    conditions: [
      "Item is classified as electronics or a major appliance",
      "Purchased within the last 90 days",
      "Includes TVs, computers, printers, cameras, and refrigerators",
      "Price adjustment available without returning the item",
    ],
    exclusions: [
      "Cell phones (governed by carrier contract terms)",
      "Items showing physical damage inconsistent with normal use",
      "Opened software and digital downloads",
    ],
    windowDays: 90,
    category: "electronics",
  },
  {
    id: "policy-perishables",
    title: "Perishable & Consumable Items",
    description:
      "Fresh food, produce, dairy, and other perishable items are generally excluded from standard price-adjustment policy due to variable market pricing. However, packaged non-perishables (canned goods, dry goods, beverages) remain eligible under the 30-day general rule.",
    conditions: [
      "Packaged non-perishables qualify under the 30-day rule",
      "Canned, bottled, and shelf-stable goods included",
      "Price adjustment available if item is still sold at lower price",
    ],
    exclusions: [
      "Fresh produce and flowers",
      "Fresh meat, seafood, and deli items",
      "Dairy and refrigerated items with short shelf life",
      "Bakery items",
    ],
    windowDays: 30,
    category: "food",
  },
  {
    id: "policy-seasonal",
    title: "Seasonal & Holiday Merchandise",
    description:
      "Seasonal items (holiday décor, seasonal apparel, garden equipment) are often marked down aggressively at end-of-season. Price adjustments for seasonal goods are honored if the purchase was within the standard 30-day window, but Costco may decline adjustments on clearance markdown events.",
    conditions: [
      "Purchase within 30 days of adjustment request",
      "Item still visible in the current inventory at reduced price",
      "Manager discretion may apply for steep clearance discounts",
    ],
    exclusions: [
      "Items purchased more than 30 days ago",
      "Clearance events explicitly marked 'final sale'",
      "Items no longer stocked at any Costco location",
    ],
    windowDays: 30,
    category: "seasonal",
  },
  {
    id: "policy-member-services",
    title: "How to Claim a Price Adjustment",
    description:
      "To receive a price adjustment, visit your local Costco warehouse and bring your original receipt or have your membership number handy. Speak with Member Services at the Returns counter. Most adjustments are processed same-day and credited back to your original payment method within 3–5 business days.",
    conditions: [
      "Original receipt or membership lookup required",
      "Visit Member Services (Returns counter) at any Costco warehouse",
      "Refund to original payment method — typically 3–5 business days",
      "Adjustment can be claimed without returning the item",
    ],
    exclusions: [
      "Cannot be processed through Costco.com for in-warehouse purchases",
      "Phone adjustments are not accepted — must be in-person",
    ],
    windowDays: null,
    category: "process",
  },
  {
    id: "policy-minimum-drop",
    title: "Meaningful Drop Threshold",
    description:
      "CostcoWatch flags items as Alert-worthy only when the price drop is at least $2.00 or 3% of the original price, whichever is greater. Smaller fluctuations are common and not worth a trip to Member Services. Items with drops below this threshold are categorized as Review for your awareness.",
    conditions: [
      "Price drop is at least $2.00 OR at least 3% of purchase price",
      "Both conditions assessed and the more favorable one applied",
      "Items meeting threshold receive Alert verdict",
    ],
    exclusions: [
      "Drops under $2.00 and under 3% categorized as Review only",
      "No-change or price increase items show No Action",
    ],
    windowDays: null,
    category: "threshold",
  },
];

// ─── Mock item catalogue ──────────────────────────────────────────────────────
interface MockItem {
  itemNumber: string;
  name: string;
  category: string;
  basePrice: number;
  currentPrice: number;
  policyRuleId: string;
}

const MOCK_CATALOGUE: MockItem[] = [
  {
    itemNumber: "1234567",
    name: 'Samsung 65" QLED 4K TV',
    category: "Electronics",
    basePrice: 899.99,
    currentPrice: 749.99,
    policyRuleId: "policy-electronics-90-day",
  },
  {
    itemNumber: "2345678",
    name: "Kirkland Signature Olive Oil 2L",
    category: "Pantry",
    basePrice: 19.99,
    currentPrice: 17.49,
    policyRuleId: "policy-30-day",
  },
  {
    itemNumber: "3456789",
    name: 'Apple MacBook Air 15" M3',
    category: "Electronics",
    basePrice: 1399.99,
    currentPrice: 1299.99,
    policyRuleId: "policy-electronics-90-day",
  },
  {
    itemNumber: "4567890",
    name: "Dyson V15 Detect Cordless Vacuum",
    category: "Home",
    basePrice: 649.99,
    currentPrice: 599.99,
    policyRuleId: "policy-30-day",
  },
  {
    itemNumber: "5678901",
    name: "Kirkland Signature Protein Bar 54-Pack",
    category: "Health",
    basePrice: 34.99,
    currentPrice: 34.99,
    policyRuleId: "policy-30-day",
  },
  {
    itemNumber: "6789012",
    name: "Weber Genesis E-325s Gas Grill",
    category: "Seasonal",
    basePrice: 799.99,
    currentPrice: 649.99,
    policyRuleId: "policy-seasonal",
  },
  {
    itemNumber: "7890123",
    name: "Instant Pot Duo 8 Qt",
    category: "Appliances",
    basePrice: 89.99,
    currentPrice: 79.99,
    policyRuleId: "policy-30-day",
  },
  {
    itemNumber: "8901234",
    name: "Cuisinart Coffee Center 12-Cup",
    category: "Appliances",
    basePrice: 119.99,
    currentPrice: 119.99,
    policyRuleId: "policy-30-day",
  },
  {
    itemNumber: "9012345",
    name: "Bose QuietComfort 45 Headphones",
    category: "Electronics",
    basePrice: 329.99,
    currentPrice: 279.99,
    policyRuleId: "policy-electronics-90-day",
  },
  {
    itemNumber: "0123456",
    name: "Kirkland Signature Laundry Pacs 152-Pack",
    category: "Household",
    basePrice: 21.99,
    currentPrice: 18.99,
    policyRuleId: "policy-30-day",
  },
];

function computeVerdict(
  purchasePrice: number,
  currentPrice: number,
  withinWindow: boolean,
): Verdict {
  const drop = purchasePrice - currentPrice;
  const pct = drop / purchasePrice;

  if (drop <= 0) return "no_action";
  if (!withinWindow) return "review";
  if (drop >= 2.0 || pct >= 0.03) return "alert";
  return "review";
}

function getDaysUntilExpiry(
  purchaseDateStr: string,
  windowDays: number | null,
): number | null {
  if (windowDays === null) return null;
  const purchased = new Date(purchaseDateStr);
  const expiry = new Date(purchased);
  expiry.setDate(expiry.getDate() + windowDays);
  const now = new Date();
  return Math.max(0, Math.ceil((expiry.getTime() - now.getTime()) / 86400000));
}

export function extractReceiptFromUpload(
  filename: string,
  purchaseDateOverride?: string,
): ReceiptDetail {
  const id = randomUUID();
  const now = new Date();

  // Pick a deterministic subset of items based on filename hash
  const hash = filename.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const count = 3 + (hash % 5); // 3-7 items
  const shuffled = [...MOCK_CATALOGUE].sort(
    (_, __) => (hash % 3) - 1 + Math.random() * 0.1,
  );
  const selectedItems = shuffled.slice(0, count);

  // Purchase date: 8-20 days ago (within the 30-day window)
  const purchaseDate = purchaseDateOverride ?? (() => {
    const d = new Date(now);
    d.setDate(d.getDate() - (8 + (hash % 13)));
    return d.toISOString().split("T")[0];
  })();

  const warehouseNames = [
    "Costco Wholesale #1059 — San Jose, CA",
    "Costco Wholesale #0217 — Seattle, WA",
    "Costco Wholesale #0488 — Austin, TX",
    "Costco Wholesale #1189 — Chicago, IL",
    "Costco Wholesale #0734 — New York, NY",
  ];

  const items: ReceiptItem[] = selectedItems.map((m) => {
    const rule = POLICY_RULES.find((p) => p.id === m.policyRuleId)!;
    const daysLeft = getDaysUntilExpiry(purchaseDate, rule.windowDays);
    const withinWindow = daysLeft === null || daysLeft > 0;
    const priceDrop = Math.max(0, m.basePrice - m.currentPrice);
    const percentDrop = m.basePrice > 0 ? priceDrop / m.basePrice : 0;
    const verdict = computeVerdict(m.basePrice, m.currentPrice, withinWindow);

    const evidenceMap: Record<string, string> = {
      alert: `Current Costco price: $${m.currentPrice.toFixed(2)} — down from your $${m.basePrice.toFixed(2)} purchase. You qualify for a $${priceDrop.toFixed(2)} refund at Member Services.`,
      review: `Price dropped $${priceDrop.toFixed(2)} but ${!withinWindow ? "the adjustment window has expired" : "the drop is below the $2 / 3% threshold"}. Visit Member Services to confirm eligibility.`,
      no_action:
        priceDrop <= 0
          ? "Current price is equal to or higher than your purchase price. No adjustment available."
          : "No qualifying price drop detected.",
    };

    return {
      id: randomUUID(),
      itemNumber: m.itemNumber,
      name: m.name,
      category: m.category,
      quantity: 1,
      purchasePrice: m.basePrice,
      currentPrice: m.currentPrice,
      priceDrop: parseFloat(priceDrop.toFixed(2)),
      percentDrop: parseFloat((percentDrop * 100).toFixed(1)),
      verdict,
      policyRuleId: m.policyRuleId,
      policyRuleTitle: rule.title,
      evidenceSnippet: evidenceMap[verdict],
      withinPolicyWindow: withinWindow,
      daysUntilExpiry: daysLeft,
    };
  });

  const alertItems = items.filter((i) => i.verdict === "alert");
  const reviewItems = items.filter((i) => i.verdict === "review");
  const estimatedRefund = alertItems.reduce((sum, i) => sum + i.priceDrop, 0);

  return {
    id,
    filename,
    uploadedAt: now,
    warehouse: warehouseNames[hash % warehouseNames.length],
    purchaseDate,
    memberNumber: `****${1000 + (hash % 9000)}`,
    totalAmount: parseFloat(
      items.reduce((s, i) => s + i.purchasePrice * i.quantity, 0).toFixed(2),
    ),
    status: "ready",
    items,
    alertCount: alertItems.length,
    reviewCount: reviewItems.length,
    estimatedRefund: parseFloat(estimatedRefund.toFixed(2)),
    itemCount: items.length,
  };
}

// ─── Seed with a sample receipt so the dashboard is never empty ───────────────
const SEED_FILENAME = "Costco_Receipt_June2025.pdf";
const SEED_RECEIPT_ID = "seed-receipt-costco-june-2025";

export async function seedIfEmpty(): Promise<void> {
  // Generate a deterministic seed receipt with a stable purchase date so
  // item IDs derived below are always the same across restarts.
  const seed = extractReceiptFromUpload(SEED_FILENAME, "2025-06-15");

  // Override with a stable ID — ON CONFLICT DO NOTHING makes this safe for
  // concurrent server startups (rolling deploys, two workers racing, etc.).
  seed.id = SEED_RECEIPT_ID;

  const inserted = await db
    .insert(receiptsTable)
    .values({
      id: seed.id,
      filename: seed.filename,
      uploadedAt: seed.uploadedAt,
      warehouse: seed.warehouse,
      purchaseDate: seed.purchaseDate,
      memberNumber: seed.memberNumber,
      totalAmount: seed.totalAmount,
      status: seed.status,
      alertCount: seed.alertCount,
      reviewCount: seed.reviewCount,
      estimatedRefund: seed.estimatedRefund,
      itemCount: seed.itemCount,
    })
    .onConflictDoNothing()
    .returning({ id: receiptsTable.id });

  // Only insert items when the receipt row was freshly created; if the
  // receipt already existed, items are already present.
  if (inserted.length > 0 && seed.items.length > 0) {
    await db
      .insert(receiptItemsTable)
      .values(
        seed.items.map((item, idx) => ({
          // Stable item IDs derived from the seed receipt ID + position so
          // a second concurrent attempt also hits ON CONFLICT DO NOTHING.
          id: `${SEED_RECEIPT_ID}-item-${idx}`,
          receiptId: seed.id,
          itemNumber: item.itemNumber,
          name: item.name,
          category: item.category,
          quantity: item.quantity,
          purchasePrice: item.purchasePrice,
          currentPrice: item.currentPrice,
          priceDrop: item.priceDrop,
          percentDrop: item.percentDrop,
          verdict: item.verdict,
          policyRuleId: item.policyRuleId,
          policyRuleTitle: item.policyRuleTitle,
          evidenceSnippet: item.evidenceSnippet,
          withinPolicyWindow: item.withinPolicyWindow,
          daysUntilExpiry: item.daysUntilExpiry,
        })),
      )
      .onConflictDoNothing();
  }
}
