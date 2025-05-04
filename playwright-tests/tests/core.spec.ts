
import {test, expect} from '@playwright/test';

test('has title', async ({page}, testInfo) => {
  await page.goto('http://localhost:3000/');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });


  expect('hi').toBe('bye');





  console.log(`Go to http://0.0.0.0:9323/#?testId=${testInfo.testId} to see the test result of this test.`);
  console.log('Or just click the test name at http://0.0.0.0:9323/ to see the test result of this test.');
});

