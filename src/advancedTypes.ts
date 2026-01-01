// Scenario-1 --> API Responses

let response: any = "Chai and Code";

let totalLength = (response as string).length;

console.log(totalLength);

// Scenario 2: Parsing JSON (The "Trust Me" Case)

interface Book {
    name: string;
    author : string;
}

const bookJSON = '{"name" : "One Thing", "author": "Gary Keller"}';

const myBook = JSON.parse(bookJSON) as Book;

console.log(myBook.name);

// Scenario 3 : Working with DOM Elements

// const input = document.getElementById("user-input") as HTMLInputElement
// console.log(input.value);

// any vs unknown

// any - Disables type checking completely. You can do anything, even if it causes a crash

// let value: any = 10;
// value = "Chai";
// value.toUpperCase();
// value = 20;
// value.toUpperCase();

// Solution 

let secureValue: unknown = "Chai";

//secureValue.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof secureValue === "string") {
    console.log(secureValue.toUpperCase()); // Now it's safe!
}


// The never Type 

// Use Case 1: Infinite Loops & Errors

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Looping forever
    }

}

// Use Case 2: Exhaustive Checks
type Role = "admin" | "user" | "guest";

function handleRole(role: Role){
    switch (role){
        case "admin":
            console.log("Handling admin role");
            break;
        case "user":
            console.log("Handling user role");
            break;
        
        default:
             // This variable expects type 'never'. 
            // If 'role' is 'super-admin' (which wasn't handled above), 
            // it enters here, but 'super-admin' cannot be assigned to 'never'.
            // TS ERROR: Type 'string' is not assignable to type 'never'.
            //const _defaultForCheck: never = role;
            //return _defaultForCheck;


    }
}

// Bonus: Handling Errors in Try-Catch

try {
    throw new Error('Something went wrong!');
} catch (error){
    // Bad practice: assuming error.message exists immediately
    // console.log(error.message); 

    // Good practice: Safety check
    if (error instanceof Error) {
        console.log("Caught Error:", error.message);

    } else {
        console.log("Unknown error caught");
    }
}