import {test,expect} from "@playwright/test"
import listOfappData from "../../test-data/appdata.json"

/**
 * go to login page
 * enter the crednetails as per the use case
 * verify the error message is visible
 * verify the text content of the error message
 */
//Do not repeat yourself 

listOfappData.forEach((testDataObject)=>{
    test(`verify client handling for ${testDataObject.case}`,async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/index.html")
        await page.locator("#user-name").fill(testDataObject.username)
        await page.locator("#password").fill(testDataObject.password)
        await page.locator("#login-button").click()

        if(testDataObject.case==="happy path case"){
            await expect(page.locator("h3[data-test='error']")).not.toBeVisible()
            await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
        }
        else{
            await expect(page.locator("h3[data-test='error']")).toBeVisible()
            await expect(page.locator("h3[data-test='error']")).toContainText(testDataObject.message)
        }
    
    })
})



/**
 *  
 * const numbers = [1,2,3,4,5]
 * numbers.forEach((value,index,array)=>{
 *      console.log(value)
 *      console.log(index)

 * })
 * 
 * 
 */