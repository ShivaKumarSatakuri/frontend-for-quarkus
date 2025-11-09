interface UserInterface {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,   // optional property
    startTrial: () => string,
    getCoupon: (couponname: string, value: number) => number
}

interface Admin extends UserInterface {
    role: "admin" | "ta" | "learner"
}

const shiva: UserInterface = {
    dbId: 1234,
    email: "shiva.s@gmail.com",
    userId: 1,
    startTrial: () => { return "Trial started" },
    getCoupon: (couponname: string, value: number) => {
        return 10
    }
}

//shiva.dbId = 5678;  // error: cannot assign to 'dbId' because it is a read-only property
shiva.googleId = "google-1234"; // okay: optional property can be added later
shiva.email = "sss@gmail.com"; // okay: email is not readonly