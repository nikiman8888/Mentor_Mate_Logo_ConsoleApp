const printingLogo = require('./utils/printingLogo');

//logo function call the printing logo functions
function logo(number) {

    if (number > 2 && number < 10000 && number % 2 !== 0) {

        printingLogo.printingLogoUpPart(number);
        printingLogo.printingLogoDownPart(number);

    } else {
        console.log('Please put an odd number between 2 and 10000');
    }
}

logo(10)   //<-- put your number and run(F5) VS code debug console