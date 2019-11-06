$(document).ready(function() {

    function triviaQ() {

        var queryURL = "https://opentdb.com/api.php?amount=1"
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            //console.log(response)
            //console.log(response.results[0].question)
            var question = response.results[0].question

           // console.log(response.results[0].correct_answer)
            var correctAnswer = response.results[0].correct_answer

           // console.log(response.results[0].incorrect_answers[0])
            var incorrectAnswers = response.results[0].incorrect_answers[0]

            var len = response.results[0].incorrect_answers.length
           // console.log(response.results[0].incorrect_answers.length)

            $("#triviaQuestion").append(question)
            $("#triviaAnswer").append(correctAnswer)
        
    });

    
    };
    
    triviaQ();

    $("#nextTrivia").on("click", () => {
        $("#triviaAnswer").addClass("d-none") 
        $("#triviaQuestion").empty();
        $("#triviaAnswer"). empty(); 
        triviaQ();
    })

    $("#showTriviaAnswer").on("click", () => {
        $("#triviaAnswer").removeClass("d-none")
     })
});