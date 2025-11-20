"use strict";
// A type alias is a feature in TypeScript that allows you to create your own custom type using a name.
// It helps you reuse the same type structure anywhere in your code.
Object.defineProperty(exports, "__esModule", { value: true });
// The function accepts a 'User' object and also returns a 'User' object
function createUser(user) {
    // returning a new user object that follows the 'User' type
    return { name: "pooja", email: "p@gmail.com", isActive: true };
}
// Calling the function with a valid 'User' object
createUser({ name: "pooja", email: "p@gmail.com", isActive: true });
