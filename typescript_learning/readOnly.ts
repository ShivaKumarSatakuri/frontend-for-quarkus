
type User = {
    readonly _id: string
    name: string
    isPaid: boolean
    creditCardDetails?: string  // optional property
}

let myUser: User = {
    _id: "1234",
    name: "John",
    isPaid: false
}

//myUser._id = "5678"  // Error: Cannot assign to '_id' because it is a read-only property
myUser.name = "Doe"  // Allowed