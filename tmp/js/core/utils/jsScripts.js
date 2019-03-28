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
const allureSteps_1 = require("../helper/allure/allureSteps");
const allureData_1 = require("../helper/allure/allureData");
class JsScripts {
    static scrollDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].scrollDown, () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript('window.scrollTo(0, 10000)');
            }));
        });
    }
    ;
    static scrollUp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].scrollUp, () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript('window.scrollTo(10000, 0)');
            }));
        });
    }
    ;
    static scrollToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].scrollToElement(yield element.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript('arguments[0].scrollIntoView()', yield element.getWebElement());
            }));
        });
    }
    static scrollToElementByCssAndNumber(css, elementNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].scrollToElementByCssAndNumber(css), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript(`document.querySelectorAll("${css}")[${elementNumber}].scrollIntoView()`);
            }));
        });
    }
    ;
    static clickByCssAndNumber(css, elementNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].clickByCssAndNumber(css), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript(`document.querySelectorAll("${css}")[${elementNumber}].click()`);
            }));
        });
    }
    ;
    static getValue(css, num = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = '';
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].getValue(css, num), () => __awaiter(this, void 0, void 0, function* () {
                value = yield protractor_1.browser.executeScript(`return document.querySelectorAll('${css}')[${num}].value`);
            }));
            return value;
        });
    }
    static setValueByCssAndNumber(css, elementNumber, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].setValueByCssAndNumber(value, css), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript(`document.querySelectorAll("${css}")[${elementNumber}].value="${value}"`);
            }));
        });
    }
    ;
    static setAttributeValueByCssAndNumber(css, elementNumber, attribute, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].setAttributeValueByCssAndNumber(attribute, value, css), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript(`document.querySelectorAll("${css}")[${elementNumber}].setAttribute("${attribute}",
            "${value}")`);
            }));
        });
    }
    ;
    static openNewBrowserTab(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].openNewBrowserTab(url), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript(`window.open("${url}")`);
            }));
        });
    }
    ;
    static returnCustomCssStyleValueFromCssLocator(css, value) {
        return __awaiter(this, void 0, void 0, function* () {
            let customValue;
            yield allureSteps_1.allureStep(allureData_1.jsScriptLog[protractor_1.browser.params.logLanguage].returnCustomCssStyleValueFromCssLocator(css, value), () => __awaiter(this, void 0, void 0, function* () {
                customValue = yield protractor_1.browser.executeScript(`return window.getComputedStyle(document.querySelector("${css}")).getPropertyValue("${value}")`);
            }));
            return customValue;
        });
    }
    ;
}
exports.JsScripts = JsScripts;
;
