import { expect, test } from "@playwright/test";

test("should navigate and display the films entity list", async ({ page }) => {
  await page.goto("/");

  await page.click("text=films");

  await expect(page.locator("text=The Phantom Menace")).toBeVisible();

  await page.click("text=The Phantom Menace");
  await expect(page.locator("text=Jar Jar Binks")).toBeVisible();
  await expect(page.locator("text=Rick McCallum")).toBeVisible();
});
