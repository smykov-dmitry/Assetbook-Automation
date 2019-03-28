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
class Actions {
    static click(elemment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].click(yield elemment.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().click(elemment).perform();
            }));
        });
    }
    ;
    static doubleClick(elemment) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].doubleClick(yield elemment.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().doubleClick(elemment).perform();
            }));
        });
    }
    ;
    static dragAndDrop(elemment, target) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].dragAndDrop(yield elemment.locator(), yield target.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().dragAndDrop(elemment, target).perform();
            }));
        });
    }
    ;
    static dragAndDropElementByCoordinate(elem, x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].dragAndDropElementByCoordinate(yield elem.locator(), x, y), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().mouseDown(elem).perform();
                yield protractor_1.browser.actions().mouseMove({ x, y }).perform();
                yield protractor_1.browser.actions().mouseUp(elem).perform();
            }));
        });
    }
    ;
    static hoverOnElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].hoverOnElement(yield element.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().mouseMove(element).perform();
            }));
        });
    }
    ;
    static mouseMoveByCoordinates(xValue, yValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].mouseMoveByCoordinates(xValue, yValue), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().mouseMove({ x: xValue, y: yValue }).perform();
            }));
        });
    }
    ;
    static sendKeys(element, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].sendKeys(yield element.locator(), value), () => __awaiter(this, void 0, void 0, function* () {
                yield element.click();
                yield protractor_1.browser.actions().sendKeys(value).perform();
            }));
        });
    }
    ;
    static clearInputWithDelete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].clearInputWithDelete(yield input.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield this.click(input);
                yield protractor_1.browser.actions()
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.DELETE))
                    .perform();
            }));
        });
    }
    ;
    static copy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].copy, () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions()
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "c"))
                    .perform();
            }));
        });
    }
    ;
    static paste() {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].copy, () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions()
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "v"))
                    .perform();
            }));
        });
    }
    ;
    static pasteInInput(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].pasteInInput(yield input.locator()), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().click(input).perform();
                yield protractor_1.browser.actions()
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "v"))
                    .perform();
            }));
        });
    }
    ;
    static copyPaste() {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.actionsLog[protractor_1.browser.params.logLanguage].copyPaste(), () => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions()
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "c"))
                    .sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "v"))
                    .perform();
            }));
        });
    }
    ;
}
exports.Actions = Actions;
