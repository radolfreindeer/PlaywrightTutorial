import { test,expect } from '@playwright/test'
import {Navigation} from '../LoginTestcases/PageObjects/Navigation.spec'


test('test', async ({ page }) => {

//Locator Assertions

//const basicform = await page.goto("https://www.saucedemo.com/");

const NavigationPage = new Navigation(page);
     
    NavigationPage.Demoform(); 

await page.getByPlaceholder('name').fill('standard_user');
await page.locator('[data-test="username"]').press('Tab');
await page.getByLabel('password').isVisible;
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button',{ name: 'submit' }).click();

//const value = await page.getByText('swaglabs');
//expect(value).toHaveText("swaglabs")

});