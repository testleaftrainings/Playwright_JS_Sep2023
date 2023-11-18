import { Page,test,Locator,expect } from "@playwright/test";

type LocateBy = Locator| string

//understanding of abstract class

/**
 * 
 * the abstract are not the complete class on its onw
 * i.e. these are incomplete class
 * 
 * these needs to be implemented fully in order to use in real word
 * 
 * Restriction -> you can not create an object of abstract class
 * 
 * 
 */
export abstract class BasePage {

    readonly page :Page

    constructor(page:Page){
        this.page = page
    }

    abstract loadThePage():Promise<void>;

    abstract verifyThePageIsLoaded():Promise<void>;

    async loadUrl(url:string){
        await test.step(`Loading url ${url}`,async()=>{
            await this.page.goto(url)
        })
    }
    //making sure my 1 method handles both the conditions
    constructLocatorBasedOnSelector(selector:string){
        return this.page.locator(selector)
    }
    generateLocator(locateBy:LocateBy){
        return typeof(locateBy)==="string"?this.constructLocatorBasedOnSelector(locateBy):locateBy
    }

    async clickOn(locateBy:LocateBy,stepTitle:string){
        await test.step(`${stepTitle} : Attempting to click on given locator`,async()=>{
            try{
                await this.generateLocator(locateBy).click()
            }
            catch(err){
                console.log(`Error occured while trying to click on given locator : ${err}`)
            }

        })
    }

    async fillIn(locateBy:Locator|string,textToFill:string){
        await test.step(`Trying to enter given text ${textToFill} in the locator`,async()=>{
            await this.generateLocator(locateBy).fill(textToFill)
        })
    }

    async verifyTheLocatorIsVisible(locateBy:LocateBy,assertionStatement:string){
        await test.step(`Verifying if the locator is visible`,async()=>{
            //expect should have an assertion statement
            await expect(this.generateLocator(locateBy),assertionStatement).toBeVisible()
        })
    }
}