import {test,expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";
import { FakeDataUtil } from "../../utility/fakeDataUtil";


//raw test script
test.only(`Login to sauce demo`,async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")

    const randomEmail = FakeDataUtil.generateRandomEmail()
    console.log(`Random email is ${randomEmail}`)
    const loginPage = new LoginPage(page)
    await loginPage.fillAndSubmitLoginForm("standard_user","secret_sauce")
    //assert
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})

