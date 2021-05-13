const findCommonLettersInWords = (words) => {
    // do your magic here..
    const [first, ...rest] = words.sort((a, b) => (a.length - b.length));
    const duplicates = [];

    [...first].forEach(e => {
        let duplicate = true;
        for (let x = 0, len = rest.length; x < len; x++) {
            let word = rest[x];
            const i = word.indexOf(e);
            if (i !== -1) {
                rest[x] = word.slice(0, i) + word.slice(i + 1);
            } 
            else {
                duplicate = false;
                break;
            }
        }
        if (duplicate) {
            duplicates.push(e);
        }
    });

    return duplicates;
}








console.log( findCommonLettersInWords(["bat", "cat", "hat"]) ); // output: ['a', 't']
console.log( findCommonLettersInWords(["Saleem", "Soda", "Khaled"]) ); // output: ['a']
console.log( findCommonLettersInWords(["Pepsi", "Kitkat", "Oreo"]) ); // output: []