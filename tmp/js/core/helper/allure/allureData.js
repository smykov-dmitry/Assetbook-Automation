"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonLog = {
    "En": {
        clickByText: (buttonName) => {
            return `Click on the button '${buttonName}' `;
        },
    },
    "Ru": {
        clickByText: (buttonName) => {
            return `Нажать на кнопку '${buttonName}'`;
        }
    }
};
exports.dropdownLog = {
    "En": {
        openAndSelectOption: (buttonName, optionName) => {
            return `Click on the dropdown '${buttonName}' and select option '${optionName}' `;
        },
    },
    "Ru": {
        openAndSelectOption: (buttonName, optionName) => {
            return `Открыть дропдаун '${buttonName}' и выбрать опцию '${optionName}'`;
        }
    }
};
exports.inputLog = {
    "En": {
        fillInput: (value) => {
            return `Fill field with '${value}' value' `;
        },
    },
    "Ru": {
        fillInput: (value) => {
            return `Заполнить инпут следующим значением '${value}' `;
        }
    }
};
exports.linkLog = {
    "En": {
        clickByText: (linkName) => {
            return `Click on the link '${linkName}'`;
        },
    },
    "Ru": {
        clickByText: (linkName) => {
            return `Нажать на линку '${linkName}'`;
        }
    }
};
exports.expectToEqualLog = {
    "En": {
        compare: (expectedResult) => {
            return `Compare expected result '${expectedResult}' with actual`;
        },
        error: (expectedResult, value) => {
            return `Expected result '${expectedResult}' does not match with actual'${value}'`;
        }
    },
    "Ru": {
        compare: (expectedResult) => {
            return `Сравнение ожидаемого результата '${expectedResult}' с актуальным`;
        },
        error: (expectedResult, value) => {
            return `Ожидаемый результат '${expectedResult}' не совпадает с фактическим'${value}'`;
        }
    }
};
exports.expectToContainLog = {
    "En": {
        compare: (expectedResult) => {
            return `Compare expected result '${expectedResult}'  to contain actual`;
        },
        error: (expectedResult, value) => {
            return `Expected result '${expectedResult}' does not contain actual '${value}'`;
        }
    },
    "Ru": {
        compare: (expectedResult) => {
            return `Сравнение ожидаемого результата '${expectedResult}' не содержит актуальный`;
        },
        error: (expectedResult, value) => {
            return `Ожидаемый результат '${expectedResult}' не содержит '${value}'`;
        }
    }
};
exports.expectToPresentLog = {
    "En": {
        compare: (addInfo, loctor, expectedResult) => {
            return `Check for '${addInfo}' '${loctor} element on present in DOM to be '${expectedResult}'`;
        },
        error: (addInfo, res, expectedResult) => {
            return `Element '${addInfo}'  on present '${res}' does not match with '${expectedResult}'`;
        }
    },
    "Ru": {
        compare: (addInfo, loctor, expectedResult) => {
            return `Проверка '${addInfo}' '${loctor} элемента на наличие в DOM дерева - должно быть '${expectedResult}'`;
        },
        error: (addInfo, res, expectedResult) => {
            return `Эемент '${addInfo}' на наличие в DOM '${res}' не совпадает '${expectedResult}'`;
        }
    }
};
exports.expectToDisplayLog = {
    "En": {
        compare: (addInfo, loctor, expectedResult) => {
            return `Check for '${addInfo}' '${loctor} element on display to be '${expectedResult}'`;
        },
        tryError: (addInfo) => {
            return `Element '${addInfo}' is not present in DOM`;
        },
        error: (addInfo, res, expectedResult) => {
            return `Element '${addInfo}'  on display '${res}' does not match with '${expectedResult}'`;
        }
    },
    "Ru": {
        compare: (addInfo, loctor, expectedResult) => {
            return `Проверка '${addInfo}' '${loctor} элемента на на видимость - должно быть '${expectedResult}'`;
        },
        tryError: (addInfo) => {
            return `Элемента '${addInfo}' нет в DOM дереве`;
        },
        error: (addInfo, res, expectedResult) => {
            return `Эемент '${addInfo}' на видимость '${res}' не совпадает '${expectedResult}'`;
        }
    }
};
exports.expectToCompareLog = {
    "En": {
        compare: (actualResult, expectedResult) => {
            return `Compare actual result: '${actualResult}' with expected result: '${expectedResult}'`;
        },
        error: (actualResult, expectedResult) => {
            return `Expected result '${expectedResult}' does not match with '${actualResult}'`;
        }
    },
    "Ru": {
        compare: (actualResult, expectedResult) => {
            return `Сравнение актуального результата: '${actualResult}' с ожидаемым результатом: '${expectedResult}'`;
        },
        error: (actualResult, expectedResult) => {
            return `Сравнение ожидаемого '${expectedResult}' не совпадает с фактическим '${actualResult}'`;
        }
    }
};
exports.expectNotToCompareLog = {
    "En": {
        compare: (actualResult, expectedResult) => {
            return `Actual result: '${actualResult}' is not match with expected result: '${expectedResult}'`;
        },
        error: (actualResult, expectedResult) => {
            return `Expected result '${expectedResult}' match with '${actualResult}', but should not be`;
        }
    },
    "Ru": {
        compare: (actualResult, expectedResult) => {
            return `Актуального результат: '${actualResult}' не совпадает с ожидаемым результатом: '${expectedResult}'`;
        },
        error: (actualResult, expectedResult) => {
            return `Ожидаемого '${expectedResult}'  совпадает с фактическим '${actualResult}, но не должен'`;
        }
    }
};
exports.perfLog = {
    "En": {
        urlMethod: (method, url) => {
            return `${method} ${url} is not found`;
        }
    },
    "Ru": {
        urlMethod: (method, url) => {
            return `${method} ${url} не найдены`;
        }
    }
};
exports.expectToEnabledLog = {
    "Ru": {
        compare: (addInfo, locator, expectedResult) => {
            if (expectedResult === true) {
                return `Проверка: ${addInfo} кликабелен. Локатор элемента: "${locator}".`;
            }
            else {
                return `Проверка: ${addInfo} не кликабелен. Локатор элемента: "${locator}".`;
            }
        },
        tryError: (addInfo, locator) => {
            return `Ошибка: ${addInfo} отсутствует в DOM дереве. Локатор элемента: "${locator}".`;
        },
        error: (addInfo, locator, expectedResult) => {
            if (expectedResult === true) {
                return `Ошибка: ${addInfo} не кликабелен. Локатор элемента: "${locator}".`;
            }
            else {
                return `Ошибка: ${addInfo} кликабелен. Локатор элемента: "${locator}".`;
            }
        }
    },
};
exports.waitErrors = {
    "En": {
        display: (elemLocator) => {
            return `Element '${elemLocator}' is not found, waiting time is over`;
        },
        notDisplay: (elemLocator) => {
            return `Element '${elemLocator}' is still present, waiting time is over`;
        },
        clickable: (elemLocator) => {
            return `Element '${elemLocator}' is not clickable, waiting time is over`;
        }
    },
    "Ru": {
        display: (elemLocator) => {
            return `Элемент '${elemLocator}' не найден, время ожидания истекло`;
        },
        notDisplay: (elemLocator) => {
            return `Элемент '${elemLocator}' все еще присутсвует в дом, время ожидания истекло`;
        },
        clickable: (elemLocator) => {
            return `Элмент '${elemLocator}' не кликабельный, время ожидания истекло`;
        }
    }
};
exports.actionsLog = {
    "En": {
        click: (elementLocator) => {
            return `Click on the element ${elementLocator}`;
        },
        doubleClick: (elementLocator) => {
            return `Double click on the element ${elementLocator}`;
        },
        dragAndDrop: (elementLocator, targetLocator) => {
            return `Drag and drop one element ${elementLocator} to another ${targetLocator}`;
        },
        dragAndDropElementByCoordinate: (elementLocator, x, y) => {
            return `Drag and drop element ${elementLocator} by coordinates '${x}' and '${y}'`;
        },
        hoverOnElement: (elementLocator) => {
            return `Hover on the element ${elementLocator}`;
        },
        mouseMoveByCoordinates: (xValue, yValue) => {
            return `Hover or scroll by coordinates '${xValue}' and '${yValue}'`;
        },
        sendKeys: (elementLocator, value) => {
            return `Send "${value}" value to the element ${elementLocator}`;
        },
        clearInputWithDelete: (elementLocator) => {
            return `Clear input ${elementLocator} with Delete`;
        },
        copy: `Copy value`,
        paste: `Paste value`,
        pasteInInput: (elementLocator) => {
            return `Paste copied value in input ${elementLocator}`;
        },
        copyPaste: () => {
            return `Click on Ctrl+C and Ctrl+V`;
        }
    },
    "Ru": {
        click: (elementLocator) => {
            return `Нажать на элемент ${elementLocator}`;
        },
        doubleClick: (elementLocator) => {
            return `Двойной клик на элемент ${elementLocator}`;
        },
        dragAndDrop: (elementLocator, targetLocator) => {
            return `Перетащить один элемент ${elementLocator} к другому ${targetLocator}`;
        },
        dragAndDropElementByCoordinate: (elementLocator, x, y) => {
            return `Перетащить элемент ${elementLocator} по координатам '${x}' и '${y}'`;
        },
        hoverOnElement: (elementLocator) => {
            return `Навести на элмент ${elementLocator}`;
        },
        mouseMoveByCoordinates: (xValue, yValue) => {
            return `Навести по координатам '${xValue}' и '${yValue}'`;
        },
        sendKeys: (elementLocator, value) => {
            return `Отправить "${value}" значение в элемент ${elementLocator}`;
        },
        clearInputWithDelete: (elementLocator) => {
            return `Очистить поле ввода ${elementLocator} с помощью Delete`;
        },
        copy: `Копировать значение`,
        paste: `Вставить значение`,
        pasteInInput: (elementLocator) => {
            return `Вставить скопированное значение в поле ввода ${elementLocator}`;
        },
        copyPaste: () => {
            return `Нажать Ctrl+C и Ctrl+V`;
        }
    }
};
exports.jsScriptLog = {
    "En": {
        scrollDown: `Scroll down`,
        scrollUp: `Scroll up`,
        scrollToElement: (element) => {
            return `Scroll to element "${element.locator()}"`;
        },
        scrollToElementByCssAndNumber: (css) => {
            return `Scroll to element by css "${css}"`;
        },
        clickByCssAndNumber: (css) => {
            return `Click with js on element by css "${css}"`;
        },
        getValue: (css, number) => {
            return `Return value from "${css}" by number "${number}"`;
        },
        setValueByCssAndNumber: (value, css) => {
            return `Set value "${value}" with js to element by css "${css}"`;
        },
        setAttributeValueByCssAndNumber: (attribute, value, css) => {
            return `Set attributes "${attribute}" with  value "${value}" with js
         to element by css "${css}"`;
        },
        openNewBrowserTab: (url) => {
            return `Open new browser tab with url "${url}"`;
        },
        returnCustomCssStyleValueFromCssLocator: (css, value) => {
            return `Return css style "${value}" value from element "${css}"`;
        }
    },
    "Ru": {
        scrollDown: `Прокрутить вниз`,
        scrollUp: `Прокрутить вверх`,
        scrollToElement: (element) => {
            return `Прокрутить до элмента "${element.locator()}"`;
        },
        scrollToElementByCssAndNumber: (css) => {
            return `Прокрутить до элмента по css "${css}"`;
        },
        getValue: (css, number) => {
            return `Возвратить vale из "${css}" по номеру "${number}"`;
        },
        clickByCssAndNumber: (css) => {
            return `Нажать на элмент по css "${css}"`;
        },
        setValueByCssAndNumber: (value, css) => {
            return `Задать атрибут value "${value}" в элемент по css "${css}"`;
        },
        setAttributeValueByCssAndNumber: (attribute, value, css) => {
            return `Задать атрибут "${attribute}" с значением "${value}" в элемент по css "${css}"`;
        },
        openNewBrowserTab: (url) => {
            return `Открытие новой табки в браузере с url "${url}"`;
        },
        returnCustomCssStyleValueFromCssLocator: (css, value) => {
            return `Возврат значение стиля "${value}" следующего элемента "${css}"`;
        }
    }
};
exports.iframeLog = {
    "En": {
        switchToIframe: `Switch to iframe`,
        switchToDefaultContent: 'Switch to default content'
    },
    "Ru": {
        switchToIframe: `Переключиться в iframe`,
        switchToDefaultContent: 'Переключиться в дефолтное состояние из iframe'
    }
};
exports.browserTabLog = {
    "En": {
        switchToTabByNumber: `Switch to browser tab`,
        closeCurrentTabAndSwitchWoFirstTab: 'Close current browser tab and switch to tab by number'
    },
    "Ru": {
        switchToTabByNumber: `Переключиться на новую табку браузера`,
        closeCurrentTabAndSwitchWoFirstTab: `Закрыть текщую вкладку браузера и переключится на другую по номеру`
    }
};
