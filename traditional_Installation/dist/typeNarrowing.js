"use strict";
// type narrowing defintion: Reducing a broad type (like a union) into a more specific type at runtime checks, so TypeScript knows exactly what it is.
Object.defineProperty(exports, "__esModule", { value: true });
// another advantage is that we get method suggestions like if kind is string then when we write "kind." here we get automatic strings related method suggestions
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `chai order: ${kind}`;
}
// trutiness and falsiness
function serverChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
//# sourceMappingURL=typeNarrowing.js.map