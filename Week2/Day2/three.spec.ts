import {chromium,test} from "@playwright/test"

test(`login to sauce demo web app`,async()=>{
    //=====setup=====
    //launching the browser
    const browserInstance = await chromium.launch()
    //creating the browser context
    const browserContext = await browserInstance.newContext()
    //creating the page
    const page = await browserContext.newPage()

    ////////test execution //test steps

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

 
    //3. enter the password
    await page.locator(userPasswordSelector).fill("secret_sauce")
    //4. click on  login button
    await page.locator(loginButtonSelector).click()
    //5. we will make sure that the page.loaded
    await page.waitForTimeout(10000)

    await browserInstance.close()
})