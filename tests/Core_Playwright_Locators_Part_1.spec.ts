import { test, expect } from '@playwright/test';
import { LocatorPage } from "../pageobject/Locator.ts";

test.describe('Playwright Comprehensive Locator Arena Tests', () => {
  let Locator:LocatorPage;

  test.beforeEach(async ({ page }) => {
    // Navigate to the locally hosted application page before each test execution
    await page.goto('http://127.0.0.1:5500/WebPage/app.html');
  });

  test('1. Verify Core Playwright Locators Part I - getByRole', async ({ page }) => {
    Locator = new LocatorPage(page);
    
    // getByRole: Finds buttons based on explicit or implicit ARIA definitions
    await Locator.getByRole_ExecuteAction_button.click();
  });

  test('1. Verify Core Playwright Locators Part I - getByLabel', async ({ page }) => {
    Locator = new LocatorPage(page);
    // getByLabel: Target form fields mapped through <label for="..."> tags
    await Locator.getByLabel_emailInput.fill('tester@automation.com');
    await expect(Locator.getByLabel_emailInput).toHaveValue('tester@automation.com');

  });
  test('1. Verify Core Playwright Locators Part I - getByPlaceholder', async ({ page }) => {
    Locator = new LocatorPage(page);
    // getByPlaceholder: Grabs input boxes matching the internal placeholder copy
    await Locator.getByPlaceholder_uniqueToken.fill('Token_Alpha_2026');
    await expect(Locator.getByPlaceholder_uniqueToken).toHaveValue('Token_Alpha_2026');
  });

  test('1. Verify Core Playwright Locators Part I - FailedTestcase', async ({ page }) => {
    Locator = new LocatorPage(page);
    // getByPlaceholder: Grabs input boxes matching the internal placeholder copy
    await Locator.getByPlaceholder_uniqueToken.fill('Token_Alpha_2026');
    await expect(Locator.getByPlaceholder_uniqueToken).toHaveValue('Failed Testcase');
  });

});
