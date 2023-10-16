import {expect, test} from "@playwright/test"

test(`asserting count of element`,async({page})=>{
    await page.goto("https://www.leafground.com/waits.xhtml")
    const cardToSelect = page.locator("button").filter({hasText:"Click First Button"})
    await cardToSelect.click()
    const secondButton = page.locator("button").filter({hasText:"Click Second"})
    const alert = page.getByRole("alert")
    await expect(alert).toHaveCount(3)
    await secondButton.click()

})

test(`asserting check box state`,async({page})=>{
    await page.goto("https://demo.applitools.com/")
    const cardToSelect = page.locator(".form-check-input")
    await expect(cardToSelect,`expecting check box to not be checked`).not.toBeChecked()
    await cardToSelect.check()
    await expect(cardToSelect,`expecting check box to not be checked`).toBeChecked()
})


test(`asserting element attribute value`,async({page})=>{
    await page.goto("https://www.leafground.com/link.xhtml")
    const card = page.locator(".card").filter({hasText:"Take me to dashboard"})
    const goToDashBoardLink = card.locator("a").filter({hasText:"Go to Dashboard"})
    await expect(goToDashBoardLink).toHaveAttribute("href",/dashboard.xhtml/)
})

test(`asserting element text`,async({page})=>{
    await page.goto("https://demo.applitools.com/index.html")
    const loginButton = page.locator("#log-in")
    await expect(loginButton).toContainText("Sign in")
})

