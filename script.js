function print(message, id){
    let paragraph = document.getElementById(id);
    paragraph.innerText = message;
}

function welcomeMessage(){
    let name = document.getElementById("welcome1").value;
    let message = " Welcome " + name + " to ISTQB online Test";
    print(message, "welcomeResponse");
}

function showAnswer1(){
    let answer = "B";
    let message = "The correct answer is " + answer;
    print(message, "q1Response")
}

function checkAnswer1(){
    let answer = document.getElementById("options1").value;
    let message = "";
    if (answer ==="B"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "A" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q1CheckAnswer");

}

function seeScore1(){
    let answer = document.getElementById("options1").value;
    let message = "";
    if (answer ==="B"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q1seeScore");

}

function showAnswer2(){
    let answer = "A";
    let message = "The correct answer is " + answer;
    print(message, "q2Response")
}

function checkAnswer2(){
    let answer = document.getElementById("options2").value;
    let message = "";
    if (answer ==="A"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "B" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q2CheckAnswer");

}

function seeScore2(){
    let answer = document.getElementById("options2").value;
    let message = "";
    if (answer ==="A"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "B" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q2seeScore");

}

function showAnswer3(){
    let answer = "B";
    let message = "The correct answer is " + answer;
    print(message, "q3Response")
}

function checkAnswer3(){
    let answer = document.getElementById("options3").value;
    let message = "";
    if (answer ==="B"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "A" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q3CheckAnswer");

}

function seeScore3(){
    let answer = document.getElementById("options3").value;
    let message = "";
    if (answer ==="B"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q3seeScore");

}

function showAnswer4(){
    let answer = "C";
    let message = "The correct answer is " + answer;
    print(message, "q4Response")
}

function checkAnswer4(){
    let answer = document.getElementById("options4").value;
    let message = "";
    if (answer ==="C"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "A" || answer === "B") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q4CheckAnswer");

}

function seeScore4(){
    let answer = document.getElementById("options4").value;
    let message = "";
    if (answer ==="C"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "B") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q4seeScore");

}

function showAnswer5(){
    let answer = "A";
    let message = "The correct answer is " + answer;
    print(message, "q5Response")
}

function checkAnswer5(){
    let answer = document.getElementById("options5").value;
    let message = "";
    if (answer ==="A"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "B" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q5CheckAnswer");

}

function seeScore5(){
    let answer = document.getElementById("options5").value;
    let message = "";
    if (answer ==="A"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "B" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q5seeScore");

}

function showAnswer6(){
    let answer = "B";
    let message = "The correct answer is " + answer;
    print(message, "q6Response")
}

function checkAnswer6(){
    let answer = document.getElementById("options6").value;
    let message = "";
    if (answer ==="B"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "A" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q6CheckAnswer");

}

function seeScore6(){
    let answer = document.getElementById("options6").value;
    let message = "";
    if (answer ==="B"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q6seeScore");

}


function showAnswer7(){
    let answer = "A";
    let message = "The correct answer is " + answer;
    print(message, "q7Response")
}

function checkAnswer7(){
    let answer = document.getElementById("options7").value;
    let message = "";
    if (answer ==="A"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "B" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q7CheckAnswer");

}

function seeScore7(){
    let answer = document.getElementById("options7").value;
    let message = "";
    if (answer ==="A"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "B" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q7seeScore");

}

function showAnswer8(){
    let answer = "C";
    let message = "The correct answer is " + answer;
    print(message, "q8Response")
}

function checkAnswer8(){
    let answer = document.getElementById("options8").value;
    let message = "";
    if (answer ==="C"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "A" || answer === "B") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q8CheckAnswer");

}

function seeScore8(){
    let answer = document.getElementById("options8").value;
    let message = "";
    if (answer ==="C"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "B") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q8seeScore");

}

function showAnswer9(){
    let answer = "C";
    let message = "The correct answer is " + answer;
    print(message, "q9Response")
}

function checkAnswer9(){
    let answer = document.getElementById("options9").value;
    let message = "";
    if (answer ==="C"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "A" || answer === "B") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q9CheckAnswer");

}

function seeScore9(){
    let answer = document.getElementById("options9").value;
    let message = "";
    if (answer ==="C"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "B") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q9seeScore");

}

function showAnswer10(){
    let answer = "A";
    let message = "The correct answer is " + answer;
    print(message, "q10Response")
}

function checkAnswer10(){
    let answer = document.getElementById("options10").value;
    let message = "";
    if (answer ==="A"){
        message = "The answer is correct, well done!";
    }
    else if (answer === "B" || answer === "C") {
        message = "The answer is incorrect, good try!";
    }
    else{
        message = "Please, select an option";
    }
    print(message, "q10CheckAnswer");

}

function seeScore10(){
    let answer = document.getElementById("options10").value;
    let message = "";
    if (answer ==="A"){
        message = "You get 2 points for a correct answer";
    }
    else if (answer === "B" || answer === "C") {
        message = "One point is deducted for an incorrect answer";
    }
    else{
        message = "Zero points for an empty answer";
    }
    print(message, "q10seeScore");

}