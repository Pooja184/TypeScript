"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    return num + 2;
    // return "hello" gives err bcause we use return type of function as number
};
addTwo(5);
// here type of getValue func is any but if we declared it as string then it give us error bcause here we also use boolean 
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "hello";
}
// -----------------------//
// here we cannot return any values other than string
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "heyy ".concat(hero);
});
// ------------------------------//
// void type indicates that the function doesn't return any value
function consoleErr(errmsf) {
    console.log(errmsf);
}
// ------------------------------//
// The return type 'never' means this function will never return.
// It always throws an error and stops execution.
function handleErr(errmsf) {
    throw new Error(errmsf);
}
