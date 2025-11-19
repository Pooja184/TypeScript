"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Pooja",
    email: "p@gmail.com",
    isActive: true
};
// ---------------------
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
createUser({ name: "Pooja", isPaid: false });
// -----------------------
// ==================
function createUser1() {
    return { name: "pooja", isPaid: true };
}
// ========================
function createUser3(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "Pooja", isPaid: false, email: "p@gmail.com" };
createUser(newUser);
