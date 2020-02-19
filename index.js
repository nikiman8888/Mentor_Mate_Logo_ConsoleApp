
const printingLetter = require('./utils/printingLetter');

function drawLogo(number) {

    printingLetter.printingLetterUpPart(number)
    printingLetter.printingLetterDownPart(number);
    printingLetter.printingLetterUpPart(number)
    printingLetter.printingLetterDownPart(number);
    
}

drawLogo(5)