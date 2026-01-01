// Interfaces

// Basic Interface Definition

interface Chai {
    flavor: string;
    price: number;
    milk?: boolean; // Optional property (denoted by ?)
}

const masalaChai: Chai = {
    flavor: "Masala",
    price: 30,
    milk: true // valid
};

const blackTea: Chai = {
    flavor: "Black Tea",
    price: 20
    // milk is optional, so we can skip it
};

//Readonly Properties

interface User {
    readonly id: number;
    name: string;
}

const hitesh: User = {
    id: 1,
    name: "Hitesh"
};

hitesh.name = "Hitesh Choudhary"; // Allowed
// hitesh.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

//Methods

interface TeaMachine {
    start(): void;
    stop(): void;
}

const myMachine: TeaMachine = {
    start: () => {
        console.log("Tea machine started");

    },
    stop: () => {
        console.log("Tea Machine stopped")
    }
};


// Interface Merging (Declaration Merging)

interface Person {
    name: string;
}

interface Person {
    age: number
}

const dev: Person = {
    name: "Hitesh",
    age: 25
};

//Extending Interfaces

interface BasicInfo {
    name: string;

}

interface Address {
    city : string;
}

interface FullProfile extends BasicInfo , Address {
    role: string;
}

const user: FullProfile = {
    name: "Hitesh",
    city: "Jaipur",
    role: "Admin"
};



// Generics 

// The Problem 

// function wrapInArray(item: any) {
//     return [item];
// }

//Generic Functions

function wrapInArray<T>(item: T): T[] {
    return [item]
}

const stringArray = wrapInArray("Masala");
const numberArray = wrapInArray(42);

// You can also be explicit:
const objArray = wrapInArray<{name: string}>({ name: "Chai" });

// Multiple Generics

function pair<T, U>(itemOne: T , itemTwo: U): [T, U]{
    return [itemOne , itemTwo];
}

const myPair = pair("Masala" , 20);
// T is string, U is number. Returns [string, number]

// Generic Interfaces

interface Box<T> {
    content: T;
}

// A box containing a string
const textContainer: Box<string> = {
    content: "Hello World"
};

// A box containing a number
const numberContainer: Box<number> = {
    content: 100
};


// Real World Cases

interface ApiResponse<Data>{
    status: number;
    success: boolean;
    data: Data;
}


// Specific Data Types
interface UserData {
    name: string;
    email: string;
}

interface ProductData {
    id: number;
    price: number;
}

// Response 1: User Data
const userResponse: ApiResponse<UserData> = {
    status: 200,
    success: true,
    data: {
        name: "Hitesh",
        email: "hitesh@chai.com"
    }
};

// Response 2: Product Data
const productResponse: ApiResponse<ProductData> = {
    status: 200,
    success: true,
    data: {
        id: 101,
        price: 500
    }
};







