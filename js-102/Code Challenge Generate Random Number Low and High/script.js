const clientEntryLow = prompt( 'Please enter a lower number.' );
const clientEntryHigh = prompt( 'Please enter a higher number.' );

let clientNumberLow = parseInt( clientEntryLow );
let clientNumberHigh = parseInt( clientEntryHigh );

if (clientEntryLow && clientEntryHigh) {
    if (clientNumberHigh > clientEntryLow) {
        let clientRandom = Math.floor( Math.random() * clientNumberHigh ) + clientNumberLow;
        console.log( `${clientRandom} is a random number between ${clientNumberLow} and ${clientNumberHigh}` );
    } else {
        console.log("Invalid input range, please try again!");    
    }
    
} else {
    console.log("Please input a valid numbers, please try again!");
}
