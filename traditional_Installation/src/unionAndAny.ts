// definition of union - A variable can have one of multiple possible types
let value: string | number;

value = "hello"; // ✅ allowed
value = 100;     // ✅ allowed
// value = true;    // ❌ error


// imp
type Role = "user" | "seller" | "admin";

let role: Role;

role = "user";   // ✅
role = "seller"; // ✅
// role = "guest";  // ❌ error



// The "any" keyword in TypeScript means: “Turn off TypeScript’s type checking for this value"

