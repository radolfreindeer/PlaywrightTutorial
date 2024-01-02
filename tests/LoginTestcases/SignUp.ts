import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  const emailinputform = await page.getByPlaceholder('Enter email');
  const passwordinputform = await page.getByPlaceholder('Enter password');

  await page.goto('/');
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('button', { name: 'mail Sign Up with Email' }).click({
    position: {
      x: 84,
      y: 24
    }
  });
  emailinputform.click();
  emailinputform.fill('pickuptest123@gmail.com');
  emailinputform.fill('test124');
  emailinputform.fill('test567');
  emailinputform.press('CapsLock');
  passwordinputform.press('CapsLock');
  passwordinputform.fill('Welcome@977');
  await page.getByRole('button', { name: 'Create account' }).click();
  
  await page.getByText('Your account has been created successfully!');
  expect('Your account has been created successfully!').toEqual(expect.stringContaining('Your account has been created successfully!'));
});

