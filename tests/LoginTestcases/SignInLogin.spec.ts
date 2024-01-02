import { test, expect } from '@playwright/test';

test('Outsized URL', async ({ page }) => {
  await page.goto('https://outsized.com/');
});

test('SignIn/Login', async({page}) =>{

 await page.getByText('Outsized')
 await page.getByPlaceholder('Enter Password')
 await page.getByRole('button', { name: 'Sign In', exact: true })
 await page.getByRole('button', { name: 'Sign In with LinkedIn' })
 await page.getByText('Forgot Password?')
 await page.getByRole('paragraph')
 await page.getByText('Outsized Sign In Email')
 await page.getByText('Sign Up instead');
 await page.getByText('Email AddressPasswordForgot');
     
});
