//creating a class in typescript
class DemoClass {

    //defining properties of the class
    public email: string;
    name: string;
    private city: string = "Hyderabad";
    readonly dob: string = "01-01-1990";

    //constructor of the class
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

//creating an object of the class
const shiva = new DemoClass("shiva", "Shiva Kumar");

//modifying the city property of the object
//shiva.city = "Bangalore";