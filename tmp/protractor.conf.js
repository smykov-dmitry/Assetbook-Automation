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
const reporters_1 = require("./js/core/helper/reporters"); //root after copy will should be "./js/core/helper/reporters"
exports.config = {
    directConnect: true,
    capabilities: {
        shardTestFiles: false,
        maxInstances: 3,
        browserName: "chrome",
        "loggingPrefs": {
            "browser": "ALL",
            "performance": "ALL"
        },
        chromeOptions: {
            perfLoggingPrefs: {
                "enableNetwork": true,
                "enablePage": false,
            },
            "args": [
                "disable-infobars=true",
                "safebrowsing-disable-download-protection",
                // "--headless",// headless mode
                "--window-size=1920x1080",
            ],
            prefs: {
                "safebrowsing": {
                    "enabled": true,
                    "disable_download_protection": true,
                },
                "download": {
                    "behavior": "allow",
                    "directory_upgrade": true,
                    "prompt_for_download": false,
                    "default_directory": __dirname + ".\\downloads\\" // path to download files
                },
            }
        }
    },
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    specs: [
        "./test/*.e2e.spec.js",
    ],
    exclude: [],
    suites: {
        login: 'test/login.e2e.spec.ts'
    },
    params: {
        baseUrl: "https://www.google.by/",
        apiBaseUrl: "http://apibaseurl",
        waitWebElementMaxTimeout: 30000,
        takeScreenShotFromEachAllureStep: false,
        logLanguage: "En"
    },
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().window().maximize();
        yield reporters_1.initializeReporters();
    }),
    onComplete: () => __awaiter(this, void 0, void 0, function* () {
    }),
    jasmineNodeOpts: {
        defaultTimeoutInterval: 70000,
    }
};
