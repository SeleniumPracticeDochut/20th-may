import {expect, test} from '../myfixtures/login.js';

test('Login as doctor', async ({loginAs, page,logout}) => {
    await loginAs('DOCTOR');
    await expect.soft(page).toHaveURL(/doctor/)
    console.log(await page.url());
    await logout();
    
});

test('Login as patient', async ({loginAs, page,logout}) => {
    await loginAs('PATIENT');
    await expect.soft(page).toHaveURL(/patient/)
    console.log(await page.url());
    await logout();
});

test('Login as nurse', async ({loginAs, page,logout}) => {
    await loginAs('NURSE');
    await expect.soft(page).toHaveURL(/nurse/)
    console.log(await page.url());
    await logout();
    console.log("Logged out successfully");
});
