import {allureStep, expectToDisplay} from "../js/core/helper/allure/allureSteps";
import {browser} from "protractor";
import {assetbookElement} from "../elements/elements";
import {urls} from "../testData/global";
import {Waiters as w } from "../js/core/helper/waiters";
import {ButtonExtend} from "./simple/button"

export class LoginPage {

    public static async goToUrl(url:string) {
        await allureStep(`Go to '${url}'`, async ()=> {
            await browser.get(url);
        });
    };

    public static async fillUserNameField(userName:string) {
        await allureStep(`Fill in the User Name field with the following value '${userName}'`, async ()=> {
            await assetbookElement.loginPage.userNameInput.sendKeys(userName);
        });
    };

    public static async fillPasswordField(password:string) {
        await allureStep(`Fill in the Password field with the following value '${password}'`, async ()=> {
            await assetbookElement.loginPage.passwordInput.sendKeys(password);
        });
    };

    public static async impersonateLogin(userName: string, password: string) {
        await allureStep('Log In', async() => {
            await this.goToUrl(urls.assetbookQAStage);
            await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.loginTextLogo);
            await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.loginLogo);
            await this.fillUserNameField(userName);
            await this.fillPasswordField(password);
            await ButtonExtend.clickOnElement(assetbookElement.loginPage.enabledloginButton);
            await w.waitUntilElementIsDisplayed(assetbookElement.dashboardPage.assetsUnderManagementChart);
            await w.waitUntilElementIsDisplayed(assetbookElement.dashboardPage.top4HouseholdsChart);
        });
    };

    // public static async logout(){
    //     await allureStep('Log out', async() => {
    //         await ButtonExtend.clickOnElement(nipendoElement.homePage.profileBoxButton);
    //         await w.waitUntilElementIsClickable(nipendoElement.profileMenu.profileMenu);
    //         await w.waitUntilElementIsClickable(nipendoElement.profileMenu.logOutButton);
    //         await ButtonExtend.clickOnElement(nipendoElement.profileMenu.logOutButton);
    //         await w.waitUntilElementIsDisplayed(nipendoElement.commonAlert);
    //         await ButtonExtend.clickButtonElementAndWait(nipendoElement.logout.yesButton, nipendoElement.loginBox);
    //         await w.waitUntilUrlIsContained('SignIn');
    //         await w.waitUntilElementIsClickable(nipendoElement.loginBox);
    //         await browser.executeScript('window.sessionStorage.clear();');
    //         await browser.executeScript('window.localStorage.clear();');
    //         await browser.driver.manage().deleteAllCookies();
    //     });
    // }

    public static async submitAndWaitForErrorMessage() {
        await allureStep('Click Login button and wait', async() => {
            await ButtonExtend.clickButtonElementAndWait(assetbookElement.loginPage.enabledloginButton, assetbookElement.loginPage.loginErrorMessage);
        });
    };
}