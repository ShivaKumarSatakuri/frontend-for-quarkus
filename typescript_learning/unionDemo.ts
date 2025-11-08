let score: number | string = 33;    // union type, you can assign number or string
score = 44;
score = "55";

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let shiva: User | Admin = { name: "Shiva", id: 1 };

shiva = { username: "adminShiva", id: 1 };

function getDbId(id: number | string) {
    if(typeof id === "string") {
        console.log(id.toLowerCase());
    } else {
        console.log(id);
    }
}

// array of union types

// can be either string array or number array
let temp: string[] | number[] = [1,  3];    

// array of elements which can be string or number
let arr: (string | number)[] = [1, "2", 3, "4"]; 

// literal types. You can assign only the specified values
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew";  // error


console.log(temp)
console.log(seatAllotment);
console.log(arr);



export { }