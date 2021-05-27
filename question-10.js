const findMinPath = (grid) => {
    var a = grid.length;
    var b = grid[0].length;
    var newPath = new Array(a);

    for (let i = 0; i < a; i++){
        newPath[i] = new Array(b);
    }
    newPath[0][0] = grid[0][0];

    for (let i = 1; i < a; i++){
        newPath[i][0] = newPath[i - 1][0] + grid[i][0];
    }

    for (let i = 1; i < b; i++){
        newPath[0][i] = newPath[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < a; i++){
        for( let j = 1; j < b; j++){
            newPath[i][j] = 
            Math.min(newPath[i - 1][j], newPath[i][j -1]) + grid[i][j]
        }
    }

    return newPath[a - 1][b - 1];
}


console.log(findMinPath([ [1,3,1],[1,5,1],[4,2,1] ])); //Output: 7
console.log(findMinPath([[1,2,3],[4,5,6]])); //Output: 12