let yourscore= 0;  //Creating TWO variables your score and computer's score
let computerscore = 0;

// Getting the values from the HTML file
const yourscore_span = document.getElementById("Your-score");
const computerscore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s")
// creates a function for computer choices

function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);  // Math.floor is used for whole numbers Math.random is used to show random numbers between 0 and 1
    return choices[randomnumber]; // r = 0 , p =  1 ,
}

// converting letters to words
function convertword(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else return "Scissors"
}

// creating win lose and draw functions for the switch case
function win(yourchoice, computerchoice) {
    yourscore++;
    yourscore_span.innerHTML = yourscore;   // innerHTML overwrites the obtained html data
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertword(yourchoice)}  - ${convertword(computerchoice)} <br> you win.`; // `` are used so there is no need for "" and + function

}

function lose(yourchoice, computerchoice) {
    computerscore++;
    yourscore_span.innerHTML = yourscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertword(computerchoice)}  -  ${convertword(yourchoice)} <br> you lose.`;  // $ is used for the converting function

}

function draw(yourchoice, computerchoice) {
    yourscore_span.innerHTML = yourscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertword(computerchoice)}  ties  ${convertword(yourchoice)} <br> It's a draw.`;

}


function game(yourchoice) {
    const computerchoice = getcomputerchoice();

    // switch case used to identify the win lose or draw
    switch (yourchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(yourchoice, computerchoice);
            console.log("user wins");     // shows data on the console
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(yourchoice, computerchoice);
            console.log("user loses");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(yourchoice, computerchoice);
            console.log("Drawww");
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        console.log("hey clicked rock");
        game("r");
    })
    paper_div.addEventListener('click', function () {
        console.log("hey clicked paper");
        game("p");
    })
    scissor_div.addEventListener('click', function () {
        console.log("hey clicked scissor");
        game("s");
    })

}

main();