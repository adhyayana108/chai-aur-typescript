
// Union Types (|) allow a variable to hold more than one type of value

let score: number | string = 33;

score = 44;      // Valid
score = "55";    // Valid
// score = true; // Error: boolean is not assignable to string | number

// Real World Use Case

//example 1: 

// Define specific allowed values
let apiRequestStatus: "pending" | "success" | "error" = "pending";

// Valid assignment
apiRequestStatus = "success"; 

// Invalid assignment (protects against typos or wrong values)
// apiRequestStatus = "done"; // Error: Type '"done"' is not assignable to type

//example 2:

let airlineSeat: "aisle" | "window" | "middle" = "middle";

// Valid
airlineSeat = "window";

// Invalid
// airlineSeat = "pilot"; // Error


// Any Type

// Problematic Code

// const orders: number[] = [12, 20, 28, 42];
// let currentOrder: string; // Issue: We declare it but don't give it a value

// for (let order of orders) {
//     if (order === 28) {
//         currentOrder = "found"; // We assign it here
//         break;
//     }
// }

// Error: Variable 'currentOrder' is used before being assigned.
// TypeScript is worried: What if the loop finishes and '28' was never found?
// console.log(currentOrder); 


// Coorect Fix using 'any'

const orders: number[] = [12, 20, 28, 42];

// We explicitly say: This will be a number, OR it might be undefined.
let currentOrder: number | undefined; 

for (let order of orders) {
    if (order === 28) {
        currentOrder = order;
        break;
    }
}

// Now TypeScript is happy because we acknowledged it might be undefined.
console.log(currentOrder); 





