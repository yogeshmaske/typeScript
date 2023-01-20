"use strict";
exports.__esModule = true;
exports.isPalidrome = void 0;
function isPalidrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalidrome = isPalidrome;
