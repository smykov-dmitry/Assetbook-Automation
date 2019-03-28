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
const fs = require('fs');
const unirest = require('unirest');
class HttpMethods {
    static getCookie(user, endpoint, headers, baseUrl = protractor_1.browser.params.apiBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield unirest.post(baseUrl + endpoint)
                    .headers(headers)
                    .send(user)
                    .end((response) => {
                    resolve(response);
                });
            }));
        });
    }
    ;
    static get(endpoint, headers, baseUrl = protractor_1.browser.params.apiBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield unirest.get(baseUrl + endpoint)
                    .headers(headers)
                    .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                });
            }));
        });
    }
    ;
    static getFile(endpoint, headers, fileName, baseUrl = protractor_1.browser.params.apiBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield unirest.get(baseUrl + endpoint)
                    .headers(headers)
                    .end((response) => {
                    resolve(fs.writeFile(fileName, response.body, 'binary'));
                });
            }));
        });
    }
    ;
    static post(endpoint, headers, data, baseUrl = protractor_1.browser.params.apiBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield unirest.post(baseUrl + endpoint)
                    .headers(headers)
                    .send(data)
                    .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                });
            }));
        });
    }
    ;
    static put(endpoint, headers, data, baseUrl = protractor_1.browser.params.apiBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield unirest.put(baseUrl + endpoint)
                    .headers(headers)
                    .send(data)
                    .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                });
            }));
        });
    }
    static delete(endpoint, headers, baseUrl = protractor_1.browser.params.apiBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield unirest.delete(baseUrl + endpoint)
                    .headers(headers)
                    .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                });
            }));
        });
    }
}
exports.HttpMethods = HttpMethods;
