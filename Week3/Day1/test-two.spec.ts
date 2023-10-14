import {test,expect} from "@playwright/test"

test(`understanding locator auto retry`,async({page})=>{

    await page.goto("https://www.leafground.com/waits.xhtml")

    //wrapper [hiding of the implementation oof function ]
    const hiddenButtonLocator =  page.getByText("I am here")

    //find your specific element from matching element

    //index based using locator.nth() //starts from 0

    const hiddenElementByIndex = page.locator(".ui-button-text").nth(1)

    //dynamic filter based on text //user facing
    const hiddenElementBasedOnText = page.locator(".ui-button-text").filter({
        hasText:"I am here"
    })

    //one more way of text based locator

    const textBasedLocator = page.locator("text=I am here")
    //locator.click("page.locator(".ui-button-text")") 
    /**
     * locator resolved to 6 elements
     */
    await page.locator(".ui-button-text").nth(0).click() //click on the button 
    // await expect(hiddenElementBasedOnText).toBeVisible({timeout:1000})
    await hiddenElementBasedOnText.click()

    //explicit element to be visible
    hiddenElementBasedOnText.waitFor({state:"attached",timeout:10000})

})