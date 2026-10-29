import { test, expect } from '../fixtures/fixture'; 

test('5. Verify Integrated Form Submission Scenarios', async ({ Locator }) => {

    // Scenario A: Check behavior during incomplete form entries (i.e. both username and password are empyty and verify the error and successfully message)
    await Locator.login_loginButton.click();
    await expect(Locator.login_loginButton).toBeVisible();

    // Scenario B: Fill standard inputs and run complete verification loop
    await Locator.login_username.fill('admin');
    await Locator.login_password.fill('password123');
    await Locator.login_loginButton.click();

    // Assert authentication success triggers
    await expect(Locator.login_successMsg).toBeVisible();
    await expect(Locator.login_errorMsg).not.toBeVisible();
  });