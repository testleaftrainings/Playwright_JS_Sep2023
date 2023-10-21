import {expect, test} from "@playwright/test"

test.describe(`Test Iframes`,async()=>{

    test(`Iframe handling on buythevalue.in`,async({page})=>{

        await page.goto("https://buythevalue.in/")

        const chatButtonLocator =  page.frameLocator("#dummy-chat-button-iframe").locator("#dummy-chat-button")
        await expect(chatButtonLocator).toBeVisible()
        
        await chatButtonLocator.click()

        const writeMessageInputboxLocator = page.frameLocator("#ShopifyChat").getByPlaceholder("Write message")
        await expect(writeMessageInputboxLocator).toBeVisible()

        await writeMessageInputboxLocator.fill("Hi how are you")

        const sendMessageButton = page.frameLocator("#ShopifyChat").locator("button[data-spec='message-submit']")
        await expect(sendMessageButton).toBeVisible()
    })

    test.only(`Optimised way - Iframe handling on buythevalue.in`,async({page})=>{

        await page.goto("https://buythevalue.in/")

        const chatButtonIframeLocator = page.frameLocator("#dummy-chat-button-iframe")

        const chatButtonLocator =  chatButtonIframeLocator.locator("#dummy-chat-button")
        await expect(chatButtonLocator).toBeVisible()
        await chatButtonLocator.click()

        const shopifyChatIframeLocator = page.frameLocator("#ShopifyChat")
        const writeMessageInputboxLocator = shopifyChatIframeLocator.getByPlaceholder("Write message")
        await expect(writeMessageInputboxLocator).toBeVisible()

        await writeMessageInputboxLocator.fill("Hi how are you")
        const sendMessageButton = shopifyChatIframeLocator.locator("button[data-spec='message-submit']")
        await expect(sendMessageButton).toBeVisible()
    })
})