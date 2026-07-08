import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import os from "os";

/** Upload a minimal PNG and return the receipt ID parsed from the redirect URL. */
async function uploadReceipt(page: import("@playwright/test").Page): Promise<string> {
  const pngBase64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  const tmpFile = path.join(os.tmpdir(), `receipt-delete-test-${Date.now()}.png`);
  fs.writeFileSync(tmpFile, Buffer.from(pngBase64, "base64"));

  try {
    await page.goto("/upload");
    await page.waitForSelector('[data-testid="input-file-upload"]');
    await page.locator('[data-testid="input-file-upload"]').setInputFiles(tmpFile);
    await page.waitForSelector('[data-testid="button-submit-upload"]');
    await page.click('[data-testid="button-submit-upload"]');

    await expect(page).toHaveURL(/\/receipts\/[a-zA-Z0-9_-]+$/, {
      timeout: 20_000,
    });

    const url = page.url();
    return url.split("/receipts/")[1];
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

test.describe("Receipt delete flow", () => {
  test("deleting a receipt removes it from the list without a page reload", async ({
    page,
  }) => {
    // 1. Upload a receipt so there is at least one row on the list
    const receiptId = await uploadReceipt(page);

    // 2. Navigate to the receipts list
    await page.goto("/receipts");

    // Wait for the row to appear
    const row = page.locator(`[data-testid="row-receipt-${receiptId}"]`);
    await expect(row).toBeVisible({ timeout: 10_000 });

    // 3. Stamp the page so we can detect a full reload.
    //    If the page reloads, window.__noReload will be gone.
    await page.evaluate(() => {
      (window as any).__noReload = true;
    });

    // 4. Hover over the row to make the trash icon visible (opacity 0 → 100)
    await row.hover();

    const deleteBtn = page.locator(
      `[data-testid="btn-delete-receipt-${receiptId}"]`,
    );
    await expect(deleteBtn).toBeVisible({ timeout: 5_000 });

    // 5. Click the trash icon
    await deleteBtn.click();

    // 6. Assert the row disappears from the list
    await expect(row).not.toBeVisible({ timeout: 10_000 });

    // 7. Assert no full page reload occurred — the stamp must still be present
    const noReload = await page.evaluate(() => (window as any).__noReload);
    expect(noReload).toBe(true);
  });
});
