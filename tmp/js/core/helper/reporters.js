"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
const specReporter = new jasmine_spec_reporter_1.SpecReporter();
function initializeReporters() {
    jasmine.getEnv().addReporter(specReporter);
    const jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter(new jasmine2HtmlReporter({
        savePath: './output/jasmineHtmlReport/',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        fixedScreenshotName: true,
    }));
    const allureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new allureReporter({
        resultsDir: './output/allure-results',
    }));
}
exports.initializeReporters = initializeReporters;
