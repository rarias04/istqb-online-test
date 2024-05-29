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
const tagsNames = ["q1Response", "q2Response", "q3Response", "q4Response", "q5Response", "q6Response", "q7Response", "q8Response", "q9Response", "q10Response"];
const tagsCheckAnswers = ["q1CheckAnswer", "q2CheckAnswer","q3CheckAnswer", "q4CheckAnswer", "q5CheckAnswer", "q6CheckAnswer", "q7CheckAnswer","q8CheckAnswer", "q9CheckAnswer", "q10CheckAnswer"];
const correctCheckAnswer = "The correct answer is ";
const emptyMessage = "Please, select an option. Zero points for an empty answer";
const incorrectAnswerMessage = "The answer is incorrect, good try! One point is deducted for an incorrect answer";
const correctAnswerMessage = "The answer is correct, well done! You get 2 points for a correct answer";


function showAnswer() {

    let answers = new Array(10);
    let answer1= document.getElementById("options1").value;
    answers[0] = answer1;
    let answer2 = document.getElementById("options2").value;
    answers[1] = answer2;
    let answer3 = document.getElementById("options3").value;
    answers[2] = answer3;
    let answer4 = document.getElementById("options4").value;
    answers[3] = answer4;
    let answer5 = document.getElementById("options5").value;
    answers[4] = answer5;
    let answer6 = document.getElementById("options6").value;
    answers[5] = answer6;
    let answer7 = document.getElementById("options7").value;
    answers[6] = answer7;
    let answer8 = document.getElementById("options8").value;
    answers[7] = answer8;
    let answer9 = document.getElementById("options9").value;
    answers [8] = answer9;
    let answer10 = document.getElementById("options10").value;
    answers[9] = answer10
    
    if (answers[0] !== ""){
            print(correctCheckAnswer + testAnswers[0], tagsNames[0]);
        }
    
    if (answers[1] !== ""){
            print(correctCheckAnswer + testAnswers[1], tagsNames[1]);
        }
    
    if (answers[2] !== ""){
            print(correctCheckAnswer + testAnswers[2], tagsNames[2]);
    }
    if (answers[3] !== ""){
            print(correctCheckAnswer + testAnswers[3], tagsNames[3]);
    }
    
    if (answers[4] !== ""){
            print(correctCheckAnswer + testAnswers[4], tagsNames[4]);
    }
    
    if (answers[5] !== ""){
            print(correctCheckAnswer + testAnswers[5], tagsNames[5]);
    }
    
    if (answers[6] !== ""){
            print(correctCheckAnswer + testAnswers[6], tagsNames[6]);
    }
    
    if (answers[7] !== ""){
            print(correctCheckAnswer + testAnswers[7], tagsNames[7]);
    }
    
    if (answers[8] !== ""){
            print(correctCheckAnswer + testAnswers[8], tagsNames[8]);
    }
    
    if (answers[9] !== ""){
            print(correctCheckAnswer + testAnswers[9], tagsNames[9]);
    }
    else {
            print("error", "q11Response");
    }
}
function checkAnswer(){

    let answers = new Array(10);
    let answer1= document.getElementById("options1").value;
    answers[0] = answer1;
    let answer2 = document.getElementById("options2").value;
    answers[1] = answer2;
    let answer3 = document.getElementById("options3").value;
    answers[2] = answer3;
    let answer4 = document.getElementById("options4").value;
    answers[3] = answer4;
    let answer5 = document.getElementById("options5").value;
    answers[4] = answer5;
    let answer6 = document.getElementById("options6").value;
    answers[5] = answer6;
    let answer7 = document.getElementById("options7").value;
    answers[6] = answer7;
    let answer8 = document.getElementById("options8").value;
    answers[7] = answer8;
    let answer9 = document.getElementById("options9").value;
    answers [8] = answer9;
    let answer10 = document.getElementById("options10").value;
    answers[9] = answer10

    if (answers[0] !== ""){
        verifyAnswer(answers[0], 0);
        
    }
    if (answers[1] !== ""){
        verifyAnswer(answers[1], 1);
        
    }
    if (answers[2] !== ""){
        verifyAnswer(answers[2], 2);
        
    }   
    if (answers[3] !== ""){
        verifyAnswer(answers[3], 3);
       
    }
    if (answers[4] !== ""){
        verifyAnswer(answers[4], 4);
        
    }
    if (answers[5] !== ""){
        verifyAnswer(answers[5], 5);
        
    }
    if (answers[6] !== ""){
        verifyAnswer(answers[6], 6);
        
    }
    if (answers[7] !== ""){
        verifyAnswer(answers[7], 7);
        
    }
    if (answers[8] !== ""){
        verifyAnswer(answers[8], 8);
        
    }
    if (answers[9] !== ""){
        verifyAnswer(answers[9], 9);
       
    }
    else {
        print("error", "q11Response");
    }
}

function verifyAnswer(answer, index) {
    if  (answer === testAnswers[index]) {
        print(correctAnswerMessage, tagsCheckAnswers[index]);
    }
    else if (answer === "0") {
        print(emptyMessage, tagsCheckAnswers[index]);
    }
    else {
        print(incorrectAnswerMessage, tagsCheckAnswers[index]);
    }
}
