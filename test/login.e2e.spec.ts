import {browser} from "protractor";
import {LoginPage} from "../components/loginpage";
import {assetbookData, impersonateUser, urls} from "../testData/global";
import {expectToContain, expectToDisplay, expectToEqual} from "../js/core/helper/allure/allureSteps";
import {assetbookElement} from "../elements/elements";
import {Attributes} from "../js/core/utils/attributes";
import {ButtonExtend} from "../components/simple/button";


describe('Login', async () => {

    it('Login with empty fields', async () => {
        await browser.waitForAngularEnabled(false);
        await LoginPage.goToUrl(urls.assetbookQAStage);
        let getAttribute = await Attributes.getElementAttribute(assetbookElement.loginPage.disabledLoginButton, 'class');
        await expectToContain(() => getAttribute, 'au-target login__button login__button--disabled');
    });

    it('Login with empty username', async () => {
        await browser.waitForAngularEnabled(false);
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillPasswordField(impersonateUser.password);
        let getAttribute = await Attributes.getElementAttribute(assetbookElement.loginPage.disabledLoginButton, 'class');
        await expectToContain(() => getAttribute, 'au-target login__button login__button--disabled');
    });

    it('Login with empty password', async () => {
        await browser.waitForAngularEnabled(false);
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.userName);
        let getAttribute = await Attributes.getElementAttribute(assetbookElement.loginPage.disabledLoginButton, 'class');
        await expectToContain(() => getAttribute, 'au-target login__button login__button--disabled');
    });

    it('Login with wrong username', async () => {
        await browser.waitForAngularEnabled(false);
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.wrongUserName);
        await LoginPage.fillPasswordField(impersonateUser.password);
        await LoginPage.submitAndWaitForErrorMessage();
        await expectToEqual(assetbookElement.loginPage.loginErrorMessage.getText, assetbookData.loginError);
    });

    it('Login with wrong password', async () => {
        await browser.waitForAngularEnabled(false);
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillUserNameField(impersonateUser.userName);
        await LoginPage.fillPasswordField(impersonateUser.wrongPassword);
        await LoginPage.submitAndWaitForErrorMessage();
        await expectToEqual(assetbookElement.loginPage.loginErrorMessage.getText, assetbookData.loginError);
    });

    it('Checking eye icon working', async () => {
        await browser.waitForAngularEnabled(false);
        await LoginPage.goToUrl(urls.assetbookQAStage);
        await LoginPage.fillPasswordField(impersonateUser.wrongPassword);
        await ButtonExtend.clickOnElement(assetbookElement.loginPage.eyeIcon);
        let getAttribute = await Attributes.getElementAttribute(assetbookElement.loginPage.passwordInput, 'value');
        await expectToContain(() => getAttribute, impersonateUser.wrongPassword);
    });

    it('Impersonate login with correct username and password', async () => {
        await LoginPage.impersonateLogin(impersonateUser.userName, impersonateUser.password);
    });
});