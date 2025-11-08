// Defining an enum for seat choices
enum SeatChoice {
    AISLE = 'Aisle',
    MIDDLE = 'Middle',
    WINDOW = 'Window'
}

const mySeat: SeatChoice = SeatChoice.WINDOW;
console.log(`My seat choice is: ${mySeat}`); // Output: My seat choice is: Window