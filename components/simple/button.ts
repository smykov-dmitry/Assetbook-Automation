import {Button} from '../../js/core/controls/button';
import {allureStep} from "../../js/core/helper/allure/allureSteps";
import {Waiters as w} from '../../js/core/helper/waiters';
import {ElementFinder} from "protractor";

export class ButtonExtend extends Button {

    public static async clickButtonElementAndWait(button: ElementFinder, waitElem: ElementFinder) {
        await allureStep(`Click on the button '${await button.locator()} and wait '${await waitElem.locator()}' `, async () => {
            await w.waitUntilElementIsDisplayed(button);
            await w.waitUntilElementIsClickable(button);
            await button.click();
            await w.waitUntilElementIsDisplayed(waitElem);
            await w.waitUntilElementIsClickable(waitElem);
        });
    }

    public static async clickButtonByTextAndWait(buttonText: string, waitElem: ElementFinder) {
        await allureStep(`Click on the button by '${buttonText}' name`, async () => {
            await w.waitUntilElementIsClickable(await this.returnByText(buttonText));
            await this.returnByText(buttonText).click();
            await w.waitUntilElementIsClickable(waitElem);
        });
    }

    public static async clickOnElement(elem:ElementFinder) {
        await allureStep(`Click on element ${await elem.locator()}`, async() => {
            await elem.click();
        });
    };


}
