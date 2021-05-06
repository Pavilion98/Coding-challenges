const calculateSeatsBookingPercentage = (firstRowSeatsNumber, bookedSeats) => {
    // do your magic here..
    let message = "";
    var totalSeats = calculateTotalSeats(firstRowSeatsNumber);
    var percentage = ( bookedSeats * 100) / totalSeats;

    return message = "Percentage of seats booking is " + Math.floor(percentage) + "%";
    
}

const calculateTotalSeats = (num) => {
    for( let i = num - 1; i >= 1; i--) {
        num += i;
    }
    return num;
}

console.log( calculateSeatsBookingPercentage(7, 7) ); // output: 25%
console.log( calculateSeatsBookingPercentage(10, 20) ); // output: 36%
console.log( calculateSeatsBookingPercentage(15, 10) ); // output: 8%