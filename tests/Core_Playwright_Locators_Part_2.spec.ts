import { test, expect } from '../fixtures/fixture'; 

test('2. Verify Core Playwright Locators Part II', async ({ Locator }) => {

    // getByText: Target visual display markup strings explicitly rendered on screen
    await expect(Locator.getByText_magicPhrase).toBeVisible();

    // getByAltText: Select graphical images using fallback alternative descriptions
    await expect(Locator.getByAltText_companyLogo).toBeVisible();

    // getByTitle: Grab diagnostic elements holding standard mouse hover text flags
    await expect(Locator.getByTitle_tooltipElement).toBeVisible();

    // getByTestId: The gold standard for automation — queries tracking attributes (data-testid)
    
    await expect(Locator.getByTestId_secureField).toHaveValue('TestID-Activated');
    await Locator.getByTestId_secureField.fill('New-Test-Value');
    await expect(Locator.getByTestId_secureField).toHaveValue('New-Test-Value');
  });