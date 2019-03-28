"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginpage_1 = require("../components/loginpage");
const global_1 = require("../testData/global");
const allureSteps_1 = require("../js/core/helper/allure/allureSteps");
const elements_1 = require("../elements/elements");
const waiters_1 = require("../js/core/helper/waiters");
const attributes_1 = require("../js/core/utils/attributes");
const button_1 = require("../components/simple/button");
describe('Login', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
    }));
    it('Login with empty fields', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.disabledLoginButton);
        yield expect(yield attributes_1.Attributes.getElementAttribute(elements_1.assetbookElement.loginPage.disabledLoginButton, 'class'))
            .toContain('au-target login__button login__button--disabled');
    }));
    it('Login with empty username', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield loginpage_1.LoginPage.fillPasswordField(global_1.impersonateUser.password);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.disabledLoginButton);
        yield expect(yield attributes_1.Attributes.getElementAttribute(elements_1.assetbookElement.loginPage.disabledLoginButton, 'class'))
            .toContain('au-target login__button login__button--disabled');
    }));
    it('Login with empty password', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield loginpage_1.LoginPage.fillUserNameField(global_1.impersonateUser.userName);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.disabledLoginButton);
        yield expect(yield attributes_1.Attributes.getElementAttribute(elements_1.assetbookElement.loginPage.disabledLoginButton, 'class'))
            .toContain('au-target login__button login__button--disabled');
    }));
    it('Login with wrong username', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield loginpage_1.LoginPage.fillUserNameField(global_1.impersonateUser.wrongUserName);
        yield loginpage_1.LoginPage.fillPasswordField(global_1.impersonateUser.password);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.enabledLoginButton);
        yield button_1.ButtonExtend.clickOnElement(elements_1.assetbookElement.loginPage.enabledLoginButton);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.loginErrorMessage);
        yield allureSteps_1.expectToEqual(elements_1.assetbookElement.loginPage.loginErrorMessage.getText, global_1.assetbookData.loginError);
    }));
    it('Login with wrong password', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield loginpage_1.LoginPage.fillUserNameField(global_1.impersonateUser.userName);
        yield loginpage_1.LoginPage.fillPasswordField(global_1.impersonateUser.wrongPassword);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.enabledLoginButton);
        yield button_1.ButtonExtend.clickOnElement(elements_1.assetbookElement.loginPage.enabledLoginButton);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.loginErrorMessage);
        yield allureSteps_1.expectToEqual(elements_1.assetbookElement.loginPage.loginErrorMessage.getText, global_1.assetbookData.loginError);
    }));
    it('Checking eye icon working', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield loginpage_1.LoginPage.fillPasswordField(global_1.impersonateUser.wrongPassword);
        yield button_1.ButtonExtend.clickOnElement(elements_1.assetbookElement.loginPage.eyeIcon);
        yield expect(yield attributes_1.Attributes.getElementAttribute(elements_1.assetbookElement.loginPage.passwordInput, 'value'))
            .toContain(global_1.impersonateUser.wrongPassword);
    }));
    it('Login with correct username and password', () => __awaiter(this, void 0, void 0, function* () {
        yield loginpage_1.LoginPage.goToUrl(global_1.urls.assetbookQAStage);
        yield loginpage_1.LoginPage.fillUserNameField(global_1.impersonateUser.userName);
        yield loginpage_1.LoginPage.fillPasswordField(global_1.impersonateUser.password);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.enabledLoginButton);
        yield button_1.ButtonExtend.clickOnElement(elements_1.assetbookElement.loginPage.enabledLoginButton);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.dashboardPage.assetsUnderManagementChart);
        yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.dashboardPage.top4HouseholdsChart);
    }));
}));
