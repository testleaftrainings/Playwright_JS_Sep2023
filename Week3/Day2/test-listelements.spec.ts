import {expect, test} from "@playwright/test"

test(`Handle list of elements : verify San Francisco is present in the list of cities`,async({page})=>{
    await page.goto("https://www.leafground.com/list.xhtml")
    const listCityLocator = page.locator("li.ui-orderlist-item")
    //lets iterate over list of elements and whichever element has given text we can click on it

    const listOfCities = ["Istanbul","San Francisco","London","Paris","Berlin","Barcelona","Rome"]

    await expect(listCityLocator).toHaveCount(listOfCities.length)

    listOfCities.forEach(async (cityName)=>{
       const expCity = listCityLocator.filter({hasText:cityName})
       await expect(expCity).toBeVisible()
    })

})