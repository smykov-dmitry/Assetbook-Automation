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
class StringArray {
    static fromCapitalToFirstCapitalAndOtherLow(fullName) {
        const resArr = fullName.split(' ');
        for (let i = 0; i < resArr.length; i++) {
            resArr[i] = resArr[i].toLowerCase();
            resArr[i] = resArr[i].charAt(0).toUpperCase() + resArr[i].slice(1);
        }
        return resArr.join(' ');
    }
    ;
    static returnStringWithoutDashes(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const tempArr = value.split('-');
            const resString = tempArr.join('');
            return resString;
        });
    }
    ;
    static removeDashesAndSpacesFromString(str) {
        return __awaiter(this, void 0, void 0, function* () {
            const regValue = /\D/g;
            const tempStr = str.toString().replace(regValue, '');
            return tempStr;
        });
    }
    ;
    static getArrayByValueFromObjectList(objectList, field) {
        try {
            return objectList.map(item => item[field]);
        }
        catch (err) {
            if (err.message === 'objectList.map is not a function') {
                throw 'something going wrong object or object is empty';
            }
        }
    }
    ;
    static arraysEqual(a, b) {
        if (a === b)
            return true;
        if (a.length != b.length)
            return false;
        if (a == null || b == null)
            return false;
        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }
}
exports.StringArray = StringArray;
