import {test} from "@playwright/test"

test(`handling window`,async({page,context})=>{

    await page.goto("")

    //STEP 1: explicitly asking to wait for an event "page"

    const windowPromise = context.waitForEvent("page",{
        timeout:1000
    })

    await page.locator("windowoptn").click() //this click will open the new window

    const windowPage = await windowPromise // Promise<Page>

    await windowPage.bringToFront() //bring context focus to this page

})