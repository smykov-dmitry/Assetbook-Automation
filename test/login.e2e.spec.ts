import {browser} from "protractor";
import {LoginPage} from "../components/loginpage";
import {assetbookData, impersonateUser, urls} from "../testData/global";
import {expectToDisplay, expectToEqual} from "../js/core/helper/allure/allureSteps";
import {assetbookElement} from "../elements/elements";
import {Waiters as w } from "../js/core/helper/waiters";
import {Attributes} from "../js/core/utils/attributes";
import {ButtonExtend} from "../components/simple/button";


describe('Login', async () => {

    beforeAll(async () => {
        browser.waitForAngularEnabled(false);
    })

    it('Login with empty fields', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.disabledLoginButton);
        await expect(await Attributes.getElementAttribute(assetbookElement.loginPage.disabledLoginButton, 'class'))
            .toContain('au-target login__button login__button--disabled');
    });

    it('Login with empty username', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillPasswordField(impersonateUser.password);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.disabledLoginButton);
        await expect(await Attributes.getElementAttribute(assetbookElement.loginPage.disabledLoginButton, 'class'))
            .toContain('au-target login__button login__button--disabled');
    });

    it('Login with empty password', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.userName);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.disabledLoginButton);
        await expect(await Attributes.getElementAttribute(assetbookElement.loginPage.disabledLoginButton, 'class'))
            .toContain('au-target login__button login__button--disabled');
    });

    it('Login with wrong username', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.wrongUserName);
        await LoginPage.fillPasswordField(impersonateUser.password);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.enabledLoginButton);
        await ButtonExtend.clickOnElement(assetbookElement.loginPage.enabledLoginButton);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.loginErrorMessage);
        await expectToEqual(assetbookElement.loginPage.loginErrorMessage.getText, assetbookData.loginError);
    });

    it('Login with wrong password', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.userName);
        await LoginPage.fillPasswordField(impersonateUser.wrongPassword);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.enabledLoginButton);
        await ButtonExtend.clickOnElement(assetbookElement.loginPage.enabledLoginButton);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.loginErrorMessage);
        await expectToEqual(assetbookElement.loginPage.loginErrorMessage.getText, assetbookData.loginError);
    });

    it('Checking eye icon working', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillPasswordField(impersonateUser.wrongPassword);
        await ButtonExtend.clickOnElement(assetbookElement.loginPage.eyeIcon);
        await expect(await Attributes.getElementAttribute(assetbookElement.loginPage.passwordInput, 'value'))
            .toContain(impersonateUser.wrongPassword);
    });

    it('Login with correct username and password', async () => {
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.userName);
        await LoginPage.fillPasswordField(impersonateUser.password);
        await w.waitUntilElementIsDisplayed(assetbookElement.loginPage.enabledLoginButton);
        await ButtonExtend.clickOnElement(assetbookElement.loginPage.enabledLoginButton);
        await w.waitUntilElementIsDisplayed(assetbookElement.dashboardPage.assetsUnderManagementChart);
        await w.waitUntilElementIsDisplayed(assetbookElement.dashboardPage.top4HouseholdsChart);
    });
});