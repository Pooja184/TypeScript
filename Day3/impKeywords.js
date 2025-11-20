// Creating an object of type 'User'
var myUser = {
    _id: "1234", // readonly property (cannot be modified later)
    name: "pooja",
    email: "p@gmail.com",
    isActive: true,
};
// Updating a normal property (allowed)
myUser.email = "pooja@gmail.com";
