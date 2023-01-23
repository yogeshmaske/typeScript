"use strict";
exports.__esModule = true;
function formatLine(input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim()}).join('');
    }
    return line;
}
;
console.log(formatLine('hello '));
console.log(formatLine(['hello ', 'word']));
