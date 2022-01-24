function p_check(){

 

	var p_question1 = document.quiz.p_question1.value;
    var p_question2 = document.quiz.p_question2.value;
    var p_question3 = document.quiz.p_question3.value;
    var p_question4 = document.quiz.p_question4.value;
    var p_question5 = document.quiz.p_question5.value;
    var p_question6 = document.quiz.p_question6.value;
	var correct = 0;

	if (p_question1 == "fund"){
		correct++;
}
    if (p_question2 == "6"){
		correct++;
}
if (p_question3 == "consti"){
    correct++;
}
if (p_question4 == "15"){
    correct++;
}
if (p_question5 == "rus"){
    correct++;
}
if (p_question6 == "respect"){
    correct++;
}


    var messages = ["Good job", "Not bad", "You really need to do better"];
    var range;

     if (correct < 4){
     	 range = 2;
     }

      if (correct > 0 && correct < 4){
     	 range = 1;
     }

        if (correct > 2){
     	 range = 0;
     }
   p_score=correct;
   document.getElementById("after_submit").style.visibility="visible";


   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + p_score + " out of 6 correct.";
   alert("Thank you for answering, you got "+p_score+ " out of 6");

}
// reflesh page function

function p_myFunction() {
    location.reload();
    alert("Do you really want to refresh. Your progress will be deleted." );
}