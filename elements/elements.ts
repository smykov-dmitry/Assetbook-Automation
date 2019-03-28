import {by, element, until} from "protractor";
export const assetbookElement: any = {
    loginPage: {
        loginTextLogo: element(by.css('.login__pulse-image--side-panel')),
        loginLogo: element(by.css('.login__background__logo')),
        loginText: element(by.css('.login__text--large')),
        userNameInput: element(by.css('#username')),
        userNameInputLabel: element(by.css('#username__label')),
        passwordInput: element(by.css('#password')),
        passwordInputLabel: element(by.css('.login__text--mediumgray')),
        eyeIcon: element(by.css('.login__eye-icon--gray')),
        resetPasswordLink: element(by.css('.login__anchor')),
        enabledLoginButton: element(by.css('.login__button')),
        disabledLoginButton: element.all(by.xpath('//div/div[2]/div/section/div[4]/div')).first(),
        loginErrorMessage: element.all(by.css('.login__text-red')).first(),
    },
    dashboardPage: {
        assetsUnderManagementChart: element(by.css('#topHouseholdsChart')),
        top4HouseholdsChart: element(by.css('#myChart'))
    }

};