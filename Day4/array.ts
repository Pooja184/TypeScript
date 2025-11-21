// Creating an empty array of strings (two valid ways)
// const languages: string[] = [];   // Method 1 (short syntax)
const languages: Array<string> = []; // Method 2 (generic syntax)

languages.push("C++"); // adding a string to the array


// Creating a custom type for users
type User1 = {
  name: string;       // user's name
  isActive: boolean;  // active status
};

// Array of User1 objects
const allUsers: User1[] = [];

allUsers.push({ name: "pooja", isActive: true }); // pushing a user object


// ----------------------//

// 2D array of numbers (array inside an array)
// Commonly used for matrix data or ML models
const MLmodels: number[][] = [
  [255, 255, 255],  // first row
  [134, 533, 866],  // second row
];

// union types
// A union type allows a variable to store more than one possible type.
// It means the variable can be either this type OR that type.
const data:(string | number)[]=["hello",3,4];

export {}
