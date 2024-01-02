import {test,expect,Page } from '@playwright/test' ;

export class ReusingLocators{

    readonly page: Page;

    constructor(page: Page){
        this.page = page ;
    } 

    async Demoform()
    {
      
      await this.page.goto('https://www.saucedemo.com/');
      await this.page.goto('https://www.saucedemo.com/');
      await this.page.locator('[data-test="username"]').fill('standard_user');
      await this.page.locator('[data-test="password"]').fill('secret_sauce');     
      await this.page.getByRole('button', { name: 'login-button', exact: true }).click();
      
    }

   async Login()
    {
    await this.page.goto('https://www.saucedemo.com/');
      await this.page.locator('[data-test="username"]').fill('standard_user');
      await this.page.locator('[data-test="password"]').fill('secret_sauce');
      
      await this.page.getByRole('button', { name: 'login-button', exact: true }).click();
  
  //await this.page.getByRole('button', { name: 'Open Menu' }).click();
  //await this.page.getByRole('link', { name: 'All Items' }).click();
  //await this.page.getByText('All ItemsAboutLogoutReset App').click();
  //await this.page.getByRole('link', { name: 'About' }).click();
  //await this.page.getByRole('link', { name: 'Saucelabs' }).click();
    }
   
}

test.skip('test', async ({ page }) => {

  const login = new ReusingLocators(page);
  login.Login;

 /*
  const form = await page.locator('[data-test="username"]');
  
  form.click();
  form.fill('standard_user');
  form.press('Tab');
  form.fill('secret_sauce');
  form.click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'All Items' }).click();
  await page.getByText('All ItemsAboutLogoutReset App').click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Saucelabs' }).click();
*/

});

