const addTwo=(num:number):number=>{
    return num+2; 
    // return "hello" gives err bcause we use return type of function as number

}
addTwo(5);


// here type of getValue func is any but if we declared it as string then it give us error bcause here we also use boolean 
function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "hello";
}

// -----------------------//
// here we cannot return any values other than string
const heros=["thor","spiderman","ironman"];

heros.map((hero):string=>{
    return `heyy ${hero}`
})
// ------------------------------//

// void type indicates that the function doesn't return any value
function consoleErr(errmsf:string):void{
    console.log(errmsf);
}

// ------------------------------//
// The return type 'never' means this function will never return.
// It always throws an error and stops execution.
function handleErr(errmsf:string):never{
    throw new Error(errmsf);
}
export {}