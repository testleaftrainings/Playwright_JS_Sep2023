import {chromium,test} from "@playwright/test"

test("title 1",async()=>{
    //open a brower instance
    const browserInstance = await chromium.launch({headless:false,channel:"chrome"})
    //get a browser context from the browser instance
    const browserContext = await browserInstance.newContext()
    //get a new page where we will do all our actions etc
    const page = await  browserContext.newPage()

    //open url
    await page.goto("https://www.google.com") 

    //10 seconds wait
    await page.waitForTimeout(10000) //timeout in milli seconds

    //print the url
    const currentUrl = page.url()
    console.log(`The loaded url is ${currentUrl}`)
})

test("title 2",async({page})=>{
    await page.goto("https://www.google.com")
    await page.waitForTimeout(10000)

})
