//1- Basic Function Syntax

function makeChai(type: string , cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masala" , 2); // Valid

// makeChai("Ginger", "Two"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//2- Return Types

// a-Explicit Return Type

function getChaiPrice(): number {
    return 25;

    // return "25"; //Error: Type 'string' is not assignable to type 'number'

}

// b-Inferred Return Type

function calculateCost(price: number , quantity: number){
return price*quantity;
}
// TypeScript infers the return type as 'number' automatically.

// c-The void Return Type

function logChaiMessage(message: string): void {
    console.log(`Log: ${message}`);
    // return 10; // Error: Type 'number' is not assignable to type 'void'.
}

//c- Handling null / Conditional Returns

function makeOrder(order: string): string | null {
    if(order === "Coffee"){
        return null;
    }

    return `Serving ${order}`;
}

// optional parameters 

function orderChai(type: string , sugar?: number){
    if(sugar){
        console.log(`Making ${type} chai with ${sugar} sugar`);
    } else {
        console.log(`Making ${type} chai with no sugar`);
    }
}

orderChai("Masala"); // Valid (sugar is undefined)
orderChai("Masala", 2); // Valid

// Default parameters (=)
 function prepareChai(type: string = "Masala"){
    console.log(`Preparing ${type} chai `);
 }

 prepareChai(); // Uses default "Masala"
 prepareChai("Ginger"); // Uses "Ginger"

// Complex Parameter Types

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "medium" | "large";
}): number {
     console.log(`Creating ${order.size} ${order.type} tea with ${order.sugar} sugar`);
    
    // Returning a random Order ID (number)
    return 404;
}

createChai({ type: "Ginger", sugar: 2, size: "large" }); // Valid