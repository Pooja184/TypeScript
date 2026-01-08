

const palindrome=():string=>{
    let str:string="madamw";
    let i:number=0;
    let j:number=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return `${str} is not palindrome `
        }
        i++;
        j--;
    }         
     return `${str} is palindrome `
    
}
console.log(palindrome())