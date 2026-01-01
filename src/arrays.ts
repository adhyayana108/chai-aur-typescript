// arrays 

//1- Basic Syntax

const chaiFlavors: string[] = [ "masala" , "ginger" , "cardamom"];
// chaiFlavors.push(2); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

//Generic Syntax (Array<type>)

const chaiPrices: Array<number> = [20 , 25 , 30];

//2- Array of Objects

type Chai = {
    name: string;
    price: number;
};

const chaiMenu: Chai[] = [
    { name: "Masala Chai", price: 15 },
    { name: "Ginger Chai", price: 20 },
    // { name: "Lemon Chai", price: "20" } // Error: price must be a number 
];

//3- Readonly Arrays

const cities: readonly string[] = ["Delhi", "Jaipur"];

// cities.push("Pune"); // Error: Property 'push' does not exist on type 'readonly string[]'.

//4- Mutidimensional Arrays

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];


// Tuples

//1- Basic Tuple

let chaiOrder: [string, number]; // [chaiType, quantity]

chaiOrder = ["Masala", 2]; // Valid
// chaiOrder = [2, "Masala"]; // Error: Type 'number' is not assignable to type 'string'.

//2- Named Tuples 

const chaiItem: [name: string, price: number] = ["Masala", 25];


// Enums 

//1- Numeric Enum

enum CupSize {
    Small , //0
    Medium, //1
    Large  //2
}

const myCup = CupSize.Medium; // Value is 1

enum Status {
    Pending = 10,
    InProgress, // 11
    Done        // 12
}

// 2- String Enum

enum ChaiType {
    Masala = "MASALA",
    Ginger = "GINGER",
    Lemon = "LEMON"
}

const myChai = ChaiType.Masala; // Value is "MASALA"

// 3 - const Enums

const enum SugarLevel {
    Low = 1,
    Medium,
    High
}

const mySugar = SugarLevel.Medium; 
// In the compiled JS, this becomes just: const mySugar = 2;