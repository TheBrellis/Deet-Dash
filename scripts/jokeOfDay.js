
$(document).ready(function() {

function jokeOfDay() {
  var queryURL = "https://sv443.net/jokeapi/category/programming"

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response;
      $("#card3Header").append("Joke of the Day!");

          if(results.type === "single"){
            $("#joke").append(results.joke);
            $("#jod_twopart").addClass("d-none")
          }
          else if(results.type === "twopart"){
            $("#joke").append(results.setup);
            $("#jod_twopart").removeClass("d-none")
            $("div").addClass("important");
            $("#delivery").append(results.delivery);
          }
    });

};

jokeOfDay();

$("#nextJoke").on("click", () => {
  $("#card3Header").empty();  
  $("#joke").empty();
  $("#delivery").empty(); 
  jokeOfDay();
})

});