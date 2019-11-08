$(document).ready(function () {

  function horoscope() {

    var queryURL = "https://www.horoscopes-and-astrology.com/json";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        $("#").append(response);

      });
    }

    horoscope();
  // $.ajax({
  //   type:'POST',
  //   url:'https://aztro.sameerkumar.website?sign=&day=today',
  //   success:function(data){
  //   console.log(data);
  //   }
  //    });
  });
  