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
const button_1 = require("../../js/core/controls/button");
const allureSteps_1 = require("../../js/core/helper/allure/allureSteps");
const waiters_1 = require("../../js/core/helper/waiters");
class ButtonExtend extends button_1.Button {
    static clickButtonElementAndWait(button, waitElem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(`Click on the button '${yield button.locator()} and wait '${yield waitElem.locator()}' `, () => __awaiter(this, void 0, void 0, function* () {
                yield waiters_1.Waiters.waitUntilElementIsDisplayed(button);
                yield waiters_1.Waiters.waitUntilElementIsClickable(button);
                yield button.click();
                yield waiters_1.Waiters.waitUntilElementIsDisplayed(waitElem);
                yield waiters_1.Waiters.waitUntilElementIsClickable(waitElem);
            }));
        });
    }
    static clickButtonByTextAndWait(buttonText, waitElem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(`Click on the button by '${buttonText}' name`, () => __awaiter(this, void 0, void 0, function* () {
                yield waiters_1.Waiters.waitUntilElementIsClickable(yield this.returnByText(buttonText));
                yield this.returnByText(buttonText).click();
                yield waiters_1.Waiters.waitUntilElementIsClickable(waitElem);
            }));
        });
    }
    static clickOnElement(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(`Click on element ${yield elem.locator()}`, () => __awaiter(this, void 0, void 0, function* () {
                yield elem.click();
            }));
        });
    }
    ;
}
exports.ButtonExtend = ButtonExtend;
