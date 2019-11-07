
$(document).ready(function() {

function jokeOfDay() {
  var queryURL = "https://sv443.net/jokeapi/category/programming"

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response;
      // console.log(results)

      $("#card3Header").append("Joke of the Day!");

       // console.log(results.type)
          if(results.type === "single"){
          //  console.log(results.joke)
            $("#joke").append(results.joke);
            $("#jod_twopart").addClass("d-none")
          }
          else if(results.type === "twopart"){
           // console.log("twopart:  " +  results.setup)
           // console.log("deliver:  " +  results.delivery)
            $("#joke").append(results.setup);
            $("#jod_twopart").removeClass("d-none")
            $("div").addClass("important");
            $("#delivery").append(results.delivery);
          }
    });

};

jokeOfDay();

});