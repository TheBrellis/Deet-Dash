
$(document).ready(function() {
 

// setting initial value of cards depending on whats currently in localStorage


// identify elements in drop down
let cards = document.querySelectorAll("button[data-action= 'toggle-card']");

//Updates display state of cards depending on values in userInfo object
function manageCards(){
    for (i=0; i<cardOptions.length;i++){
        let objectState = userInfo.cards[i].status;

        if (objectState === "off"){
            $('#manage-cards').children().eq(i).addClass('d-none');
        } else {
            $('#manage-cards').children().eq(i).removeClass('d-none')
        }
    }
}

function resetSelections(){
    // pulls most up to date user info from localStorage
    checkStorage();
    for (i=0; i<cardOptions.length;i++){
        let objectState = userInfo.cards[i].status;

        if (objectState === "on"){
            $('#manage-buttons').children().eq(i).removeClass("text-dark bg-light");
            $('#manage-buttons').children().eq(i).data("status","on");
        } else {
            $('#manage-buttons').children().eq(i).addClass("text-dark bg-light");
            $('#manage-buttons').children().eq(i).data("status","off");
        }
    }
}

function setUserInfo() {
    
    for (i=0; i<cardOptions.length;i++){
    let currentState = $('#manage-buttons').children().eq(i).data("status");
    userInfo.cards[i].status = currentState;
    //updating cards to match object states
    }
    // updating display state depending on current value in the object
    manageCards();
   // updating localStorage
    let userInfoJSON = JSON.stringify(userInfo);
    localStorage.setItem('userInfo',userInfoJSON);
}


// Setting initial card values
manageCards();
resetSelections();
//Click Events for Card elements in Modal
// click event for the selections toggles the setting of the selection
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
// click event updates the object according to the selections,updates the object in localStorage, then updates the page according to the object
$("#submit-cards").on("click",setUserInfo); 

// click event for the close button set the selections to the current value of the object
// when modal appears, clicking anywhere except for the save button runs manageCards()
$("#clear").on("click", resetSelections);

});