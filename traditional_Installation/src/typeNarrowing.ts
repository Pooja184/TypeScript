// type narrowing defintion: Reducing a broad type (like a union) into a more specific type at runtime checks, so TypeScript knows exactly what it is.

// another advantage is that we get method suggestions like if kind is string then when we write "kind." here we get automatic strings related method suggestions

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `chai order: ${kind}`;
}

// trutiness and falsiness
function serverChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

class kulhadChai {
  serve() {
    return `Serving Kulhad Chai!`;
  }
}

class cuttingChai {
  serve() {
    return `Serving cutting Chai!`;
  }
}

function serve(chai: kulhadChai | cuttingChai) {
  if (chai instanceof kulhadChai) {
    chai.serve();
  }
}

// how to create our own types- imp
type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverChaiOrder(item:chaiOrder | string){
    if (isChaiOrder(item)) {
        return  `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}


// example 2

type masalaChai={type:"masala"; spiceLevel:number}
type gingerChai={type:"ginger"; amoung:number}
type elaichiChai={type:"elaichi"; aroma:number}

type Chai=masalaChai|gingerChai|elaichiChai;

function makeChai(order:Chai){
    switch (order.type) {
        case "masala":
            return  `Masala Chai`
        case "elaichi":
            return  `Elaichi Chai`
        case "ginger":
            return  `Ginger Chai`
    }
}

function brew(order:masalaChai|gingerChai){
    if ("spiceLevel" in order) {
        // code
    }
}
