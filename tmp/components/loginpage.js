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
const allureSteps_1 = require("../js/core/helper/allure/allureSteps");
const protractor_1 = require("protractor");
const elements_1 = require("../elements/elements");
const global_1 = require("../testData/global");
const waiters_1 = require("../js/core/helper/waiters");
const button_1 = require("./simple/button");
class LoginPage {
    static goToUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(`Go to '${url}'`, () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.get(url);
            }));
        });
    }
    ;
    static fillUserNameField(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(`Fill in the User Name field with the following value '${userName}'`, () => __awaiter(this, void 0, void 0, function* () {
                yield elements_1.assetbookElement.loginPage.userNameInput.sendKeys(userName);
            }));
        });
    }
    ;
    static fillPasswordField(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(`Fill in the Password field with the following value '${password}'`, () => __awaiter(this, void 0, void 0, function* () {
                yield elements_1.assetbookElement.loginPage.passwordInput.sendKeys(password);
            }));
        });
    }
    ;
    static impersonateLogin(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep('Log In', () => __awaiter(this, void 0, void 0, function* () {
                yield this.goToUrl(global_1.urls.assetbookQAStage);
                yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.loginTextLogo);
                yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.loginPage.loginLogo);
                yield this.fillUserNameField(userName);
                yield this.fillPasswordField(password);
                yield button_1.ButtonExtend.clickOnElement(elements_1.assetbookElement.loginPage.enabledloginButton);
                yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.dashboardPage.assetsUnderManagementChart);
                yield waiters_1.Waiters.waitUntilElementIsDisplayed(elements_1.assetbookElement.dashboardPage.top4HouseholdsChart);
            }));
        });
    }
    ;
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
    static submitAndWaitForErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep('Click Login button and wait', () => __awaiter(this, void 0, void 0, function* () {
                yield button_1.ButtonExtend.clickButtonElementAndWait(elements_1.assetbookElement.loginPage.enabledloginButton, elements_1.assetbookElement.loginPage.loginErrorMessage);
            }));
        });
    }
    ;
}
exports.LoginPage = LoginPage;
