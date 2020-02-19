const drawer = require('./utils/drawer');

function drawLogo(num) {

    let currentRow = '';
    const line = '-';
    const star = '*';
    const halfRowsLogo = (num + 1) / 2;

    // here we are searching the first(up) part of the logo
    for (let row = 0; row < halfRowsLogo; row++) {
        currentRow =
            drawer(num - row, line) +        // start first M letter
            drawer(num + row * 2, star) +
            drawer(num - row * 2, line) +
            drawer(num + row * 2, star) +
            drawer(num - row, line) +
            drawer(num - row, line) +        //start second M letter
            drawer(num + row * 2, star) +
            drawer(num - row * 2, line) +
            drawer(num + row * 2, star) +
            drawer(num - row, line)

        console.log(currentRow);
        currentRow = '';
    }
    //here we searching the second(down) part of the logo
    for (let row = 0; row < halfRowsLogo; row++) {
        currentRow =
            drawer((num - 1) / 2 - row, line) +     // start first M letter
            drawer(num, star) +
            drawer(row * 2 + 1, line) +
            drawer(((num * 2) - 1) - row * 2, star) +
            drawer(row * 2 + 1, line) +
            drawer(num, star) +
            drawer((num - 1) / 2 - (row), line) +
            drawer((num - 1) / 2 - row, line) +     //start second M letter
            drawer(num, star) +
            drawer(row * 2 + 1, line) +
            drawer(((num * 2) - 1) - row * 2, star) +
            drawer(row * 2 + 1, line) +
            drawer(num, star) +
            drawer((num - 1) / 2 - (row), line);

        console.log(currentRow);
        currentRow = '';
    }
}

drawLogo(5)