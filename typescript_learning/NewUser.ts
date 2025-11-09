class NewUser {
    readonly dob: string = "01-01-1990";

    //constructor of the class
    constructor(public email: string, private name: string, private city: string = "Hyderabad") { }
}

//creating an object of the class
const temp = new NewUser("shiva", "Shiva Kumar");

//modifying the city property of the object
temp.email = "shiva.satakuri@gmail.com";