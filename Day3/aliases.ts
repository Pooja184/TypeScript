
// A type alias is a feature in TypeScript that allows you to create your own custom type using a name.
// It helps you reuse the same type structure anywhere in your code.

// Creating a custom type 'User' which describes the shape of a user object
type User = {
  name: string;      // name must be a string
  email: string;     // email must be a string
  isActive: boolean; // isActive must be true/false
};

// The function accepts a 'User' object and also returns a 'User' object
function createUser(user: User): User {
  // returning a new user object that follows the 'User' type
  return { name: "pooja", email: "p@gmail.com", isActive: true };
}

// Calling the function with a valid 'User' object
createUser({ name: "pooja", email: "p@gmail.com", isActive: true });

export {};
