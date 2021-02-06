const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {

const response = await fetch(url);
const resultsArray = await response.json();
const games = resultsArray.results;
const resultsHtml = document.querySelector(".results");


for(let i = 0; i <8; i++) {
resultsHtml.innerHTML += `
<div class="wrapper">
<div class="name"> <span>Name: </span> ${games[i].name}</div>
<div class="rating"><span>Rating: </span>${games[i].rating}</div>
<div class="tags"> <span>Amount of tags: </span>${games[i].tags.length}</div>
</div>
`
}

}


getGames();