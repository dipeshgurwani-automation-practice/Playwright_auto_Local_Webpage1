import { test, expect } from '../fixtures/fixture'; 


  test('3. Verify Advanced CSS Selection Strings', async ({ Locator }) => {
    // CSS Class Hierarchies: Drilling down to an active child element via parent containers
    await expect(Locator.absoluteCss_cssTarget).toHaveText('Target Me via CSS Class');

    // CSS Multi-Attribute: Target an element leveraging specific tags, attributes, and states
    
    await expect(Locator.relativeCss_disabledInput).toBeDisabled();
    await expect(Locator.relativeCss_disabledInput).toHaveValue('Read Only System Block');
  });