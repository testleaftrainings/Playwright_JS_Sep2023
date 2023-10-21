import {test} from "@playwright/test";
import path from "path"

test.describe(`File download tests`,async()=>{
    test(`TC001 - File download by waiting for event`,async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/download")
        const fileDownloadPromise = page.waitForEvent("download")
        await page.getByText('kick.png').click()
        const fileDownloader = await fileDownloadPromise
        await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()))
    })
})