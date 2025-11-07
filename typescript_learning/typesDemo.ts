
type User = {
    name: string;
    isPaid: boolean
}

function createUser(user: User): User {
    return { name: user.name, isPaid: user.isPaid }
}

createUser({ name: "Bob", isPaid: false })

export { }