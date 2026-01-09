"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definition of union - A variable can have one of multiple possible types
let value;
value = "hello"; // ✅ allowed
value = 100; // ✅ allowed
let role;
role = "user"; // ✅
role = "seller"; // ✅
// role = "guest";  // ❌ error
// The "any" keyword in TypeScript means: “Turn off TypeScript’s type checking for this value"
//# sourceMappingURL=unionAndAny.js.map