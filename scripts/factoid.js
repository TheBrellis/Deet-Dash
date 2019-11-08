$(document).ready(function() {

    function factoid() {

       // var thisDate = moment().format('MM/DD')
        var queryURL = `http://numbersapi.com/random/number`
        
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            $("#factoid").append(response);
      

            // $("#triviaQuestion").append(question)
            // $("#triviaAnswer").append(correctAnswer)
        
    });

    
    };
    
    factoid();

    $("#nextFactoid").on("click", () => {
        $("#factoid").empty();

        factoid();
    })

});