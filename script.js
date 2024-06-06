function print(message, id){
    let paragraph = document.getElementById(id);
    paragraph.innerText = message;
}

function welcomeMessage(){
    let name = document.getElementById("welcome1").value;
    let message = " Welcome " + name + " to ISTQB online Test";
    print(message, "welcomeResponse");
}

const testAnswers =  ["B", "A", "B", "C", "A", "B", "A", "C", "C", "A"];

function showAnswer(question) {
    const correctCheckAnswer = "The correct answer is: ";
    let answer = testAnswers[question - 1];
    let message = correctCheckAnswer + answer;
    print (message, "q" + question + "Response");
}


function checkAnswer(question){
    let answer = document.getElementById("options" + question).value;
    let correctAnswer = testAnswers[question - 1];
    const emptyMessage = "Please, select an option. Zero points for an empty answer";
    const incorrectAnswerMessage = "The answer is incorrect, good try! One point is deducted for an incorrect answer";
    const correctAnswerMessage = "The answer is correct, well done! You get 2 points for a correct answer";
    let message = "";
    
    if (answer === correctAnswer){
       message =  correctAnswerMessage;
        
    }
    else if  (answer === ""){
        message = emptyMessage;      
    }
    else {
        message = incorrectAnswerMessage;
    }   
   print (message, "q" + question + "CheckAnswer");
} 

