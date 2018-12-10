var appendMe = $(".triviaGame")

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
  }
  }

      
  }]