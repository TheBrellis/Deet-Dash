$(document).ready(function() {

    function numbers() {

        var thisDate = moment().format('MM/DD')
        var queryURL = `http://numbersapi.com/${thisDate}/date`
        
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            $("#numbers").append(response);
      

            // $("#triviaQuestion").append(question)
            // $("#triviaAnswer").append(correctAnswer)
        
    });

    
    };
    
    numbers();

    // $("#nextTrivia").on("click", () => {
    //     $("#triviaAnswer").addClass("d-none") 
    //     $("#triviaQuestion").empty();
    //     $("#triviaAnswer"). empty(); 
    //     triviaQ();
    // })

    // $("#showTriviaAnswer").on("click", () => {
    //     $("#triviaAnswer").removeClass("d-none")
    //  })
});