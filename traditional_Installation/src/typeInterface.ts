function makeChai(order:{type:string;sugar:number;strong:boolean}){
    console.log(order)
}

function serverChai(order:{type:string;sugar:number;strong:boolean}){
    console.log(order)
}

// here in above code we've written same types in both func instead of we can create type then use that type in code. It makes code clean and readble

type Chai={
    type:string;
    sugar:number;
    strong:boolean
}

// like this

type TeaRecipe={
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe{
    water= 100;
    milk= 50;
}

// this type is called literal type because we actually assign a values
type CupSize = "small" | "large";

// Error: We cannot use CupSize with `implements`
// Reason: `implements` works only with interfaces or object-shaped types.
// CupSize is a union type (string literals), not a structure with properties or methods.

// class ChaiR implements CupSize {
  
// }


// -------------------interfaces------------------------------
// how to create interface
// An interface in TypeScript defines the structure that a class or object must follow.
// when dealing with classses preffer interfaces instead of types
interface TeaRecipee{
    water:number;
    milk:number;
}


interface CupSizee{
    size:"small" | "large"
};

class ChaiR implements CupSizee {
    size: "small" | "large"="large"
}

//----------------------------- intersections--------------------------
type TeaType="masala"|"ginger"|"lemon";

function orderChai(t:TeaType){
    console.log(t)
}

type BaseChai={teaLeaves:number};
type Extra={masala:number};

type MasalaChaii=BaseChai & Extra

const Cup:MasalaChaii={
    teaLeaves:2,
    masala:1
}

// we can also pass optional values
type User={
    userName:string,
    bio?:string
}

const u1:User={
    userName:"pooja"
}

const u2:User={
    userName:"sanchit",
    bio:"jebdii"
}

// we can also add readonly values
type Config={
    readonly appName:string,
    version:number
}

const cfg:Config={
    appName:"masterji",
    version:1
}

// cfg.appName="jfbwjk"  error because appName is readonly


