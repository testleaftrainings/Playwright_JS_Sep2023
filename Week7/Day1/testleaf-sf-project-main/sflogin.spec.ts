import {test,expect} from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { AppConstants, ToggleStates } from "../constants/appConstants";
import { FrameWorkHelper } from "../utils/frameworkHelper";
import { EnvConstants } from "../constants/envConstants";
import { URLConstants } from "../constants/urlConstants";

test.describe(`Salesforce Login`,async()=>{
    test(`TC001: verify with valid creds you are able to login`,async({page})=>{
        const appData = FrameWorkHelper.loadTestData(EnvConstants.STAGE)
        await page.goto(URLConstants.LOGIN_PAGE);
        const loginPage = new LoginPage(page)
        await loginPage.doLogin(appData.adminUserName,appData.adminPassword)
        await expect(page).toHaveURL(AppConstants.INSTANCE_URL)
    })

})

