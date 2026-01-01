// The Problem: Repetitive Object Signatures

// The "Messy" Way (Inline Types)

// Function 1: Making Chai
function makeChai(order: { type: string, sugar: number, strong: boolean }) {
    console.log(`Making ${order.type} chai with ${order.sugar} sugar.`);
}

// Function 2: Serving Chai
function serveChai(order: { type: string, sugar: number, strong: boolean }) {
    console.log(`Serving ${order.type} chai.`);
}

// This violates the "DRY" (Don't Repeat Yourself) principle.
// If we add a new property, we have to update it everywhere.

// 2. The Solution: Type Aliases (type)

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

// Now the functions are clean and readable
function makeChaiClean(order: ChaiOrder) {
    console.log(order);
}

function serveChaiClean(order: ChaiOrder) {
    console.log(order);
}


// Interfaces 
//there is no = sign in an interface

interface TeaRecipe {
    water: number;
    milk: number;
    sugar: number;
}
 // Using Types/Interfaces with Classes (implements)

 interface TeaRecipe {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water: number;
//     milk: number;

//     constructor(water: number, milk: number) {
//         this.water = water;
//         this.milk = milk;
//     }
// }

// The "Gotcha": Where type Fails in Classes

// The error scenario :

// // A Union Type (Literal Type)
type CupSize = "small" | "medium" ;

// ERROR: A class cannot implement a union type directly
// class Chai implements CupSize { ... } // Error

// The Fix: Use Interfaces for such cases

interface CupConfig {
    size: "small" | "medium";

}

class Chai implements CupConfig {
    size: "small" | "medium" = "small"; //Valid

}

// Literal Types (Unions)

type TeaType = "masala" | "ginger" | "lemon" ;

function orderChai(chaiType: TeaType) {
    console.log(`Ordering: ${chaiType}`);
}

orderChai("masala"); // Valid
// orderChai("green"); // Error: Type '"green"' is not assignable to type 'TeaType'.


// Intersection Types (&)

type BaseChai = {
    teaLeaves: number;
};

type ExtraIngredients = {
    masala: number;
};

// Intersection: MasalaChai MUST have both teaLeaves AND masala
type MasalaChaiRecipe = BaseChai & ExtraIngredients;

const myChai: MasalaChaiRecipe = {
    teaLeaves: 2,
    masala: 1
};


// Optional Properties (?)

type User = {
    username: string;
    bio?: string; // Optional
};

const user1: User = { username: "hitesh" }; // Valid (no bio)
const user2: User = { username: "chai", bio: "Developer" }; // Valid (with bio)


//Readonly Properties (readonly)

type Config = {
    readonly appName: string;
    version: number;
};

const appConfig: Config = {
    appName: "ChaiApp",
    version: 1
};

// appConfig.appName = "NewApp"; // Error: Cannot assign to 'appName' because it is a read-only property.
appConfig.version = 2; // Valid (not readonly)

