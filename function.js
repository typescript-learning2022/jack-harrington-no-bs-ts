"use strict";
exports.__esModule = true;
exports.getName = exports.greet = exports.printFormat = exports.formatFN = exports.concatStrings = void 0;
function addNumber(a, b) {
    return a + b;
}
exports["default"] = addNumber;
var concatStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.concatStrings = concatStrings;
var formatFN = function (title, format) { return "".concat(title, " ").concat(format); };
exports.formatFN = formatFN;
var printFormat = function (title, format) { return console.log((0, exports.formatFN)(title, format)); };
exports.printFormat = printFormat;
// export const fetchData = (url: string, params: any[]) => Promise.resolve(`Data for URl ${url}`);
var greet = function (message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(message, " ").concat(names.join(' '));
};
exports.greet = greet;
function getName(user) {
    return "".concat(user.fname ? user.fname : 'fname', " ").concat(user.lname ? user.lname : 'lname');
}
exports.getName = getName;
