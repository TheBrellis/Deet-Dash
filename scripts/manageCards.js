$(document).ready(function() {

// identify elements in drop down
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");
console.log(userInfo,"before");
function setCards() {

    for (i=0; i<cardOptions.length;i++){
    let currentState = $('#manage-buttons').children().eq(i).data("status");
    userInfo.cards[i].status = currentState;
    }
    
    /*
    if ($(this).data("card") === "word"){
        $('#wordCard').addClass('d-none');
    }
    */
   console.log(userInfo,"after");
}



//Click Events for Card elements in Modal
// click event for the selections changes the setting of the selection
$(cards).on("click",function(event){
    event.preventDefault();
if ($(this).data("status") === "on"){
//Turning card off
    $(this).addClass("text-dark bg-light");
    $(this).data("status","off");   
} else {
// Turning card on
    $(this).removeClass("text-dark bg-light");
    $(this).data("status","on");
}
})

// Click Event for Save Button in Modal
// click event for this updates the object according to the selections, then updates the page according to the object
$("#submit-cards").on("click",setCards) 


// click event for the close button set the selections to the current value of the object






});