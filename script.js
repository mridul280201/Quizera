
function check(){

 

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
	var correct = 0;

	if (question1 == "vatican city"){
		correct++;
}
    if (question2 == "Nile") {
    	correct++;
}
    if (question3 == "Russia") {
    	correct++
    }
    if(question4=="Sweden"){
        correct++
    }
    if(question5=="China"){
        correct++
    }
    if(question6=="Andes"){
        correct++
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
   g_score=correct;
   document.getElementById("after_submit").style.visibility="visible";


   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + g_score + " out of 6 correct.";
   alert("Thank you for answering, you got "+g_score+ " out of 6");

}
function welcome(){
    alert("Welcome to quizera");
}
function send(){
    alert("Thanks for your feedback,We will make sure our team contacts you as soon as possible")
}
// reflesh page function

function myFunction() {
    location.reload();
    alert("Do you really want to refresh. Your progress will be deleted." );
}