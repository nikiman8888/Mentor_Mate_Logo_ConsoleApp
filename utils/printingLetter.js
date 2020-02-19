const drawer = require('./drawer');

function printingLetterUpPart() {
    let row = ''
    for (let row = 0; row < halfRowsLogo; row++) {
        row =
            drawer(num - row, line) +
            drawer(num + row * 2, star) +
            drawer(num - row * 2, line) +
            drawer(num + row * 2, star) +
            drawer(num - row, line)
        console.log(row);
    }
}

function printingLetterDownPart() {
    let row = '';
    for (let row = 0; row < halfRowsLogo; row++) {
        row =
            drawer((num - 1) / 2 - row, line) +    
            drawer(num, star) +
            drawer(row * 2 + 1, line) +
            drawer(((num * 2) - 1) - row * 2, star) +
            drawer(row * 2 + 1, line) +
            drawer(num, star) +
            drawer((num - 1) / 2 - (row), line);
            console.log(row);
    }
}

module.exports = {
    printingLetterUpPart,
    printingLetterDownPart
}


