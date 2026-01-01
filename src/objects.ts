// Basic Object Inference

const chai = {
    name: "Masala Chai",
    price: 20, 
    isHot: true
    
};

// TypeScript infers the type as:
// {
//    name: string;
//    price: number;
//    isHot: boolean;
// }

// Explicit Type Definition

// We define the "shape" of the object explicitly

let tea: { name: string; price: number; isHot: boolean} = {
    name: "Ginger Tea" ,
    price:25,
    isHot: true
};

// If you try to add a random property, TS will complain:
// tea.origin = "India"; // Error: Property 'origin' does not exist.


//Type Aliases & Nested Arrays

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 30,
    ingredients: ["ginger" , "tea leaves" , "milik"]

};

//Structural Typing (Duck Typing)

type Cup = {
    size: string;
};

function drinkCoffee(cup: Cup){
    console.log(`Drinking from ${cup.size} cup`);
}

const bigCup = {
    size: "500ml" , 
    material: "steel" // Extra property not in 'Cup'
};

//This works! 
// 'bigCup' has 'size', so it satisfies the 'Cup' contract.
// TypeScript ignores the extra 'material' property in this context.
drinkCoffee(bigCup);

// Utility Types 

//Partial<Type>

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
};

function updateChai(updates: Partial<Chai>){
    console.log("Updating with: " , updates);
}
// Valid: We only passed 'price'
updateChai({price: 25}); 

//Required<Type>

type ChaiOrder = {
    name: string;
    quantity?: number; // Optional
};

function placeOrder(order: Required<ChaiOrder>){
    console.log(`Ordered ${order.quantity} of ${order.name}`);

}

// placeOrder({ name: "Masala Chai" }); // Error: Property 'quantity' is missing
placeOrder({name: "Masala Chai" , quantity: 2}); //Valid

//Pick<Type, Keys>

type FullTeaProfile = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};

type BasicTeaInfo = Pick<FullTeaProfile, "name" | "price">;

const teaSummary: BasicTeaInfo = {
    name: "Lemon Tea",
    price: 15
    // isHot: true // Error: This property was not picked

};

//Omit<Type, Keys>

type TeaDetails = {
    name: string;
    price: number;
    secretIngredient: string; // We want to hide this
};

// Create a public view that removes 'secretIngredient'
type PublicTea = Omit<TeaDetails, "secretIngredient">;

const publicMenu: PublicTea = {
    name: "Special Chai",
    price: 50
    // secretIngredient: "Masala" // Error: This property is omitted
};

