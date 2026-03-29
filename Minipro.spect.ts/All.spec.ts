
/*import { test, expect } from "@playwright/test";
test('To validate source input field', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');


    await page.locator('//input[contains(@placeholder,"Source City")]').click();
    await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']")

    await page.waitForTimeout(1000);

});*/


/*2.


import { test, expect } from "@playwright/test";
test('To validate destination  input field', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');


    await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Kochi");

    await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Kochi']").click();


    await page.waitForTimeout(1000);

}); */

/*3

import { test, expect } from "@playwright/test";
test('To validate the search without filling destination city', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    await page.locator('//input[contains(@placeholder,"Source City")]').click();
    await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();
    await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();
    expect(page.locator("//div[@id='deserror']")).toBeVisible()

    await page.waitForTimeout(1000);



});*/


/*4

import { test, expect } from "@playwright/test";
test('To validate the search without filling source city', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Kochi");

    await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Kochi']").click();
    await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();
    expect(page.locator("//div[@id='srcerror']")).toBeVisible();

    await page.waitForTimeout(1000);


});*/


/*5
import { test, expect } from "@playwright/test";
test('To validate the date without filling source and destination', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');


    await page.locator("//div[contains(text(),'Today')]").click();
    await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();

    expect(page.locator("//div[@id='srcerror']")).toBeVisible();
    expect(page.locator("//div[@id='deserror']")).toBeVisible()





    await page.waitForTimeout(1000);


});*/


/*6

import { test, expect } from "@playwright/test";
test('To validate the date', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    await page.locator('//input[contains(@placeholder,"Source City")]').click();
    await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();

    await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Kochi");

    await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Kochi']").click();
    await page.locator("//div[contains(text(),'Today')]").click();
    await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();

    await page.waitForTimeout(1000)

});
*/
/*7

import { test, expect } from "@playwright/test";
test('To validate source and destination can interchange', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    await page.locator('//input[contains(@placeholder,"Source City")]').click();
    await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();

    await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Kochi");

    await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Kochi']").click();

    await page.locator("//div[contains(@class,'swipe6')]").click();
    await page.waitForTimeout(1000);

});*/


//8

/*import { test, expect } from "@playwright/test";
test('To validate source and destination is same', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    await page.locator('//input[contains(@placeholder,"Source City")]').click();
    await page.locator('//input[contains(@placeholder,"Source City")]').fill("Kochi");

    await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Kochi']").click();


    await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Kochi");

    await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Kochi']").click();

    await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();

    await page.locator("//div[contains(@class,'errorfrmsrc error-message-dropoff')]");

    expect(page.locator("//div[contains(@class,'errorfrmsrc error-message-dropoff')]"))
    await page.waitForTimeout(1000)



});
*/
