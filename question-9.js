const printOneRowWords = (words) => {
    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    result = [];

    for (let row of rows) {
        for( let word of words){
            let rowWord = true;
            for (let ch of [...word]){
                if (!row.includes(ch.toLowerCase())){
                    rowWord = false;
                    break;
                }
            }
            if (rowWord){
                result.push(word);
            }
        }
    }
    return result;
};



console.log(printOneRowWords( ["Hello","Alaska","Dad","Peace", "You"])); //Output:["Alaska","Dad", "You"]