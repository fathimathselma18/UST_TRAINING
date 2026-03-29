
//9
/*

import { test, expect } from "@playwright/test";
test('To validate search functionality by filling all the field  ', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/bus/');

    await page.locator('//input[contains(@placeholder,"Source City")]').click();
    await page.locator('//input[contains(@placeholder,"Source City")]').fill("Bengaluru");

    await page.locator("//div[contains(@class ,'auto_sugg_tttl')  and text()='Bengaluru']").click();

    await page.locator('//input[contains(@placeholder,"Destination City")]').click();
    await page.locator('//input[contains(@placeholder,"Destination City")]').fill("Delhi");

    await page.locator("//div[contains(@class,'auto_sugg_tttl ng-binding')and text()='Delhi']").click();


    const today = new Date();
    // const year = today.getFullYear().toString();
    // const month = today.toLocaleString("default", { month: "long" }); // full month name
    const day = today.getDate().toString();

    await page.locator("//label[contains(@class,'srlabel-frm datelbl')]").click();

    await page.locator("a", { hasText: day }).click();
    await page.locator("//input[contains(@class,'bsrc-btn btnhgtt')]").click();

    await expect(page).toHaveURL("https://bus.easemytrip.com/home/list?org=Bengaluru&des=Delhi&date=28-03-2026&searchid=122_733&CCode=IN&AppCode=Emt")
    await page.waitForTimeout(3000);


});

*/