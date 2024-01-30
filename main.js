console.log("//////////////////////////////////");
console.log("Pyramid Algo\n");

var decode = function(message_file) {
    const fs = require('fs');
    var outputString = "";
    let textInput = "";

    // Retrieve ddata from text file as a string
    var data = fs.readFileSync(message_file);
    textInput = data.toString();

    // Count the number of lines
    let numLines = 0;
    for (let i = 0; i<textInput.length; i++) {
        if (textInput === "\n") {
            numLines++;
        }
    }
    numLines++;

    // Create word list array using the number of lines
    let wordList = new Array(numLines);
    let newWord = "";
    let wordListIndex = 0;
    for (let i=0; i<textInput.length; i++) {
        let curChar = textInput[i];

        // Endline found
        if (curChar === '\n') {
            wordList[wordListIndex] = newWord.trim();
            newWord = "";
        } else {
            newWord += curChar;
            // Space Found
            if (curChar === ' ') {
                wordListIndex = parseInt(newWord) - 1;
                newWord = "";
            }
        }
    }
    wordList[wordListIndex] = newWord;

    // Having constructed the pyramid as an array retrieve the last word in each row of pyramid
    let lineCount = 1;
    let curIdx = 0;
    let column = 1;
    while (curIdx < wordList.length) {
        // If the word row and Coloun number are identical, this is the last word in this row for the pyramid
        if (lineCount === column) {
            let curWord = wordList[curIdx];
            if (outputString !== "") {
                outputString += " ";
            }
            outputString += curWord;
            // console.log("current word:" + curWord);
            lineCount++;
            column = 1;
            curIdx++;
        } else {
            curIdx++;
            column++;
        }
    }
    return outputString;
}

console.log(decode("input.txt"));
console.log(decode("coding_qual_input.txt"));