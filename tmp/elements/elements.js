"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.assetbookElement = {
    loginPage: {
        loginTextLogo: protractor_1.element(protractor_1.by.css('.login__pulse-image--side-panel')),
        loginLogo: protractor_1.element(protractor_1.by.css('.login__background__logo')),
        loginText: protractor_1.element(protractor_1.by.css('.login__text--large')),
        userNameInput: protractor_1.element(protractor_1.by.css('#username')),
        userNameInputLabel: protractor_1.element(protractor_1.by.css('#username__label')),
        passwordInput: protractor_1.element(protractor_1.by.css('#password')),
        passwordInputLabel: protractor_1.element(protractor_1.by.css('.login__text--mediumgray')),
        eyeIcon: protractor_1.element(protractor_1.by.css('.login__eye-icon--gray')),
        resetPasswordLink: protractor_1.element(protractor_1.by.css('.login__anchor')),
        enabledLoginButton: protractor_1.element(protractor_1.by.css('.login__button')),
        disabledLoginButton: protractor_1.element.all(protractor_1.by.xpath('//div/div[2]/div/section/div[4]/div')).first(),
        loginErrorMessage: protractor_1.element.all(protractor_1.by.css('.login__text-red')).first(),
    },
    dashboardPage: {
        assetsUnderManagementChart: protractor_1.element(protractor_1.by.css('#topHouseholdsChart')),
        top4HouseholdsChart: protractor_1.element(protractor_1.by.css('#myChart'))
    }
};
