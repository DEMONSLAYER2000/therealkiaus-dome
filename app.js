window.onload = () => {
setTimeout(() => {
document.getElementById("loader").style.display = "none";
}, 600);
};
let category = "all";

function renderGames(){
const grid = document.getElementById("grid");
const featured = document.getElementById("featured");
const search = document.getElementById("search").value.toLowerCase();

grid.innerHTML = "";
featured.innerHTML = "";

// filter system
let filtered = games
.filter(g => category === "all" || g.cat === category)
.filter(g => g.name.toLowerCase().includes(search));

// featured (first 6)
filtered.slice(0,6).forEach(g=>{
featured.innerHTML += createCard(g);
});

// all games
filtered.forEach(g=>{
grid.innerHTML += createCard(g);
});

}

function createCard(g){
return `
<div class="card" onclick="play('${g.url}')">
<img src="https://www.google.com/s2/favicons?sz=128&domain=${new URL(g.url).hostname}">
<div>${g.name}</div>
</div>
`;
}

function setCat(c){
category = c;
renderGames();
}

function play(url){
const frame = document.getElementById("frame");
frame.src = url;
frame.style.display = "block";
}

renderGames();