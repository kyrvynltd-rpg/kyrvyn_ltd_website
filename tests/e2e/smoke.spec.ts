import { test, expect } from "@playwright/test";

test("home loads and has primary heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("background blocks are mounted and animating", async ({ page }) => {
  await page.goto("/");
  const blocks = page.locator(".kyrvyn-blocks");
  await expect(blocks).toHaveCount(1);
  const name = await blocks.evaluate(
    (el) => getComputedStyle(el.querySelector(".kyrvyn-block") as HTMLElement).animationName,
  );
  expect(name).toContain("kyrvyn-block-float");
});

test("projects listing loads", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: /View case study/i }).first()).toBeVisible();
});

test("projects detail route renders", async ({ page }) => {
  await page.goto("/projects/enterprise-web-platform-modernisation");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Enterprise Web Platform Modernisation",
  );
});

test("blog listing loads", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: /Insights/i })).toBeVisible();
});

test("contact form loads and can submit client-side validation", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: /^Contact$/i })).toBeVisible();
  await expect(page.getByLabel("Representative Name")).toBeVisible();
  await expect(page.getByLabel("Corporate Email")).toBeVisible();
});
