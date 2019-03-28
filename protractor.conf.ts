import {browser, Config} from "protractor";
import {initializeReporters} from "./js/core/helper/reporters";//root after copy will should be "./js/core/helper/reporters"

export let config: Config = {
    directConnect: true, //it"s only for chrome, for IE and FireFox should be false and need to run tests with protractorWithServer
    capabilities: {
        shardTestFiles: false, //if true will be parallel run
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
                "disable-infobars=true", //do not show infobar that browser is under automation
                "safebrowsing-disable-download-protection", //do not show keep or save when you download a file
                // "--headless",// headless mode
                "--window-size=1920x1080", //screen resolution
            ],
            prefs: {
                "safebrowsing" : {
                    "enabled" : true,
                    "disable_download_protection": true, //do not show keep or save when you download a file
                },
                "download": {
                    "behavior": "allow",
                    "directory_upgrade": true,
                    "prompt_for_download": false, //no need permission for download
                    "default_directory": __dirname + ".\\downloads\\" // path to download files
                },
            }
        }
    },
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    specs: [
        "./test/*.e2e.spec.js",
    ],

    exclude: [ ],

    suites:{
    },


    params: {
        baseUrl: "https://www.google.by/",
        apiBaseUrl: "http://apibaseurl",
        waitWebElementMaxTimeout: 30000,
        takeScreenShotFromEachAllureStep: false,
        logLanguage: "En"
    },


    onPrepare: async () => {
        browser.manage().window().maximize();
        await initializeReporters();
    },

    onComplete: async () => {

    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 70000,
    }
};