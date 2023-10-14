import {test,expect, Locator} from "@playwright/test"

const siteUrl = "https://www.saucedemo.com/v1/"
test(`Verify the login button is visible`,async({page})=>{
    
    //go to the side
    await page.goto(siteUrl)

    /**
     * Pause contraints
     * page.pause()
     * //see your code
     * //manually tinker with it
     * //record the next flows and copy it 
     * 
     * Rules:
     * 1. this only for debugging, adding them in actual test code
     * can make your flaky 
     * 2. page works on headed mode
     * 
     * -- GUI 
     * 
     */

    
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator("#login-button").click()

    const backpackLocator = page.locator("#item_4_title_link")
    await expect(backpackLocator).toContainText("Sauce Labs")

    // await expect(backpackLocator).toHaveAttribute("href","https://www.saucedemo.com/v1/inventory-item.html?id=4")
    // const hrefAttribute = await backpackLocator.getAttribute("href")
    // console.log(`href attribute ${hrefAttribute}`)

    // expect(hrefAttribute).toContain("inventory")

    // await expect(page).toHaveTitle("Swag Labs")


    //verify the login button is visible
    /**
     * 
     * expect(locator).toBeVisible()
     * 
     */

    //generic assertion
    // const responseCode = 200
    // const myname = "prateek"
    // expect(responseCode,`expecting act responde code ${responseCode} to be 200`).toBe(200)
    // expect(myname,`expecting string ${myname} to be prate`).toContain("prate")

    //test based matching for locators

    //verify that the login button contains text as Login

})

