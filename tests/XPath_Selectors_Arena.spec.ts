import { test, expect } from '../fixtures/fixture'; 

  test('4. Verify XPath Structural Traversals', async ({ Locator }) => {

    // XPath Row Shifting: Locate row via static text label, then traverse to its adjacent button cell
    
    await expect(Locator.xpath_unlockButtonXPath).toHaveText('Unlock');
    await Locator.xpath_unlockButtonXPath.click();

    // Confirm that clicking the action button displays the contextual tracking success box
    
    await expect(Locator.xpath_feedbackMsg).toBeVisible();
    await expect(Locator.xpath_feedbackMsg).toHaveText('XPath Interaction successful!');
  });
