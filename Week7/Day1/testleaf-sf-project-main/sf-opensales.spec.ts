import {test,expect} from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { AppConstants, ToggleStates } from "../constants/appConstants";
import { FrameWorkHelper } from "../utils/frameworkHelper";
import { EnvConstants } from "../constants/envConstants";
import { URLConstants } from "../constants/urlConstants";
import { HomePage } from "../page-objects/homePage";

test.describe(`Salesforce Login`,async()=>{
    test.only(`TC001: verify user after login is able to open sales application`,async({page})=>{
        const appData = FrameWorkHelper.loadTestData(EnvConstants.STAGE)
        const loginPage = new LoginPage(page)
        await loginPage.loadThePage()
        await loginPage.doLogin(appData.adminUserName,appData.adminPassword)
        await expect(page).toHaveURL(AppConstants.INSTANCE_URL)
        const homePage = new HomePage(page)
        await homePage.verifyThePageIsLoaded()
        await homePage.clickOnAppLauncherIcon()
        await homePage.clickOnViewAllButton()
        await homePage.clickOnSalesTilesInExapndedAppLauncher()
    })

})

