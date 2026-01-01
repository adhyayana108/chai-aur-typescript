// TypeNarrowing and Type Guards in Typescript 

// The typeof Guard

function getChai(kind: string | number) {
    if (typeof kind === "string"){
        return `Making ${kind} with 3 dots`;
    } else {
        return `Chai order number is ${kind}`;
    }
}


// Truthiness Narrowing 

function serveChai(message?: string) {
    if(message) {
        return `Serving with message: ${message}`;

    }

    return "Serving deafult Masala Chai";
}


//Exhaustive Checks & Union Narrowing

function orderChai(size: "small" | "medium" | "large" | number){
    if(size== "small"){
        return "Small cutting chai ";
    }

    if(size=== "medium" || size === 'large'){
        return "Make extra chai";
    }

    return `Order ID: ${size}`;

} 


// The instanceof guard 

class KulhadChai {
    serve() { return "Serving Kulhad Chai"; }
}

class CuttingChai {
    serve() { return "Serving Cutting Chai"; }
}

function serveOrder(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }

    else {
        return chai.serve();
    }

}

// Type Predicates (User-Defined Type Guards)

type ChaiOrder = {
    type: string ;
    sugar: number ;
}

function isChaiOrder(object: any ): object is ChaiOrder {
    return (
        typeof object === 'object' &&
        object != null &&
        'type' in object &&
        'sugar' in object

    );
}

function processOrder(item: any) {
    if(isChaiOrder(item)) {
        return `Chai type: ${item.type}, Sugar: ${item.sugar}` ;

    }
    return "Invalid Order format";
}

// The in operator narrowing

interface MasalaChai {
    spiceLevel: "low" | "medium" | "high"; // Required for the 'in' check
}

interface GingerChai {
    gingerSyrup: string; // Just a unique property for GingerChai
}

function brewChai(order: MasalaChai | GingerChai) {
    if("spiceLevel" in order) {
        return `Brewing Masala Chai with spice ${order.spiceLevel}`;
    }

    return `Brewing Ginger Chai`;
}



