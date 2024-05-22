function print(message, id){
    let paragraph = document.getElementById(id);
    paragraph.innerText = message;
}

function welcomeMessage(){
    let name = document.getElementById("welcome1").value;
    let message = " Welcome " + name + " to ISTQB online Test";
    print(message, "welcomeResponse");
}

function showAnswer(){
    let answer = "B";
    let message = "The correct answer is " + answer;
    print(message, "q1Response")
}

function checkAnswer(){
    let answer = document.getElementById("options1").value;
    let message = "";
    if (answer ==="B"){
        message = "The answer is correct, well done! You get 2 points for a correct answer";
    }
    else if (answer === "A" || answer === "C") {
        message = "The answer is incorrect, good try! One point is deducted for an incorrect answer";
    }
    else{
        message = "Please, select an option. Zero points for an empty answer";
    }
    print(message, "q1CheckAnswer");

}