import { Router, type IRouter } from "express";
import { GetDashboardSummaryResponse } from "@workspace/api-zod";
import { getReceipts } from "../lib/store";

const router: IRouter = Router();

router.get("/dashboard/summary", async (_req, res): Promise<void> => {
  const receipts = getReceipts();

  const totalReceipts = receipts.length;
  const allItems = receipts.flatMap((r) => r.items);
  const totalItemsScanned = allItems.length;
  const totalAlerts = allItems.filter((i) => i.verdict === "alert").length;
  const totalReviews = allItems.filter((i) => i.verdict === "review").length;
  const estimatedTotalSavings = allItems
    .filter((i) => i.verdict === "alert")
    .reduce((sum, i) => sum + i.priceDrop, 0);

  const droppedItems = allItems.filter((i) => i.priceDrop > 0);
  const avgDropPercent =
    droppedItems.length > 0
      ? droppedItems.reduce((sum, i) => sum + i.percentDrop, 0) / droppedItems.length
      : 0;

  const lastScannedAt =
    receipts.length > 0 ? receipts[0].uploadedAt.toISOString() : null;

  const topAlert = allItems
    .filter((i) => i.verdict === "alert")
    .sort((a, b) => b.priceDrop - a.priceDrop)[0];

  res.json(
    GetDashboardSummaryResponse.parse({
      totalReceipts,
      totalItemsScanned,
      totalAlerts,
      totalReviews,
      estimatedTotalSavings: parseFloat(estimatedTotalSavings.toFixed(2)),
      avgDropPercent: parseFloat(avgDropPercent.toFixed(1)),
      lastScannedAt,
      topAlertItem: topAlert?.name ?? null,
    }),
  );
});

export default router;
