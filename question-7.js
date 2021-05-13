const reverseWords = (string) => {
    let reverse = "";
    let word = "";
    let array = [];

    for (let i = 0; i < string.length; i++) {
        let character = string[i];
        word += character;

        if (character == " " || i == (string.length - 1)) {
            word = word.trim();
            array.push(word);
            word = "";
        }
    }

    while ( otherWord = array.pop()) {
        reverse += otherWord + " ";
    }

    return reverse;
}


console.log(reverseWords("How are you?"));
console.log(reverseWords("Did you eat today"));
console.log(reverseWords("How old are you?"));
