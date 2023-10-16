import {chromium, expect, test} from "@playwright/test"

test(`Testing waiting for a button to become visible`,async({page})=>{

    const browser = await chromium.launch()
    browser.version()
    await page.goto("https://www.leafground.com/waits.xhtml")
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"})
    const buttonToClick = cardToSelect.locator("button").filter({hasText:"Click"})
    const buttonHideen = cardToSelect.locator("button").filter({hasText:"I am here"})
    await page.pause()
    await expect(buttonHideen).not.toBeVisible()
    await buttonToClick.click()
    await expect(buttonHideen).toBeVisible({timeout:10000})

})

