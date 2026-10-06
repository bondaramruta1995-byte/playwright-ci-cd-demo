import { test, expect } from '@playwright/test';
import testdata from '../testdata/test-data.json' with {"type": "json"}

for(let data of testdata){
  test(`${data.testname}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder("Username").fill(data.username);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(data.password);
    await page.locator("[data-test=\"login-button\"]").click();
    let actualErrorMsg = await page.locator('[data-test="error"]').textContent();
    expect.soft(actualErrorMsg).toBe(data.errorMsg);
  });
}

// test('Verify user able to login payment @locator', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.getByPlaceholder("Username").click();
//   await page.getByPlaceholder("Username").fill("Abcd");
//   await page.getByPlaceholder("Password").click();
//   await page.getByPlaceholder("Password").fill("XYZ");
//   await page.getByText("Login").click();
// });