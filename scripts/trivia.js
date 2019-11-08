$(document).ready(function() {

    function triviaQ() {

        var queryURL = "https://opentdb.com/api.php?amount=1"
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var question = response.results[0].question

            var correctAnswer = response.results[0].correct_answer

            var incorrectAnswers1 = response.results[0].incorrect_answers[0]

            if (response.results[0].incorrect_answers[1]){
              var incorrectAnswers2 = response.results[0].incorrect_answers[1]
            }

            if (response.results[0].incorrect_answers[2]){
              var incorrectAnswers3 = response.results[0].incorrect_answers[2]
            }
            
            var len = response.results[0].incorrect_answers.length

            if (len > 1){
                var choicesArray = [correctAnswer, incorrectAnswers1, incorrectAnswers2, incorrectAnswers3];
                $.each(choicesArray, function(idx, value){
                  var newdiv = $('<div>',{class: 'results', text: value});
                  $('#triviaChoices').append(newdiv);
                });                      
              
            } else {
                var choicesArray = ["True", "False"]
                $.each(choicesArray, function(idx, value){
                  var newdiv = $('<div>',{text: value});
                  $('#triviaChoices').append(newdiv);
                }); 
            };
            

            $("#triviaQuestion").append(question)
            $("#triviaAnswer").append("Correct Answer:   " + correctAnswer)
        
    });

    
    };
    
    triviaQ();

    $("#nextTrivia").on("click", () => {
        $("#triviaAnswer").addClass("d-none") 
        $("#hrAnswer").addClass("d-none") 
        $("#triviaQuestion").empty();
        $("#triviaAnswer").empty();
        $("#triviaChoices").empty(); 
        triviaQ();
    })

    $("#showTriviaAnswer").on("click", () => {
        $("#triviaAnswer").removeClass("d-none")
        $("#hrAnswer").removeClass("d-none")
     })
});