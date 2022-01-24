function m_check(){

 

	var m_question1 = document.quiz.m_question1.value;
    var m_question2 = document.quiz.m_question2.value;
    var m_question3 = document.quiz.m_question3.value;
    var m_question4 = document.quiz.m_question4.value;
    var m_question5 = document.quiz.m_question5.value;
    var m_question6 = document.quiz.m_question6.value;
	var correct = 0;

	if (m_question1 == "1997"){
		correct++;
}
    if (m_question2 == "1937"){
		correct++;
}
if (m_question3 == "1995"){
    correct++;
}
if (m_question4 == "2009"){
    correct++;
}
if (m_question5 == "solti"){
    correct++;
}
if (m_question6 == "2"){
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
   m_score=correct;
   document.getElementById("after_submit").style.visibility="visible";

   m_score=correct;
   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + m_score + " out of 6 correct.";
   alert("Thank you for answering, you got "+m_score+ " out of 6");

}
// reflesh page function

function m_myFunction() {
    location.reload();
    alert("Do you really want to refresh. Your progress will be deleted." );
}