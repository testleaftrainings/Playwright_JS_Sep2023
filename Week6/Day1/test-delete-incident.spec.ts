import {expect, test} from "@playwright/test"
import { createNewIncident, getAllIncidents, isIncidentExists } from "../../../helper/servicenowApiUtils"

test.describe(`Delete incident flow `,async()=>{

    const homePageUrl = "https://dev177094.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D0f99a0c297353110ceabfa56f053afc7"
    const instanceUrl = "https://dev177094.service-now.com"

    // test.use({storageState:"creds/servicenow_login_creds.json"})

    test.describe.configure({mode:"serial"})

    let incidentToEdit:string

    test.skip(`TC001 - Create new incident which is a pre-requisite for edit`,async({page})=>{
        await page.goto(homePageUrl)
        await page.getByRole("button",{name:"All"}).click({timeout:10000})
        await page.getByPlaceholder("Filter").fill("incident")
        
        const subMenuLocator = page.locator(".snf-collapsible-list").filter({has:page.getByLabel("Service Desk")})
        const incidentListItem = subMenuLocator.getByLabel("Incidents",{exact:true})
        await expect(incidentListItem).toBeVisible()

        //verify you have loaded the incident page
        await incidentListItem.click()
        await expect(page.locator(".center-header-zone")).toContainText("Incidents",{timeout:15000})

        //create the new incident
        await page.frameLocator("#gsft_main").locator("#sysverb_new").click()
        
        //verify the form is visible
        await expect(page.frameLocator("#gsft_main").getByLabel("Description",{exact:true})).toBeVisible()

        //incident number to be loaded

        await expect(page.frameLocator("#gsft_main").getByLabel("Number",{exact:true})).toHaveValue(/INC/)

        incidentToEdit = await page.frameLocator("#gsft_main").getByLabel("Number",{exact:true}).getAttribute("value") as string

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

    test.only(`TCOO2 - Delete the incident `,async({page})=>{
        incidentToEdit =  await createNewIncident(page.request,"Creating incident for PW Automation")

        console.log(`editing the incident ${incidentToEdit}`)

        await page.goto(homePageUrl)
        await page.getByRole("button",{name:"All"}).click({timeout:20000})
        await page.getByPlaceholder("Filter").fill("incident")
        
        const subMenuLocator = page.locator(".snf-collapsible-list").filter({has:page.getByLabel("Service Desk")})
        const incidentListItem = subMenuLocator.getByLabel("Incidents",{exact:true})
        await expect(incidentListItem).toBeVisible({timeout:20000})

        //verify you have loaded the incident page
        await incidentListItem.click()
        await expect(page.locator(".center-header-zone")).toContainText("Incidents",{timeout:20000})

        //search for your incident
        const mainContentFrame = page.frameLocator("#gsft_main")

        //search incident by number type
        await mainContentFrame.locator("select[aria-label='Search a specific field of the Incidents list']").selectOption("number")

        //enter the incident number in search field and then press enter
        const searchIncField = mainContentFrame.getByRole("search").getByPlaceholder("Search")
        await searchIncField.fill(incidentToEdit)
        await page.keyboard.press('Enter')

        //verify 1 record retunred
        await expect(mainContentFrame.locator("tr[class$='list_header_search_row']")).toHaveCount(1,{timeout:15000})

        await mainContentFrame.getByLabel(`Open record: ${incidentToEdit}`).click()

        await expect(mainContentFrame.locator("input[id='incident.number']")).toBeVisible()

        //click on delete button
        await mainContentFrame.locator(".navbar_ui_actions").locator("#sysverb_delete").click()

        await mainContentFrame.locator("div[class$='modal-alert']").locator("button#ok_button").click()

        await expect(mainContentFrame.locator("textarea[id='incident.description']"),`expecting delete action to navigate to list page`).not.toBeVisible()

        // //verify it has navigated back to the listing page
        // await expect(mainContentFrame.locator("tr[class$='list_header_search_row']")).toHaveCount(1,{timeout:10000})

        // //verify no records are being displayed
        // await expect(mainContentFrame.locator("div.list-flavin")).toBeVisible()
        
        const isTicketDeleted = await isIncidentExists(page.request,incidentToEdit)
        expect(isTicketDeleted).toBe(false)
    })

})