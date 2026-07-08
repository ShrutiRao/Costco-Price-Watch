import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import os from "os";

test.describe("Receipt upload flow", () => {
  test("uploading a PDF navigates to the receipt detail page", async ({
    page,
  }) => {
    // Create a minimal PDF in a temp file so we have a real file to upload
    const tmpDir = os.tmpdir();
    const tmpFile = path.join(tmpDir, "test-receipt.pdf");
    // Minimal valid-ish PDF content (enough to pass the MIME type check)
    fs.writeFileSync(
      tmpFile,
      "%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\nxref\n0 1\n0000000000 65535 f\ntrailer<</Size 1>>\nstartxref\n9\n%%EOF",
    );

    await page.goto("/upload");

    // Wait for the upload page to be ready
    await page.waitForSelector('[data-testid="input-file-upload"]');

    // Set the file on the hidden input
    const fileInput = page.locator('[data-testid="input-file-upload"]');
    await fileInput.setInputFiles(tmpFile);

    // The submit button should now be visible
    await page.waitForSelector('[data-testid="button-submit-upload"]');

    // Click Process Receipt
    await page.click('[data-testid="button-submit-upload"]');

    // After a successful upload the app redirects to /receipts/:id
    await expect(page).toHaveURL(/\/receipts\/[a-zA-Z0-9_-]+$/, {
      timeout: 20_000,
    });

    // Verify the detail page rendered a recognisable heading
    await expect(page.locator("h1")).not.toBeEmpty();

    // Clean up
    fs.unlinkSync(tmpFile);
  });

  test("uploading a PNG navigates to the receipt detail page", async ({
    page,
  }) => {
    // Minimal 1×1 transparent PNG (valid PNG binary)
    const pngBase64 =
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    const tmpDir = os.tmpdir();
    const tmpFile = path.join(tmpDir, "test-receipt.png");
    fs.writeFileSync(tmpFile, Buffer.from(pngBase64, "base64"));

    await page.goto("/upload");

    await page.waitForSelector('[data-testid="input-file-upload"]');

    const fileInput = page.locator('[data-testid="input-file-upload"]');
    await fileInput.setInputFiles(tmpFile);

    // File preview + submit button should appear
    await page.waitForSelector('[data-testid="button-submit-upload"]');

    await page.click('[data-testid="button-submit-upload"]');

    // Should redirect to the receipt detail page
    await expect(page).toHaveURL(/\/receipts\/[a-zA-Z0-9_-]+$/, {
      timeout: 20_000,
    });

    await expect(page.locator("h1")).not.toBeEmpty();

    fs.unlinkSync(tmpFile);
  });

  test("uploading an unsupported file type shows a validation error", async ({
    page,
  }) => {
    const tmpDir = os.tmpdir();
    const tmpFile = path.join(tmpDir, "not-a-receipt.txt");
    fs.writeFileSync(tmpFile, "this is not a receipt");

    await page.goto("/upload");

    await page.waitForSelector('[data-testid="input-file-upload"]');

    const fileInput = page.locator('[data-testid="input-file-upload"]');
    await fileInput.setInputFiles(tmpFile);

    // The validation error message should appear
    await expect(
      page.getByText("Please upload a valid image (JPG, PNG) or PDF."),
    ).toBeVisible({ timeout: 5_000 });

    // The submit button must NOT appear — invalid file should not be staged
    await expect(
      page.locator('[data-testid="button-submit-upload"]'),
    ).not.toBeVisible();

    fs.unlinkSync(tmpFile);
  });
});
