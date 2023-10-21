import {test,expect} from "@playwright/test";
import path from "path"


test.describe(`File Upload tests`,async()=>{
    test(`T001 - Testing file upload by set input files`,async({page})=>{
        await page.goto("https://www.leafground.com/file.xhtml")
        const card =  page.locator(".card").filter({has:page.getByText("Basic Upload")})
        // await card.getByText("Choose").click()
    
        await card.locator("input[type='file']").setInputFiles([path.join(__dirname, 'img1.jpeg')])
        await expect(card.locator(".ui-fileupload-filename")).toContainText("img1.jpeg")
    })

    test(`T002 - Testing file upload by event handler`,async({page})=>{
        //Case where: no input tag is present
        await page.goto("https://the-internet.herokuapp.com/upload")
        const fileChooserPromise = page.waitForEvent("filechooser",{timeout:10000})
        await page.locator("#drag-drop-upload").click()
        const fileChooser = await fileChooserPromise
        await fileChooser.setFiles([path.join(__dirname, 'img1.jpeg')])
        await expect(page.locator("#drag-drop-upload")).toHaveClass(/dz-success-mark/)
    })
})
