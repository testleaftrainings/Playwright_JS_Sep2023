import {test} from "@playwright/test"

test(`hanlde alert`,async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")

    //step 1 , create an event handler

    page.on("dialog",(dialog)=>{
        const mes = dialog.message()
        dialog.dismiss()
        dialog.accept("prateek")
        dialog.accept()
    })

    //list element

    const cardLocator = page.locator(".card").filter({hasText:" Alert (Simple Dialog)"}).nth(0)
    const alertButton = cardLocator.locator("button").filter({hasText:"Show"})
    await alertButton.click()

})