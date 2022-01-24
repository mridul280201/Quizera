function h_check(){

 

	var h_question1 = document.quiz.h_question1.value;
    var h_question2 = document.quiz.h_question2.value;
    var h_question3 = document.quiz.h_question3.value;
    var h_question4 = document.quiz.h_question4.value;
    var h_question5 = document.quiz.h_question5.value;
    var h_question6 = document.quiz.h_question6.value;
	var correct = 0;

	if (h_question1 == "Bank"){
		correct++;
}
    if (h_question2 == "Belgium"){
		correct++;
}
if (h_question3 == "Mesopotamian"){
    correct++;
}
if (h_question4 == "Sumerians"){
    correct++;
}
if (h_question5 == "Xia"){
    correct++;
}
if (h_question6 == "1991"){
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


   h_score=correct;
   document.getElementById("after_submit").style.visibility="visible";



   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + h_score + " out of 6 correct.";
   alert("Thank you for answering, you got "+h_score+ " out of 6");

}
// reflesh page function

function h_myFunction() {
    location.reload();
    alert("Do you really want to refresh. Your progress will be deleted." );
}