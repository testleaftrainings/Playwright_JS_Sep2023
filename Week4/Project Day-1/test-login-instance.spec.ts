import {expect, test} from "@playwright/test"

test.describe(`Login to instance and save storage state`,async()=>{

    const userName = "admin"
    const password = "kI-8y@Y3hTMe"
    const instanceUrl = "https://dev177094.service-now.com"

    test(`TC001 - Login to servicenow instance`,async({page})=>{
        await page.goto(instanceUrl)

        await page.waitForTimeout(10000)
        await page.locator("#user_name").fill(userName)
        await page.locator("#user_password").fill(password)
        await page.locator("#sysverb_login").click()

        const mainIframeLocator = page.frameLocator("iframe#gsft_main")
        await expect(mainIframeLocator.getByText("App Engine Studio")).toBeVisible({timeout:10000})

        //save the storage state
        await page.context().storageState({path:"creds/servicenow_login_creds.json"})
    

    })
})