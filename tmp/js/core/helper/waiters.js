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
const allureData_1 = require("./allure/allureData");
class Waiters {
    static waitUntilElementIsDisplayed(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(webElement), protractor_1.browser.params.waitWebElementMaxTimeout);
            }
            catch (err) {
                if (err.name === 'TimeoutError') {
                    throw allureData_1.waitErrors[protractor_1.browser.params.logLanguage].display(yield webElement.locator());
                }
                else {
                    throw err.name;
                }
            }
        });
    }
    ;
    static waitUntilElementNotDisplayed(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.invisibilityOf(webElement), protractor_1.browser.params.waitWebElementMaxTimeout);
            }
            catch (err) {
                if (err.name === 'TimeoutError') {
                    throw allureData_1.waitErrors[protractor_1.browser.params.logLanguage].notDisplay(yield webElement.locator());
                }
                else {
                    throw err.name;
                }
            }
        });
    }
    ;
    static waitUntilElementIsClickable(webElement, placeAndWaitElement = '') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(webElement), protractor_1.browser.params.waitWebElementMaxTimeout);
            }
            catch (err) {
                if (err.name === 'TimeoutError') {
                    throw allureData_1.waitErrors[protractor_1.browser.params.logLanguage].clickable(yield webElement.locator());
                }
                else {
                    throw err.name;
                }
            }
        });
    }
    ;
    static waitUntilUrlIsContained(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.urlContains(url), protractor_1.browser.params.waitWebElementMaxTimeout);
        });
    }
    ;
    static waitUntilDomIsReady() {
        return __awaiter(this, void 0, void 0, function* () {
            let domState = yield protractor_1.browser.executeScript(() => {
                return document.readyState;
            });
            if (domState !== "complete") {
                yield protractor_1.browser.sleep(200);
                yield this.waitUntilDomIsReady();
            }
        });
    }
    ;
    static waitUntilElementAttributeIsPresent(element, attribute, attributeValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualAttributeValue = yield element.getAttribute(attribute);
            if (actualAttributeValue !== attributeValue) {
                yield protractor_1.browser.sleep(200);
                yield this.waitUntilElementAttributeIsPresent(element, attribute, attributeValue);
            }
        });
    }
    ;
}
exports.Waiters = Waiters;
