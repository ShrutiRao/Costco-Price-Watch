import {
  pgTable,
  text,
  timestamp,
  real,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const receiptsTable = pgTable("receipts", {
  id: text("id").primaryKey(),
  filename: text("filename").notNull(),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true }).notNull().defaultNow(),
  warehouse: text("warehouse").notNull(),
  purchaseDate: text("purchase_date").notNull(),
  memberNumber: text("member_number"),
  totalAmount: real("total_amount").notNull(),
  status: text("status", { enum: ["processing", "ready", "error"] })
    .notNull()
    .default("ready"),
  alertCount: integer("alert_count").notNull().default(0),
  reviewCount: integer("review_count").notNull().default(0),
  estimatedRefund: real("estimated_refund").notNull().default(0),
  itemCount: integer("item_count").notNull().default(0),
});

export const receiptItemsTable = pgTable("receipt_items", {
  id: text("id").primaryKey(),
  receiptId: text("receipt_id")
    .notNull()
    .references(() => receiptsTable.id, { onDelete: "cascade" }),
  itemNumber: text("item_number").notNull(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  quantity: integer("quantity").notNull().default(1),
  purchasePrice: real("purchase_price").notNull(),
  currentPrice: real("current_price").notNull(),
  priceDrop: real("price_drop").notNull().default(0),
  percentDrop: real("percent_drop").notNull().default(0),
  verdict: text("verdict", { enum: ["alert", "no_action", "review"] }).notNull(),
  policyRuleId: text("policy_rule_id"),
  policyRuleTitle: text("policy_rule_title"),
  evidenceSnippet: text("evidence_snippet"),
  withinPolicyWindow: boolean("within_policy_window").notNull().default(true),
  daysUntilExpiry: integer("days_until_expiry"),
});

export const insertReceiptSchema = createInsertSchema(receiptsTable);
export const insertReceiptItemSchema = createInsertSchema(receiptItemsTable);

export type InsertReceipt = z.infer<typeof insertReceiptSchema>;
export type Receipt = typeof receiptsTable.$inferSelect;
export type InsertReceiptItem = z.infer<typeof insertReceiptItemSchema>;
export type ReceiptItem = typeof receiptItemsTable.$inferSelect;
