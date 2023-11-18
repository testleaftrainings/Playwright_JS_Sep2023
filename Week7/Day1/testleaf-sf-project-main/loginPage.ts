import { Locator,Page,test, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLConstants } from "../constants/urlConstants";


export class LoginPage  extends BasePage{
    static pageUrl = URLConstants.LOGIN_PAGE
    
    async verifyThePageIsLoaded(): Promise<void> {
        await this.verifyTheLocatorIsVisible(this.userNameIpBox,"verifying the login page is loaded based on anchor element")
    }
    async loadThePage() {
        await test.step(`Loading the login page url`,async()=>{
            await this.loadUrl(LoginPage.pageUrl)
            //url is loaded
            //page anchor is loaded
            await this.verifyThePageIsLoaded()
        })
    }


    //locators
    readonly userNameIpBox:Locator
    readonly passwordIpBox:Locator
    readonly loginButton:Locator
    //constructor

    readonly loginSelector:string


    constructor(page:Page){
        super(page)
        this.userNameIpBox = this.page.locator("input[name='username']")
        this.passwordIpBox = this.page.locator("#password")
        this.loginButton = this.page.locator("#Login")
        this.loginSelector = "input[name='username']"
    }
    //page method / user actions on this page

    private async clickOnLoginButton(){
        //to click on an element, we need a locator
        await test.step(`Clicking on login button`,async()=>{
            await this.clickOn(this.loginButton)
        })
    }

    private async fillInPassword(password:string){
        await test.step(`Filling password with ${password}`,async()=>{
            await this.fillIn(this.passwordIpBox,password)
        })
    }

    private async fillInUserName(name:string){

        await test.step(`Filling in user name : ${name}`,async()=>{
            await this.fillIn(this.userNameIpBox,name)
        })
    }


    public async doLogin(username:string,password:string,city?:string){
        await test.step(`Attempt to login with username: ${username} and password as: ${password}`,async()=>{
            await this.fillInUserName(username)
            await this.fillInPassword(password)
            await this.clickOnLoginButton()
        })
    }





}


