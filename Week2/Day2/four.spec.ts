import {test} from "@playwright/test"
test.only(`login to sauce demo web app`,async({page})=>{
    // 1. load the url
    await page.goto("https://www.saucedemo.com/v1/index.html")
    // 2. find the selectors
    const userNameSelector:string = "#user-name"
    const userPasswordSelector:string = "#password"
    const loginButtonSelector:string = "#login-button"

    //3. enter the username
    /***
     * i need username locator
     * how do i find the username locator?
     * by using the selector of username
     */

    await page.locator(userNameSelector).fill("standard_user")
    //3. enter the password
    await page.locator(userPasswordSelector).fill("secret_sauce")
    //4. click on  login button
    await page.locator(loginButtonSelector).click()
    //5. we will make sure that the page.loaded
    await page.waitForTimeout(10000)
})

/***
 * global scopre
 * test is a fixture
 * page, contet, confifguration
 * //setup
 * launches browser
 * create context
 * const page
 * 
 * 
 * //teardown
 * close the context
 * saving the screenshot
 * trace
 * 
 * 
 */