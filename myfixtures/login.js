import {test as base,expect} from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
export const test = base.extend({
    loginAs: async ({page}, use) => {
        await use(async (role) => {
            await page.goto("http://106.51.82.61:9007/")
            await page.locator("#email").fill(process.env[`${role}_EMAIL`])
            await page.locator("#password").fill(process.env[`${role}_PASSWORD`])
            await page.locator("//button").click()
        })
    },
    logout: async ({page}, use) => {
        await use(async () => {
            await page.locator("//a[contains(text(),'Log Out')]").click()
        })
    }
})
export {expect}