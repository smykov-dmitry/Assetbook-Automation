import {allureStep, expectToDisplay} from "../js/core/helper/allure/allureSteps";
import {browser, ElementFinder} from "protractor";
import {assetbookElement} from "../elements/elements";
import {urls} from "../testData/global";
import {Waiters as w } from "../js/core/helper/waiters";
import {ButtonExtend} from "./simple/button"
import {Input} from '../js/core/controls/input';

export class LoginPage {

    public static async goToUrl(url:string) {
        await allureStep(`Go to '${url}'`, async ()=> {
            await browser.get(url);
        });
    };

    public static async fillUserNameField(userName:string) {
        await allureStep(`Fill in the User Name field with the following value '${userName}'`, async ()=> {
            await Input.enterValueInInputField(assetbookElement.loginPage.userNameInput, userName);
        });
    };

    public static async fillPasswordField(password:string) {
        await allureStep(`Fill in the Password field with the following value '${password}'`, async ()=> {
            await Input.enterValueInInputField(assetbookElement.loginPage.passwordInput, password);
        });
    };

    public static async impersonateLogin(userName: string, password: string) {
        await allureStep('Log In', async() => {
            await this.goToUrl(urls.assetbookQAStage);
            await this.fillUserNameField(userName);
            await this.fillPasswordField(password);
            await ButtonExtend.clickButtonElementAndWait(assetbookElement.loginPage.enabledLoginButton, assetbookElement.header.userLabel)
        });
    };

    public static async nonImpersonateLogin(userName: string, password: string, dbSelector: ElementFinder) {
        await allureStep('Log In', async() => {
            await this.goToUrl(urls.assetbookQAStage);
            await this.fillUserNameField(userName);
            await this.fillPasswordField(password);
            await ButtonExtend.clickButtonElementAndWait(assetbookElement.loginPage.enabledLoginButton, dbSelector);
            await ButtonExtend.clickButtonElementAndWait(dbSelector, assetbookElement.header.userLabel);
        });
    }

    public static async submitAndWaitForErrorMessage() {
        await allureStep('Click Login button and wait', async() => {
            await ButtonExtend.clickOnElement(assetbookElement.loginPage.enabledLoginButton);
            await await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.loginErrorMessage);
        });
    };
}