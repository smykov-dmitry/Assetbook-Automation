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
const http = require('http');
const stringArray_1 = require("./stringArray");
class Proxy {
    constructor(conf) {
        this.host = (conf && conf.host) || 'localhost';
        this.port = (conf && conf.port) || 8080;
        this.proxyPort = (conf && conf.proxyPort) || null;
        this.selHost = (conf && conf.selHost) || 'localhost';
        this.selPort = (conf && conf.selPort) || 4444;
        this.downstreamKbps = conf && conf.downstreamKbps;
        this.upstreamKbps = conf && conf.upstreamKbps;
        this.latency = conf && conf.latency;
    }
    ;
    doReqWithOptions(options, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = '';
            return new Promise((resolve, reject) => {
                let req = http.request(options, (res) => {
                    res.setEncoding('utf8');
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', (chunk) => {
                        resolve(data);
                    });
                });
                if (typeof (postData) === 'string') {
                    req.write(postData);
                }
                ;
                req.end();
            });
        });
    }
    ;
    doReq(method, url, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                host: this.host, port: this.port, method: method, path: url, headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            return yield this.doReqWithOptions(options, postData);
        });
    }
    ;
    start(port) {
        return __awaiter(this, void 0, void 0, function* () {
            let postData = '';
            if (typeof (port) === 'number') {
                postData = 'port=' + port;
            }
            try {
                return JSON.parse(yield this.doReq('POST', '/proxy', postData));
            }
            catch (e) {
                throw new Error('browsermob-proxy returned error');
            }
        });
    }
    ;
    stop(port) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.doReq('DELETE', '/proxy/' + port);
        });
    }
    ;
    newPage(port, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.doReq('PUT', '/proxy/' + port + '/har/pageRef', 'pageRef=' + name);
        });
    }
    ;
    getHAR(port) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = JSON.parse(yield this.doReq('GET', '/proxy/' + port + '/har')).log.entries;
            const returnValue = {
                methods: stringArray_1.StringArray.getArrayByValueFromObjectList(stringArray_1.StringArray.getArrayByValueFromObjectList(result, 'request'), 'method'),
                urls: stringArray_1.StringArray.getArrayByValueFromObjectList(stringArray_1.StringArray.getArrayByValueFromObjectList(result, 'request'), 'url'),
                status: stringArray_1.StringArray.getArrayByValueFromObjectList(stringArray_1.StringArray.getArrayByValueFromObjectList(result, 'response'), 'status'),
                body: stringArray_1.StringArray.getArrayByValueFromObjectList(stringArray_1.StringArray.getArrayByValueFromObjectList(result, 'request'), 'postData')
            };
            return returnValue;
        });
    }
    ;
    startHAR(port, name, captureHeaders, captureContent, captureBinaryContent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof name !== 'string')
                name = 'Page 1';
            let postData = 'initialPageRef=' + name;
            if (typeof captureHeaders === 'boolean') {
                postData += '&captureHeaders=' + captureHeaders.toString();
            }
            if (typeof captureContent === 'boolean') {
                postData += '&captureContent=' + captureContent.toString();
            }
            if (typeof captureBinaryContent === 'boolean') {
                postData += '&captureBinaryContent=' + captureBinaryContent.toString();
            }
            yield this.doReq('PUT', '/proxy/' + port + '/har', postData);
            let limit = false;
            let limitObj = {};
            ['downstreamKbps', 'upstreamKbps', 'latency'].forEach((key) => {
                if (this[key]) {
                    limitObj[key] = this[key];
                    limit = true;
                }
            });
            if (limit) {
                yield this.limit(port, limitObj);
            }
            ;
        });
    }
    ;
    limit(port, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = '';
            for (let key in obj) {
                data += key + '=' + obj[key] + '&';
            }
            yield this.doReq('PUT', '/proxy/' + port + '/limit', data);
        });
    }
    ;
    addResponseMock(port, mockObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = `if (messageInfo.getOriginalUrl().endsWith('${mockObj.url}')) {
            contents.setTextContents('${mockObj.body}');
            stat = Java.type('io.netty.handler.codec.http.HttpResponseStatus');
            response.setStatus(stat.${mockObj.status});
            }`;
            yield this.addResponseFilter(port, text);
        });
    }
    ;
    addResponseMockInclude(port, mockObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = `if ((messageInfo.getOriginalUrl().indexOf('${mockObj.url}'))>=0) {
            contents.setTextContents('${mockObj.body}');
            stat = Java.type('io.netty.handler.codec.http.HttpResponseStatus');
            response.setStatus(stat.${mockObj.status});
            }`;
            yield this.addResponseFilter(port, text);
        });
    }
    ;
    addResponseFilter(port, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.doReqText('POST', '/proxy/' + port + '/filter/response', text);
        });
    }
    ;
    addRequestFilter(port, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.doReqText('POST', '/proxy/' + port + '/filter/request', text);
        });
    }
    ;
    doReqText(method, url, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                host: this.host, port: this.port, method: method, path: url, headers: {
                    'Content-Type': 'text/plain'
                }
            };
            return yield this.doReqWithOptions(options, postData);
        });
    }
    ;
}
exports.Proxy = Proxy;
