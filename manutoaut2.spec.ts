import { test, expect } from "@playwright/test";
test('To validate search test', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    //FROM

    // await page.locator('//input[contains(@placeholder,"Source City")]').click();
    // await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    // await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();

    // // TO

    // await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    // await page.locator('//input[contains(@placeholder,"Destination City")]').fill("goa");

    // await page.locator("//div[contains(@class,'auto_sugg_tttl ')and text()='Goa']").click();


    // // search button 

    // await page.locator('//input[contains(@placeholder,"Source City")]').click();
    // await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    // await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();


    // await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    // await page.locator('//input[contains(@placeholder,"Destination City")]').fill("goa");

    // await page.locator("//div[contains(@class,'auto_sugg_tttl ')and text()='Goa']").click();
    // await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();



    // // //DATE

    // await page.locator('//input[contains(@placeholder,"Source City")]').click();
    // await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    // await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();


    // await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    // await page.locator('//input[contains(@placeholder,"Destination City")]').fill("goa");

    // await page.locator("//div[contains(@class,'auto_sugg_tttl ')and text()='Goa']").click();

    // await page.locator("//span[contains(@class,'dt_icn2')]").click();
    // await page.locator("//div[contains(text(),'Today')]").click();






    // source and destination same 

    // await page.locator('//input[contains(@placeholder,"Source City")]').click();
    // await page.locator('//input[contains(@placeholder,"Source City")]').fill("Goa");

    // await page.locator("//div[contains(@class,'auto_sugg_tttl') and text() ='Goa']").click();


    // await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    // await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Goa");

    // await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Goa']").click();

    // await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();

    // await page.locator("//div[contains(@class,'errorfrmsrc error-message-dropoff')]");



    // user can book multiple seat 














    await page.waitForTimeout(10000);



});



