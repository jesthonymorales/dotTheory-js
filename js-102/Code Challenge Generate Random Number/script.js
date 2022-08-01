const clientEntry = prompt( 'Please enter a number' );

let clientNumber = parseInt( clientEntry );

if (clientNumber) {
    let clientRandom = Math.floor( Math.random() * clientNumber ) + 1;
    console.log( `${clientRandom} is a random number between 1 and ${clientNumber}` );
} else {
    console.log("Invalid input, please try again!");
}