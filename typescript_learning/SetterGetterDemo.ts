
class SetterGetterDemo {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    //setter for name
    set setName(name: string) {
        this.name = name;
    }

    //getter for name
    get getName(): string {
        return this.name;
    }

    //setter for age
    set setAge(age: number) {
        this.age = age;
    }

    //getter for age
    get getAge(): number {
        return this.age;
    }
}