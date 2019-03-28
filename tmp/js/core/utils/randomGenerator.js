"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomGenerator {
    static numbers(charsAmount) {
        let text = '';
        const possible = "0123456789";
        for (let i = 0; i < charsAmount; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    ;
    static text(charsAmount) {
        let text = '';
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < charsAmount; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    ;
    static upperCaseText(charsAmount) {
        let text = '';
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < charsAmount; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    ;
    static lowerCaseText(charsAmount) {
        let text = '';
        const possible = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < charsAmount; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    ;
    static textAndNumbers(charsAmount) {
        let text = '';
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < charsAmount; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    ;
}
exports.RandomGenerator = RandomGenerator;
