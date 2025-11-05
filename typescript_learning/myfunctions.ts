function adddTwo(num: number): number{
    return num + 2;
}

function getUpper(val: string): string{
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

// Arrow function (assigning default value of false to isPaid parameter)
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

const getHello = (s: string): string => { return "" }

adddTwo(5)
getUpper("hello")
signUpUser("shiva","shiva.satakuri@adp.com",false)
loginUser("shiva","shiva.satakuri@adp.com",false)


// Declaring arrays/lists
const heros = ["thor", "spiderman", "ironman"]
let actors = ["shiva", "satakuri", "adp"]
var directors = ["samuell", "nolan", "max"]

//looping through array
heros.map((hero): string => {
    return `hero is ${hero}`
})


function fail(msg: string): never {
    throw new Error(msg)
}

export {}