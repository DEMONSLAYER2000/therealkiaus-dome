let gamesCache = [];

document.addEventListener("DOMContentLoaded", () => {
  gamesCache = typeof games !== "undefined" ? games : [];

  renderGames();
  renderRecent();
});

/* ---------------- TABS ---------------- */
function showTab(tab) {
  document.getElementById("gamesTab").style.display = "none";
  document.getElementById("appsTab").style.display = "none";
  document.getElementById("browserTab").style.display = "none";

  document.getElementById(tab + "Tab").style.display = "block";
}

/* ---------------- GAMES ---------------- */
function renderGames() {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");

  if (!grid) return;

  const q = search ? search.value.toLowerCase() : "";

  grid.innerHTML = "";

  gamesCache
    .filter(g => g.name.toLowerCase().includes(q))
    .forEach(g => {

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div>${g.name}</div>
        <small>Click to play</small>
      `;

      card.onclick = () => {
        saveRecent(g);

        const frame = document.getElementById("frame");
        if (frame) {
          frame.style.display = "block";
          frame.src = g.url;
        }
      };

      grid.appendChild(card);
    });
}

/* ---------------- RECENT (JUMP BACK IN) ---------------- */
function saveRecent(game) {
  let recent = JSON.parse(localStorage.getItem("recent") || "[]");

  recent = recent.filter(g => g.name !== game.name);
  recent.unshift(game);

  recent = recent.slice(0, 8);

  localStorage.setItem("recent", JSON.stringify(recent));

  renderRecent();
}

function renderRecent() {
  const container = document.getElementById("recentGrid");
  if (!container) return;

  const recent = JSON.parse(localStorage.getItem("recent") || "[]");

  container.innerHTML = "";

  recent.forEach(g => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = g.name;

    div.onclick = () => {
      const frame = document.getElementById("frame");
      if (frame) {
        frame.style.display = "block";
        frame.src = g.url;
      }
    };

    container.appendChild(div);
  });
}

/* ---------------- BROWSER ---------------- */
function duckSearch() {
  const input = document.getElementById("browserInput");
  const frame = document.getElementById("browserFrame");

  if (!input || !frame) return;

  frame.style.display = "block";
  frame.src = "https://duckduckgo.com/?q=" + encodeURIComponent(input.value);
}
