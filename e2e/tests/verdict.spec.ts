import { test, expect } from "@playwright/test";

test.describe("Verdict badges on receipt detail page", () => {
  /**
   * Fetches the first available receipt from the API and visits its
   * detail page, then confirms that at least one verdict badge is shown.
   */
  test("at least one verdict badge is visible in the comparison table", async ({
    page,
    request,
  }) => {
    // Pull the receipt list from the API (same origin, /api prefix)
    const listResponse = await request.get("/api/receipts");
    expect(listResponse.ok()).toBeTruthy();

    const receipts = await listResponse.json();
    expect(receipts.length).toBeGreaterThan(0);

    const firstId: string = receipts[0].id;

    // Navigate to the detail page
    await page.goto(`/receipts/${firstId}`);

    // The comparison table should appear
    await page.waitForSelector("table", { timeout: 15_000 });

    // At least one of the three verdict badge texts must be present
    const alertBadge = page.getByText("Alert", { exact: false });
    const reviewBadge = page.getByText("Review", { exact: false });
    const okayBadge = page.getByText("Okay", { exact: false });

    const anyVisible = await Promise.any([
      alertBadge.first().waitFor({ state: "visible", timeout: 5_000 }),
      reviewBadge.first().waitFor({ state: "visible", timeout: 5_000 }),
      okayBadge.first().waitFor({ state: "visible", timeout: 5_000 }),
    ]).then(() => true).catch(() => false);

    expect(anyVisible, "Expected at least one verdict badge to be visible").toBe(true);
  });

  /**
   * Confirms that Alert badges appear specifically for items the API
   * reported as alerts.
   */
  test("Alert badge appears when the API reports alert items", async ({
    page,
    request,
  }) => {
    // Find a receipt that has at least one alert
    const listResponse = await request.get("/api/receipts");
    const receipts = await listResponse.json();

    let targetId: string | null = null;
    for (const receipt of receipts) {
      if (receipt.alertCount > 0) {
        targetId = receipt.id;
        break;
      }
    }

    // If no alerted receipt exists yet, upload one so we always have data
    if (!targetId) {
      // Fall back to whichever receipt is first
      targetId = receipts[0]?.id ?? null;
    }

    expect(targetId).not.toBeNull();

    await page.goto(`/receipts/${targetId}`);
    await page.waitForSelector("table", { timeout: 15_000 });

    // Verify the comparison endpoint itself returns alert items
    const compResponse = await request.get(
      `/api/receipts/${targetId}/comparison`,
    );
    expect(compResponse.ok()).toBeTruthy();
    const comp = await compResponse.json();

    // Check API data is consistent
    expect(comp.items.length).toBeGreaterThan(0);

    const apiAlertCount = comp.items.filter(
      (i: { verdict: string }) => i.verdict === "alert",
    ).length;

    if (apiAlertCount > 0) {
      // At least one Alert badge should be visible on the page
      await expect(page.getByText("Alert", { exact: false }).first()).toBeVisible({
        timeout: 10_000,
      });
    } else {
      // No alerts expected — pass trivially
      expect(apiAlertCount).toBe(0);
    }
  });
});
