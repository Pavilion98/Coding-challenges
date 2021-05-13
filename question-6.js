const averageBooks = (numberOfBoxes, stages) => {
    // do your magic here..
    var stagesData = stages.map( stage => singleStageBookNumber(numberOfBoxes, stage))

    var averageBooksArray = stagesData.reduce( (accumulator, currentValue) => 
        currentValue.map( (a, b) => (accumulator[b] || 0) + a), []);

    let average = booksTotal(averageBooksArray);

    return average;
}




const booksTotal = (array) => {
    let sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
    let result = sum / array.length;

    return result;
}




const singleStageBookNumber = (numberOfBoxes, stage) => {
    var total = Array(numberOfBoxes).fill(0);
    let start = stage[0] - 1;
    let end = stage[1] - 1;
    let addedBooks = stage[2];
    total.fill(addedBooks, start, end + 1);

    return total;
}





console.log( averageBooks(3, [[1, 2, 3], [1, 3, 5]]) ); // output: 7