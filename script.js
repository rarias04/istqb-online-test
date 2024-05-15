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
    let answer = "B"
    let message = "The correct answer is " + answer;
    print(message, "q1Response")
}