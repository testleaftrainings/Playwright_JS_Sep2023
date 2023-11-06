import { Locator, Page, test } from "@playwright/test"

export class LoginPage{
    //blue print of the class

    readonly page:Page

    readonly usernameInputField:Locator
    readonly passwordInputField:Locator
    readonly loginButton:Locator

    constructor(page:Page){
        this.page = page
        //intilise your locator value in the constructor
        this.usernameInputField = this.page.locator("#user-name")
        this.passwordInputField = this.page.locator("#password")
        this.loginButton = this.page.locator("#login-button")
    }

    //action on this page

    private async fillUserName(username:string):Promise<void>{
        //how you will achieve this
        await test.step("Filling the username",async()=>{
            await this.usernameInputField.fill(username)
        })

    }

    private async fillPassword(password:string):Promise<void>{
        await test.step("Filling the password",async()=>{
            await this.passwordInputField.fill(password)
        })


    }

    private async clickOnLoginButton():Promise<void>{
        await test.step("Clicking on  the login button",async()=>{
            await this.loginButton.click()
        })

    }

    //s


    public async fillAndSubmitLoginForm(username:string, password:string){
        await test.step(`Filling the login form with ${username} and ${password}`,async()=>{
            await this.fillUserName(username)
            await this.fillPassword(password)
            await this.clickOnLoginButton()
        })

    }

}