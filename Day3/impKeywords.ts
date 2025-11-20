// Creating a custom type 'User' using a type alias
type User = {
  readonly _id: string; // 'readonly' means this value cannot be changed after creation
  name: string;         // name must be a string
  email: string;        // email must be a string
  isActive: boolean;    // isActive must be true/false
  credCardDetails?:number  // ? means optional property (may or may not exist), but must be a number when provided

};

// Creating an object of type 'User'
let myUser: User = {
  _id: "1234",                // readonly property (cannot be modified later)
  name: "pooja",
  email: "p@gmail.com",
  isActive: true,
};

// Updating a normal property (allowed)
myUser.email = "pooja@gmail.com";

// Trying to update a readonly property will give an error
// myUser._id = "1244";  // ❌ Not allowed because _id is readonly
