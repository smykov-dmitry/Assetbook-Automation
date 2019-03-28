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
class GetPerformanceLogs {
    static getAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            const logDate = yield protractor_1.browser.manage().logs().get('performance');
            return logDate;
        });
    }
    static getResponseData() {
        return __awaiter(this, void 0, void 0, function* () {
            const logData = yield this.getAllData();
            let resArr = [];
            return new Promise((resolve, reject) => {
                logData.forEach((logData) => {
                    const message = JSON.parse(logData.message).message;
                    if (message.method == 'Network.responseReceived') {
                        resArr.push(message);
                    }
                });
                resolve(resArr);
            });
        });
    }
    ;
    static getRequestData() {
        return __awaiter(this, void 0, void 0, function* () {
            const logData = yield this.getAllData();
            let resArr = [];
            logData.forEach((logData) => {
                const message = JSON.parse(logData.message).message;
                if (message.method == 'Network.requestWillBeSent') {
                    resArr.push(message);
                }
            });
            return resArr;
        });
    }
    //get response data by url and method
    static getUrlData() {
        return __awaiter(this, void 0, void 0, function* () {
            const logData = yield this.getAllData();
            ;
            let resArr = [];
            return new Promise((resolve, reject) => {
                logData.forEach((item) => {
                    const message = JSON.parse(item.message).message;
                    if (message.method == 'Network.requestWillBeSent') {
                        resArr.push(message.params.request.url);
                    }
                });
                resolve(resArr);
            });
        });
    }
    ;
    //get request data by url and method
    static getRequestInfoByUrl(url, method = 'POST') {
        const request = this.getRequestData();
        for (let i = 0; i < request.length; i++) {
            if (request[i].params.request.url == url && request[i].params.request.method == method) {
                return {
                    authorization: request[i].params.request.headers.Authorization,
                    postData: JSON.parse(request[i].params.request.postData),
                };
            }
        }
        throw allureData_1.perfLog[protractor_1.browser.params.logLanguage].urlMethod(method, url);
    }
    //get response data by url and method
    static getResponseInfoByUrl(url, method) {
        const response = this.getResponseData();
        for (let i = 0; i < response.length; i++) {
            if (response[i].params.response.url === url) {
                return {
                    response: response[i].params.response,
                };
            }
        }
        throw allureData_1.perfLog[protractor_1.browser.params.logLanguage].urlMethod(method, url);
    }
    ;
    static getRequestInfoByUrlContain(request, url, method = 'POST') {
        for (let i = 0; i < request.length; i++) {
            if (request[i].params.request.url.indexOf(url) >= 0 && request[i].params.request.method == method) {
                return {
                    authorization: request[i].params.request.headers.Authorization,
                    postData: JSON.parse(request[i].params.request.postData),
                };
            }
        }
        throw `${method} ${url} not found`;
    }
}
exports.GetPerformanceLogs = GetPerformanceLogs;
