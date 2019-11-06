// Checking Local Storage for userInfo
cards = ["wordCard", "weatherCard","jokeCard","inspireCard","headlineCard","recipeCard"]
let userInfoJSON = localStorage.getItem('userInfo');
userInfo = {

};








if (userInfoJSON){
    userInfo = JSON.parse(allInfoJSON);
} else {
    for (i=9 ; i < 18; i++){
        let thisInfo = {
            card: `${i}`,
            status: 'on'
        };
        allInfo.push(thisInfo);
    };
};
