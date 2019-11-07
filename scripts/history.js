$(document).ready(function() {

    function history() {

        var thisDate = moment().format('MM/DD')
        var queryURL = `http://numbersapi.com/${thisDate}/date`
        
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            $("#history").append(response);
      

            // $("#triviaQuestion").append(question)
            // $("#triviaAnswer").append(correctAnswer)
        
    });

    
    };
    
    history();

    $("#nextHistory").on("click", () => {
        $("#history").empty();

        history();
    })

});