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
});
