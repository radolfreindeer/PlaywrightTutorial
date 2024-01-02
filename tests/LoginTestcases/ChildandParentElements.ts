import { test,expect } from '@playwright/test'
import { hasUncaughtExceptionCaptureCallback } from 'process';

test('Locating Child Elements',async ({page}) => {
  
    const nbcard = await page.locator('nb-card');

    await page.goto("https://akveo.github.io/nebular/docs/components/card/overview#nbcardcomponent");

    nbcard.getByText("List inside nb-card");
    nbcard.getByRole('button',{name: "btn action-item action-button ng-star-inserted"}).isVisible;

});

test('Parent Locators', async ({page}) => {


await page.locator('nb-card'),{hastext: "List inside nb-card"};
await page.locator('nb-card').filter({hasText :"My example"});


});

