// Type assertion in TypeScript means:You manually tell TypeScript what the type is, even if TypeScript can’t figure it out.

let response:any="42"
let numericLength:number=(response as string).length


type Book={
    name:string
}

let bookString=`{"Name":"Who moved my cheese"}`;


// how to handle error in try catch

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error",error)
}


// never type: The never type represents values that never occur. It is commonly used for exhaustive checks to ensure all union type cases are handled.

// Role is a union type
// It means role can ONLY be "admin" or "user"
type Role = "admin" | "user";

// This function redirects user based on role
// Return type is void because it only logs messages
function redirectBasedOnRole(role: Role): void {

    // If role is admin
    if (role === "admin") {
        console.log("redirect to admin dashboard");
        return; // function ends here
    } 
    
    // If role is user
    else if (role === "user") {
        console.log("redirect to user dashboard");
        return; // function ends here
    }

    // ❗ This line is unreachable
    // Because Role can only be "admin" or "user"
    // TypeScript understands this and treats `role` here as type `never`
    role;
}

// now if i change Role to type Role = "admin" | "user"|"superAdmin" then when i hover role it shows "superAdmin"

// another use case 

// This function will NEVER finish execution and will NEVER return a value.
function neverReturn():never{
    while(true){}
}


// what is Exhaustive checks in TypeScript mean:
// Making sure ALL possible cases of a union type are handled — and letting TypeScript warn you if you miss any.
