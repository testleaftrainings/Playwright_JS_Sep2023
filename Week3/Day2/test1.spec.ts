import {test,expect} from "@playwright/test"

test(`Understanding list of items`,async({page})=>{

    //login
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    //land on the inventory page

    /**
     * Add Sauce Labs Fleece Jacket to the cart
     */

    const fleeceInventoryItemLocator = page.locator(".inventory_item").filter({hasText:"Sauce Labs Fleece Jacket"})
    const addToCart = fleeceInventoryItemLocator.locator("button").filter({hasText:"ADD TO CART"})
    await addToCart.click()

    //locator filter

    const addToCart2 = page.locator(".inventory_item").filter({has:page.locator("#item_1_title_link").filter({hasText:"item name"})})

    const inventoryItemNameLocator = page.locator("#item_1_title_link").filter({hasText:"item name"})

    const inventoryCard = page.locator(".inventory_item").filter({has:inventoryItemNameLocator})


})
