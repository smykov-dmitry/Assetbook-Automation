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
const allureSteps_1 = require("../helper/allure/allureSteps");
const protractor_1 = require("protractor");
const allureData_1 = require("../helper/allure/allureData");
class Textarea {
    static enterValueInTextarea(textarea, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield allureSteps_1.allureStep(allureData_1.inputLog[protractor_1.browser.params.logLanguage].fillInput(text), () => __awaiter(this, void 0, void 0, function* () {
                yield textarea.clear();
                yield textarea.sendKeys(text);
            }));
        });
    }
    ;
}
exports.Textarea = Textarea;
