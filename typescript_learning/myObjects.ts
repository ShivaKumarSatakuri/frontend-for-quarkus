const user = {
    name: "Alice",
    email: "alice.alice@alice.com",
    isActive: true
}

function createUser(user: { name: string, isPaid: boolean }) { }

let newUser = { name: "Bob", isPaid: false, email: "bob.r@gmail.com" }

createUser(newUser)

export {}