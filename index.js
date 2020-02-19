const printingLogo = require('./utils/printingLogo');

function logo(number) {

    if (number > 2 && number < 10000 && number % 2 !== 0) {

        printingLogo.printingLogoUpPart(number);
        printingLogo.printingLogoDownPart(number);

    } else {
        console.log('Please put an odd number between 2 and 10000');
    }
}

logo(10000)   //<-- put your number