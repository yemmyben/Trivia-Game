//alert(1);
// This code will run as soon as the page loads
window.onload = function() {
    $("#start").on("click", start);
}

function validate() {
    // Validation
    
        for(var i = 1; i <= total; i++){
            if(eval('q' + i) == null || eval('q' + i) == ''){
            alert('All question must be answered within time alloted!!! Please answer question ' + i + '.');
            return false;
        }

    }
}

      
    // var q1 = document.forms['quizForm']['q1'].value;
    // var q2 = document.forms['quizForm']['q2'].value;
    // var q3 = document.forms['quizForm']['q3'].value;
    // var q4 = document.forms['quizForm']['q4'].value;
    // var q5 = document.forms['quizForm']['q5'].value;

    // // Validation
    
    //     for(var i = 1; i <= total; i++){
    //         if(eval('q' + i) == null || eval('q' + i) == ''){
    //         alert('All question must be answered within time alloted!!! Please answer question ' + i + '.');
    //         return false;
    //     }

    // }
    function correctAnswer() {

        // Variable declaration
    var total = 5;
    var score = 0;

    // Get User Input
    var q1 = $("input[name='q1']:checked").val();
    var q2 = $("input[name='q2']:checked").val();
    var q3 = $("input[name='q3']:checked").val();
    var q4 = $("input[name='q4']:checked").val();
    var q5 = $("input[name='q5']:checked").val();  

    // Set correct Answers
    var answers = ['b', 'a', 'd', 'b', 'd'];

    // Check Answers
    for(var i = 1; i <= total; i++){    // try to use tripple ===
        if(eval('q' + i) == answers[i - 1]){
            score++;
        }
    } 


    // Display Results
    var results = $('#results');
    results.html("<h3>You scored <span>"+score+'</span> out of <span>'+total+"</span></h3>");
    alert('You scored '+ score +' out of ' + total);

    return false;
}

// Set the counter to 15.
var number = 15;

// Variable that will hold our interval id
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;

function reset() {

    time = 0;
  
    //Change the "display" div to "00:00."
    $("#display").text("00:00");
  }

function start() {

    //Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      clockRunning = true;
      clearInterval(intervalId); 
      intervalId = setInterval(decrement, 1000);
    }
  }

//  The run function sets an interval
//  that runs the decrement function once a second.
// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }

// The decrement function.
function decrement() {
    // Decrease number by one
    number--;

    // Show the number in the #timeCountDown tag.
    $('#display').html("<h2>" + number + "</h2>");

    // Once number hits zero.
    if (number === 0) {

        // Alert the user "time is up!" You can also remind user as time count down.
        $('#countDownAlert').html("<h2>Time is Up! The test is now over.</h2>");

        // Call correct answer
        correctAnswer();

        //  Clears our intervalId
        clearInterval(intervalId);

        // Run the submitAnswers
        //submitAnswers();
}
}
    function submitAnswers() {
        if( number !== 0) {
            validate();
            correctAnswer();
        }
    }

