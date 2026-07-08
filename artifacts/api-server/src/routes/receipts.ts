import { Router, type IRouter } from "express";
import multer from "multer";
import {
  GetReceiptParams,
  DeleteReceiptParams,
  GetReceiptComparisonParams,
  ListReceiptsResponse,
  UploadReceiptResponse,
  GetReceiptResponse,
  GetReceiptComparisonResponse,
} from "@workspace/api-zod";
import {
  getReceipts,
  getReceiptById,
  addReceipt,
  deleteReceipt,
  extractReceiptFromUpload,
} from "../lib/store";

const router: IRouter = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

router.get("/receipts", async (_req, res): Promise<void> => {
  const all = await getReceipts();
  res.json(ListReceiptsResponse.parse(all));
});

router.post("/receipts", upload.single("file"), async (req, res): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded. Provide a file field." });
    return;
  }

  const receipt = extractReceiptFromUpload(req.file.originalname);
  await addReceipt(receipt);

  res.status(201).json(UploadReceiptResponse.parse(receipt));
});

router.get("/receipts/:receiptId", async (req, res): Promise<void> => {
  const params = GetReceiptParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const receipt = await getReceiptById(params.data.receiptId);
  if (!receipt) {
    res.status(404).json({ error: "Receipt not found" });
    return;
  }

  res.json(GetReceiptResponse.parse(receipt));
});

router.delete("/receipts/:receiptId", async (req, res): Promise<void> => {
  const params = DeleteReceiptParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const deleted = await deleteReceipt(params.data.receiptId);
  if (!deleted) {
    res.status(404).json({ error: "Receipt not found" });
    return;
  }

  res.sendStatus(204);
});

router.get("/receipts/:receiptId/comparison", async (req, res): Promise<void> => {
  const params = GetReceiptComparisonParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const receipt = await getReceiptById(params.data.receiptId);
  if (!receipt) {
    res.status(404).json({ error: "Receipt not found" });
    return;
  }

  const alertCount = receipt.items.filter((i) => i.verdict === "alert").length;
  const reviewCount = receipt.items.filter((i) => i.verdict === "review").length;
  const noActionCount = receipt.items.filter((i) => i.verdict === "no_action").length;
  const estimatedRefund = receipt.items
    .filter((i) => i.verdict === "alert")
    .reduce((sum, i) => sum + i.priceDrop, 0);

  res.json(
    GetReceiptComparisonResponse.parse({
      receiptId: receipt.id,
      alertCount,
      reviewCount,
      noActionCount,
      estimatedRefund: parseFloat(estimatedRefund.toFixed(2)),
      items: receipt.items,
    }),
  );
});

export default router;
