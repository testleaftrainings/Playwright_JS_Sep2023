import {expect, test} from "@playwright/test"

test.describe(`Incident creation`,async()=>{

    const homePageUrl = "https://dev177094.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D0f99a0c297353110ceabfa56f053afc7"
    const instanceUrl = "https://dev177094.service-now.com"

    // test.use({storageState:"creds/servicenow_login_creds.json"})

    test(`TC001 - Create a new incident on service now instance`,async({page})=>{
        await page.goto(homePageUrl)
        await page.getByRole("button",{name:"All"}).click({timeout:10000})
        await page.getByPlaceholder("Filter").fill("incident")
        
        const subMenuLocator = page.locator(".snf-collapsible-list").filter({has:page.getByLabel("Service Desk")})
        const incidentListItem = subMenuLocator.getByLabel("Incidents",{exact:true})
        await expect(incidentListItem).toBeVisible()

        //verify you have loaded the incident page
        await incidentListItem.click()
        await expect(page.locator(".center-header-zone")).toContainText("Incidents",{timeout:10000})

        //create the new incident
        await page.frameLocator("#gsft_main").locator("#sysverb_new").click()
        
        //verify the form is visible
        await expect(page.frameLocator("#gsft_main").getByLabel("Description",{exact:true})).toBeVisible()

        //incident number to be loaded

        await expect(page.frameLocator("#gsft_main").getByLabel("Number",{exact:true})).toHaveValue(/INC/)

        // await page.waitForLoadState("networkidle")

        await page.waitForTimeout(10000)

        const calledIdPagePromise = page.context().waitForEvent("page",{timeout:10000})
        //open look up id
        await page.frameLocator("#gsft_main").getByLabel("Look up value for field: Caller").click()

        const callerIdPage = await calledIdPagePromise

        expect(callerIdPage.url()).toContain("https://dev177094.service-now.com/sys_user_list.do")

        await callerIdPage.bringToFront()

        await callerIdPage.getByText("Aileen Mottern",{exact:true}).click()

        await page.bringToFront()

        await page.frameLocator("#gsft_main").getByLabel("Short description",{exact:true}).fill("Adding some short description")

        await page.frameLocator("#gsft_main").locator("#sysverb_insert").click()



    })
})