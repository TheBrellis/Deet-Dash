$(document).ready(function() {


function toggleCards() {
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");

$(cards).on("click",function(e){
    e.preventDefault()
    console.log("hello");
})
}
toggleCards();
});