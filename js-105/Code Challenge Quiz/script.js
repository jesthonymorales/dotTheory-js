const questions = [
    ['Who is the current Philippine President (Initials)?', 'BBM'],
    ['What is the acronym for Social Security Service?', 'SSS'],
    ['What year did Ferdinand Magellan die?', '1521'],
    ['Who is the singer of the song To The Bone?', 'PAMUNGKAS'],
]

let correctAnswers = [];
let wrongAnswers = [];
let clientAns = "";
for( let i = 0; i < questions.length; i++) {
    clientAns = prompt(questions[i][0]);

    if (clientAns.toUpperCase() === questions[i][1]) {
        correctAnswers.push(questions[i][0]);
    } else {
        wrongAnswers.push(questions[i][0]);
    }
    
}

let liCorrect = "<ul>";

if (correctAnswers.length > 0) {
    for (let j = 0; j < correctAnswers.length; j++) {
        liCorrect += `<li>${correctAnswers[j]}</li>`;
    }
}
liCorrect += "</ul>";

let liWrong = "<ul>";
if (wrongAnswers.length > 0) {
    for (let j = 0; j < wrongAnswers.length; j++) {
        liWrong += `<li>${wrongAnswers[j]}</li>`;
    }
}

liWrong += "</ul>";

document.querySelector('main').innerHTML = `You got ${correctAnswers.length} question(s) correct. 
    <br /> <br /> 
    <h1>You got this questions right:</h1>
    ${liCorrect}

    <br /><br />
    <h1>You got this questions wrong:</h1>
    ${liWrong}

    
    `;