import {chromium, expect, test} from "@playwright/test"

test(`Accepting the alert`,async({page})=>{
    await page.goto("https://www.leafground.com/alert.xhtml")

    //creating dialogue handler 
    page.on("dialog",(dialog)=>{
        dialog.accept()
    })

    //user action
    await page.getByText("Show",{exact:true}).nth(0).click()
})


test(`Enter the message in prompt alert`,async({page})=>{
    await page.goto("https://www.leafground.com/alert.xhtml")

    //adding prompt handler 
    page.on("dialog",(dialog)=>{
        dialog.accept()
    })
    //user action
    await page.getByText("Show",{exact:true}).nth(1).click()
})

