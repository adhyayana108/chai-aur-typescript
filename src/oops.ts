//Basic Class Definition

class Chai {
    // Properties must be declared first
    flavor: string;
    price: number;

    constructor(flavor: string, price: number) {
        this.flavor = flavor;
        this.price = price;
    }
}

// Creating an instance
const masalaChai = new Chai("Masala", 20);
// masalaChai.flavor is accessible

// Constructor Shorthand (Best Practice)

class ShortChai {
    // No need to declare properties above
    constructor(
        public flavor: string, 
        public price: number
    ) {
        // No need for 'this.flavor = flavor'
    }
}

//Access Modifiers

// 1- Public (Default)

// Accessible anywhere (inside the class, instances, and subclasses).
class PublicChai {
    constructor(
        public flavor: string,
        public price: number
    ) {}
}

const publicChai = new PublicChai("Ginger", 25);
console.log(publicChai.flavor); // Accessible

// 2- Private

// Accessible only within the class.

class Tea {
    public type: string;
    private secretIngredient: string; // Only accessible inside 'Tea'

    constructor(type: string, secret: string) {
        this.type = type;
        this.secretIngredient = secret;
    }

    revealSecret() {
        return this.secretIngredient; // Allowed
    }
}

const myTea = new Tea("Green", "Mint");
// console.log(myTea.secretIngredient); // Error: Property is private
console.log(myTea.revealSecret()); // Allowed via method

// 3- Protected

// Accessible within the class and its subclasses.
class Shop {
    protected shopName: string = "Chai Corner";
}

class Branch extends Shop {
    getShopName() {
        return this.shopName; //  Allowed (accessible in subclass)
    }
}

const myBranch = new Branch();
// console.log(myBranch.shopName); // Error: Property is protected


// 

class Wallet {
    #balance: number; // Native JS private field

    constructor(initial: number) {
        this.#balance = initial;
    }
}


//Getters and Setters

class ModernChai {
    private _sugar: number = 0; 

    // Getter
    get sugar(): number {
        return this._sugar;
    }

    // Setter
    set sugar(value: number) {
        if (value > 5) {
            throw new Error("Too much sugar! Health risk.");
        }
        this._sugar = value;
    }
}

const cup = new ModernChai();
cup.sugar = 3; // Uses setter
console.log(cup.sugar); // Uses getter
// cup.sugar = 10; // Throws Error

//4. Static Members

class ChaiCafe {
    static shopName: string = "ChaiCode Cafe";

    constructor(public flavor: string) {}
}

const c1 = new ChaiCafe("Masala");
// console.log(c1.shopName); // Error: Property does not exist on type 'ChaiCafe'.

// Correct Access:
console.log(ChaiCafe.shopName); // Accessed via Class Name


// 5. Abstract Classes

abstract class Drink {
    // Abstract method: No implementation here, children MUST implement it
    abstract make(): void;

    // Concrete method: Has implementation, children inherit it
    display(): void {
        console.log("Preparing drink...");
    }
}

class MyChai extends Drink {
    make(): void {
        console.log("Brewing Chai...");
    }
}

// const d = new Drink(); // Error: Cannot create an instance of an abstract class.
const tea = new MyChai(); // Valid
tea.make();

// 6. Composition (vs Inheritance)

//Example: A ChaiMaker has a Heater

class Heater {
    heat() {
        console.log("Heating up...");
    }
}

class ChaiMaker {
    private heater: Heater;

    constructor() {
        this.heater = new Heater(); // Initializing the component class
    }

    make() {
        this.heater.heat(); // Using the composed object
        console.log("Chai is ready!");
    }
}

const machine = new ChaiMaker();
machine.make();
