const clientEntryLow = prompt( 'Please enter a lower number.' );
const clientEntryHigh = prompt( 'Please enter a higher number.' );

const randomNumber = (clientEntryLow, clientEntryHigh) => {
    if (isNaN(clientEntryLow) && isNaN(clientEntryHigh)) {
        if (clientEntryHigh > clientEntryLow) {
            let clientRandom = Math.floor( Math.random() * (clientEntryHigh - clientEntryLow) + 1 ) + clientEntryLow;
            console.log( `${clientRandom} is a random number between ${clientEntryLow} and ${clientEntryHigh}` );
        } else {
            console.log("Invalid input range, please try again!");    
        }
        
    } else {
        console.log("Please input a valid numbers, please try again!");
    }
}

let low = parseInt( clientEntryLow );
let high = parseInt( clientEntryHigh);

randomNumber(low, high);