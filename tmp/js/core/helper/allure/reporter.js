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
function addTestComment(description) {
    allure.addArgument('comment', description);
}
exports.addTestComment = addTestComment;
function takeScreenShot(screenshotName = 'Screenshot', done = undefined) {
    return __awaiter(this, void 0, void 0, function* () {
        return protractor_1.browser.takeScreenshot()
            .then((png) => allure.createAttachment(screenshotName, () => new Buffer(png, 'base64'), 'image/png')())
            .then(() => {
            if (done) {
                done();
            }
        });
    });
}
exports.takeScreenShot = takeScreenShot;
