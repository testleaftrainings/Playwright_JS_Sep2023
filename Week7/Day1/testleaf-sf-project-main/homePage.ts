import {Locator, Page,test, expect} from "@playwright/test"
import { BasePage } from "./basePage"
import { URLConstants } from "../constants/urlConstants"


export class HomePage extends BasePage{

    async verifyThePageIsLoaded(): Promise<void> {
        await this.verifyTheLocatorIsVisible(this.pageAnchor,"verifying the home page is loaded based on anchor element")

    }
    
    static pageUrl = URLConstants.HOME_PAGE

    async loadThePage() {
        await test.step(`Loading the login page url`,async()=>{
            await this.loadUrl(HomePage.pageUrl)
        })
    }


    //declare locators name

    readonly appLauncherIcon:Locator
    readonly viewAllButtonInAppLauncher:Locator
    readonly salesTileInExpandedAppLauncher:Locator

    readonly pageAnchor:Locator

    constructor(page:Page){
        super(page)
        this.appLauncherIcon = this.page.locator("div.slds-icon-waffle")
        this.viewAllButtonInAppLauncher = this.page.locator("button").filter({hasText:"View All"})
        this.salesTileInExpandedAppLauncher = this.page.locator("one-app-launcher-app-tile[data-name='Sales']")
        this.pageAnchor = this.page.locator(".tileTitle").filter({hasText:"Get Started with Einstein Bots"})
    }


    //page methods

    async clickOnAppLauncherIcon(){
        await this.clickOn(this.appLauncherIcon)
    }

    async clickOnViewAllButton(){
        await this.clickOn(this.viewAllButtonInAppLauncher)
    }

    async clickOnSalesTilesInExapndedAppLauncher(){
        await this.clickOn(this.salesTileInExpandedAppLauncher)
    }

}