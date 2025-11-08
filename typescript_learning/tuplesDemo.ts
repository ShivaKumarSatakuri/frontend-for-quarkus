// Tuple type to represent a user with name, age, and isActive status
let user: [string, number, boolean]

user = ['John', 25, true]

type User = [number, string]

const newUser: User = [1, 'Alice']

// Modifying tuple elements
newUser[0] = 2
newUser[1] = 'Bob'

export { }