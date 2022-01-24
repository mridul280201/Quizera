function s_check(){

 

	var s_question1 = document.quiz.s_question1.value;
    var s_question2 = document.quiz.s_question2.value;
    var s_question3 = document.quiz.s_question3.value;
    var s_question4 = document.quiz.s_question4.value;
    var s_question5 = document.quiz.s_question5.value;
    var s_question6 = document.quiz.s_question6.value;
	var correct = 0;

	if (s_question1 == "France"){
		correct++;
}
    if (s_question2 == "Tokyo"){
		correct++;
}
if (s_question3 == "China"){
    correct++;
}
if (s_question4 == "Madrid"){
    correct++;
}
if (s_question5 == "Chelsea"){
    correct++;
}
if (s_question6 == "Athens"){
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

   s_score=correct;
   document.getElementById("after_submit").style.visibility="visible";


   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + s_score + " out of 6 correct.";
   alert("Thank you for answering, you got "+s_score+ " out of 6");

}
// reflesh page function

function s_myFunction() {
    location.reload();
    alert("Do you really want to refresh. Your progress will be deleted." );
}