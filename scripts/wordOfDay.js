// Building Word of the Day Card:
$(document).ready(function(){

const words = ["Ineffable", "Ambivert", "Quixotic", "Pabulum", "Satori", "Amorist", "Supererogatory","Rhetoric","Jaunty","Burble"];

function wordOfDay(words){

var wordEl = $("#word");
var definitionEl = $("#definition");
// Selecting a random word of the day:
let rand = Math.floor(Math.random() * words.length);
let word = words[rand];

var apiURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3579352d-35d5-45b9-9a98-894e73e8fdc2`

$.ajax({
    url: apiURL,
    method: "GET"
}).done(response =>{
    wordEl.text(word);
    definitionEl.text(response[0].shortdef[0]);
    console.log(response);
})
}

wordOfDay(words);

})