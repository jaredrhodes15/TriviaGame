var panel = $("#gameGoesHere")


$(document).on("click", "#startButton", function(event){
    game.start();
  });
  
  $(document).on("click", "#finishButton", function(event){
    game.done();
  });

  var questions = [{
      question: "Who was Zach Morris' gilfriend?",
      answers: ["Tori", "Kelly", "Jessie", "Lisa"],
      correstAnswer: "Kelly"
      
  }, {
      question: "Who was the principal of the highschool?",
      answers: ["Mr. Bellding", "Mr. Fanklin", "Mr. Doolittle", "Mr. Thompson"],
      correctAnswer: "Mr. Bellding"

  }, {
      question: "Who was the Captain of the wrestling team?",
      answers: ["Zach Morris", "Tim Strong", "Ox", "AC Slater"],
      correctAnswer: "AC Slater"
       
  }];

  //initial numbers for the gmae
var game = {
    correct: 0,
    incorrect: 0,
    timer: 10,

    countdown: function() {
        game.timer--;
        $("#timer-number").html(game.timer);

        if (game.timer === 0) {
            alert("You ran out of time! Answer faster!");
            game.done();
        

    }
},

  //All actual game code
  start: function() {
    //Start timer
    timer = setInterval(game.countdown, 1000);
    $("#timerGoesHere").prepend('<h5><span id="timer-number">10</span> seconds remaining</h5><br>');
    $("#startButton").remove();

  //Show questions and answers and add done button
    for (var i = 0; i < questions.length; i++) {
    panel.append('<h6>' + questions[i].question + '</h6>');
    for (var j = 0; j < questions[i].answers.length; j++){
      panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j] + '<br>');
      }
        }
        panel.append("<br><br><button id='done'>DONE</button>");
    
    },
  //When done is clicked, check the answers and tally them for display
    done: function() {

        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                console.log(this);
                  game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }


        });

        this.results();
    },

//clear the timer and show answer totals
      results:function() {
          clearInterval(timer);

  
          $("#timerGoesHere h5").remove();
       panel.html("<h6>The Bell Rang!  Here is how you did!</h6>");
       panel.append("<h3>You got " + this.correct + " correct! </h3>");
       panel.append("<h3>You got " + this.incorrect + " wrong. </h3>");
       panel.append("<h3>You didn't answer " + (questions.length - (this.incorrect + this.correct)) + " questions. </h3>");
      
      }

};

