import {test,expect} from "@playwright/test"

test.only(`Understanding locator.all`,async({page})=>{

    //login
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    //land on the inventory page

    /**
     * Add Sauce Labs Fleece Jacket to the cart
     */

    /**
     * will return immediately
     * loaded inventory page
     * //api call is coming/recieving
     * //render them on UI
     * //item on the last of the list
     * locator().all() //all the 6 elements array //1 //3 //4
     * 
     * Best practise:
     * 1) sauce demo , 6 items
     * 2) intercept the api response, list of items
     * 3) assertion to have the same number of items matched
     * 4) list[locator] = locator().all()
     * 
     * items ordering is correct based on the price
     * //sort the items
     * all()
     * iterate over the items 
     * 1 -> 1st price in the list
     * 2 -> 2nd price in the exp list
     */

    await expect(page.locator(".inventory_item"),`expecting inventory card to be 6`).toHaveCount(6)

    const listOfAllInventoryCards = await page.locator(".inventory_item").all()

    //iterate over an array
    const listSize = listOfAllInventoryCards.length

    //for loop i=0

    for(let i=0;i<listSize;i++){
        const priceOfTheItem = await page.locator(".inventory_item").nth(i).locator(".inventory_item_price").textContent()
        console.log(`price of the items is ${priceOfTheItem}`)
    }



})
