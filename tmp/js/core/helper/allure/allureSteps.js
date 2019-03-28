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
const allureData_1 = require("./allureData");
const _ = require("lodash");
const protractor_1 = require("protractor");
const reporter_1 = require("./reporter");
const stringArray_1 = require("../../utils/stringArray");
function allureStep(stepDefinition, method) {
    return __awaiter(this, void 0, void 0, function* () {
        yield allure.createStep(stepDefinition, () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield method();
                if (protractor_1.browser.params.takeScreenShotFromEachAllureStep) {
                    yield reporter_1.takeScreenShot();
                }
            }
            catch (error) {
                yield reporter_1.takeScreenShot();
                throw error;
            }
        }))();
    });
}
exports.allureStep = allureStep;
function expectToEqual(method, expectedResult) {
    return __awaiter(this, void 0, void 0, function* () {
        let value = yield method();
        yield allure.createStep(allureData_1.expectToEqualLog[protractor_1.browser.params.logLanguage].compare(expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            if (_.isArray(value)) {
                if (!stringArray_1.StringArray.arraysEqual(value, expectedResult)) {
                    yield reporter_1.takeScreenShot();
                    yield expect(value).toEqual(expectedResult);
                    throw allureData_1.expectToEqualLog[protractor_1.browser.params.logLanguage].error(expectedResult, value);
                }
            }
            else if (value !== expectedResult) {
                yield reporter_1.takeScreenShot();
                yield expect(value).toEqual(expectedResult);
                throw allureData_1.expectToEqualLog[protractor_1.browser.params.logLanguage].error(expectedResult, value);
            }
        }))();
    });
}
exports.expectToEqual = expectToEqual;
function expectToContain(method, expectedResult) {
    return __awaiter(this, void 0, void 0, function* () {
        let value = yield method();
        yield allure.createStep(allureData_1.expectToContainLog[protractor_1.browser.params.logLanguage].compare(expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            let doContain = _.isArray(value)
                ? _.difference([].concat(expectedResult), value).length === 0
                : _.includes(value, expectedResult);
            if (!doContain) {
                yield reporter_1.takeScreenShot();
                yield expect(value).toContain(expectedResult);
                throw allureData_1.expectToContainLog[protractor_1.browser.params.logLanguage].error(expectedResult, value);
            }
        }))();
    });
}
exports.expectToContain = expectToContain;
function expectToPresent(elem, expectedResult, additionInfo = '') {
    return __awaiter(this, void 0, void 0, function* () {
        yield allureStep(allureData_1.expectToPresentLog[protractor_1.browser.params.logLanguage].compare(additionInfo, yield elem.locator(), expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            const res = yield elem.isPresent();
            if (!res === expectedResult) {
                yield reporter_1.takeScreenShot();
                yield expect(res).toEqual(expectedResult);
                throw allureData_1.expectToPresentLog[protractor_1.browser.params.logLanguage].error(additionInfo, res, expectedResult);
            }
        }));
    });
}
exports.expectToPresent = expectToPresent;
function expectToDisplay(elem, expectedResult, additionInfo = '') {
    return __awaiter(this, void 0, void 0, function* () {
        yield allureStep(allureData_1.expectToDisplayLog[protractor_1.browser.params.logLanguage].compare(additionInfo, yield elem.locator(), expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            let res;
            try {
                res = yield elem.isDisplayed();
            }
            catch (err) {
                throw allureData_1.expectToDisplayLog[protractor_1.browser.params.logLanguage].tryError(additionInfo);
            }
            if (!res === expectedResult) {
                yield reporter_1.takeScreenShot();
                yield expect(res).toEqual(expectedResult);
                throw allureData_1.expectToDisplayLog[protractor_1.browser.params.logLanguage].error(additionInfo, res, expectedResult);
            }
        }));
    });
}
exports.expectToDisplay = expectToDisplay;
function expectToCompare(actualResult, expectedResult) {
    return __awaiter(this, void 0, void 0, function* () {
        yield allure.createStep(allureData_1.expectToCompareLog[protractor_1.browser.params.logLanguage].compare(actualResult, expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            if (actualResult !== expectedResult) {
                yield reporter_1.takeScreenShot();
                yield expect(actualResult).toEqual(expectedResult);
                throw allureData_1.expectToCompareLog[protractor_1.browser.params.logLanguage].error(actualResult, expectedResult);
            }
        }))();
    });
}
exports.expectToCompare = expectToCompare;
function expectNotToCompare(actualResult, expectedResult) {
    return __awaiter(this, void 0, void 0, function* () {
        yield allure.createStep(allureData_1.expectToCompareLog[protractor_1.browser.params.logLanguage].compare(actualResult, expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            if (actualResult == expectedResult) {
                yield reporter_1.takeScreenShot();
                yield expect(actualResult).not.toEqual(expectedResult);
                throw allureData_1.expectNotToCompareLog[protractor_1.browser.params.logLanguage].error(actualResult, expectedResult);
            }
        }))();
    });
}
exports.expectNotToCompare = expectNotToCompare;
function expectToEnabled(element, expectedResult, additionInfo = '') {
    return __awaiter(this, void 0, void 0, function* () {
        yield allureStep(allureData_1.expectToEnabledLog[protractor_1.browser.params.logLanguage].compare(additionInfo, yield element.locator(), expectedResult), () => __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield element.isEnabled();
            }
            catch (error) {
                throw allureData_1.expectToEnabledLog[protractor_1.browser.params.logLanguage].tryError(additionInfo, yield element.locator());
            }
            if (result !== expectedResult) {
                yield reporter_1.takeScreenShot();
                yield expect(result).not.toEqual(expectedResult);
                throw allureData_1.expectToEnabledLog[protractor_1.browser.params.logLanguage].error(additionInfo, yield element.locator(), expectedResult);
            }
        }));
    });
}
exports.expectToEnabled = expectToEnabled;
