 //--> Basic inference

// TypeScript infers that 'drink' is a string

let drink = "chai";

// This is valid because we are assigning another string
drink = "lemon tea";

// ERROR: Type 'number' is not assignable to type 'string'
// drink = 5;

// --> Advanced Interference

// consistent types

// If > 0.5, returns 10 (number), else returns 5 (number)
let cups = Math.random() > 0.5 ? 10 : 5;

// TypeScript hovers: let cups: number


// Mixed types

// If > 0.5, returns 10 (number), else returns "5" (string)
let cup = Math.random() > 0.5 ? 10 : "5";

// TypeScript hovers: let cup: string | number
// It infers that 'cup' can be EITHER a string OR a number

 
//--> Type Annotations

// String Annotation
// We explicitly tell TS that this MUST be a string

let chaiFlavor: string = "masala";

// Valid
chaiFlavor = "ginger";

// Invalid
// chaiFlavor = 2; // Error


// Number annotation

let chaiOrder: number = 5;

// Valid
chaiOrder = 10;

// Invalid
// chaiOrder = "ten"; // Error


// Boolean annotation

let isPaid: boolean = false;

// Valid
isPaid = true;


