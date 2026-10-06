import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

// Import JSON Test Data
const testData = JSON.parse(
readFileSync(
new URL('../test_data.js/test_data.json', import.meta.url),
'utf8'
)
);

test.describe('SauceDemo Data Driven Login Testing', () => {

for (const data of testData.loginTests) {

```
test(data.testCaseId + ' - ' + data.scenario, async ({ page }) => {

  // Open SauceDemo Website
  await page.goto('https://www.saucedemo.com/');

  // Enter Username
  await page.locator('#user-name').fill(data.username);

  // Enter Password
  await page.locator('#password').fill(data.password);

  // Click Login Button
  await page.locator('#login-button').click();

  // Validate Expected Result
  if (data.expectedResult === 'success') {

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.locator('.inventory_list')).toBeVisible();

    console.log(data.testCaseId + ': Login Successful');

  } else {

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    console.log(data.testCaseId + ': Login Failed As Expected');

  }

});
```

}

});
