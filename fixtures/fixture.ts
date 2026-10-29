import { test as base } from '@playwright/test';
import { LocatorPage } from '../pageobject/Locator';

// Define the types for your custom fixtures
type MyFixtures = {
  Locator: LocatorPage;
};

// Extend the base test object to include your custom fixture
export const test = base.extend<MyFixtures>({
  Locator: async ({ page }, use) => {
    // 1. Perform the automatic navigation
    await page.goto('http://127.0.0.1:5500/WebPage/app.html');
    
    // 2. Instantiate the Page Object Model
    const Locator = new LocatorPage(page);
    
    // 3. Pass the fixture instance to the test
    await use(Locator);
  },
});

// Export expect so you can import everything from one place
export { expect } from '@playwright/test';