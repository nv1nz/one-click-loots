const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = () => {
  const html = document.documentElement;
  const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  loadGames();
  setInterval(loadGames, 60000); // refresh every 60s
};

async function loadGames() {
  try {
    const res = await fetch("https://raw.githubusercontent.com/nv1nz/one-click-loots/main/data/games.json");
    const games = await res.json();
    const list = document.getElementById("games-list");
    list.innerHTML = "";

    games.forEach(game => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${game.title}</strong> <br>
        <a href="${game.link}" target="_blank">🎁 Claim Now</a>
      `;
      list.appendChild(div);
    });
  } catch (e) {
    document.getElementById("games-list").innerText = "Failed to load games.";
  }
}
