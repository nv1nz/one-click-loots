async function loadGames() {
  try {
    const res = await fetch("games.json");
    const games = await res.json();
    const container = document.getElementById("games-list");
    container.innerHTML = "";

    games.forEach((game) => {
      const link = document.createElement("a");
      link.href = game.link;
      link.target = "_blank";
      link.className = "game-card";
      link.textContent = game.title;
      container.appendChild(link);
    });
  } catch (err) {
    console.error("Error loading games:", err);
  }
}

// Load and refresh every 60 seconds
setInterval(loadGames, 60000);
loadGames();

document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
