import { test, expect } from "@playwright/test";

test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("should render the main page", async ({ page }) => {
    await expect(page.getByText(/vite \+ react/i)).toBeVisible();
  });

  test("should increment counter on button click", async ({ page }) => {
    const button = page.getByRole("button");

    await expect(button).toHaveText("count is 0");
    await button.click();
    await expect(button).toHaveText("count is 1");
  });

  test("should render Vite and React logos", async ({ page }) => {
    // await expect(page.getByAltText("Vite logo")).toBeVisible();
    await expect(page.getByAltText("React logo")).toBeVisible();
  });

  test("should have working links", async ({ page }) => {
    // await expect(page.getByRole("link", { name: /vite/i })).toHaveAttribute(
    //   "href",
    //   "https://vite.dev"
    // );
    await expect(page.getByRole("link", { name: /react/i })).toHaveAttribute(
      "href",
      "https://react.dev"
    );
  });
});
