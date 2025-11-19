const User={
    name:"Pooja",
    email:"p@gmail.com",
    isActive:true
}

// ---------------------
function createUser({name,isPaid}:{name:string,isPaid:boolean}){}

createUser({name:"Pooja",isPaid:false});
// -----------------------


// ==================
function createUser1():{name:string,isPaid:boolean}{
    return {name:"pooja",isPaid:true}
}
// ========================

function createUser3({name,isPaid}:{name:string,isPaid:boolean}){}

let newUser={name:"Pooja",isPaid:false,email:"p@gmail.com"}
createUser(newUser);
// createUser({name:"Pooja",isPaid:false,email:"p@gmail.com"}) here we cannot assign email bcause createUser function only accept name and isPaid property BUT we can pass object which have more properties than required like newUser object

export {}