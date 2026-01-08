// type narrowing defintion: Reducing a broad type (like a union) into a more specific type at runtime checks, so TypeScript knows exactly what it is.

// another advantage is that we get method suggestions like if kind is string then when we write "kind." here we get automatic strings related method suggestions

function getChai(kind:string|number){
    if(typeof kind==="string"){
        return `Making ${kind} chai...`
    }
    return `chai order: ${kind}`
}

// trutiness and falsiness
function serverChai(msg?:string){
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

