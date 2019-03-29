import {Button} from '../../js/core/controls/button';
import {allureStep} from "../../js/core/helper/allure/allureSteps";
import {ElementFinder} from "protractor";

export class ButtonExtend extends Button {

    public static async clickOnElement(elem:ElementFinder) {
        await allureStep(`Click on element ${await elem.locator()}`, async() => {
            await elem.click();
        });
    };
}
