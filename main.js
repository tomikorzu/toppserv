function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  hamburgerButton.classList.toggle("active");

  mobileNavSections.classList.toggle("show");
  navbar.classList.toggle("transparent");
}

const hamburgerButton = document.getElementById("hamburguer-button");
const mobileNavSections = document.getElementById("toggle");
const navLinks = document.querySelectorAll(".mobile-nav-sections-links");

hamburgerButton.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburgerButton.classList.contains("active")) {
      toggleMenu();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const offset = 70;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetPosition =
        document.querySelector(targetId).getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});

let topPlayers = [
  {
    position: 1,
    name: "Djokovic",
  },
  {
    position: 2,
    name: "Daniil Medvedev",
  },
  {
    position: 3,
    name: "Player 3",
  },
  {
    position: 4,
    name: "Player 4",
  },
  {
    position: 5,
    name: "Player 5",
  },
  {
    position: 6,
    name: "Player 6",
  },
  {
    position: 7,
    name: "Player 7",
  },
  {
    position: 8,
    name: "Player 8",
  },
  {
    position: 9,
    name: "Player 9",
  },
  {
    position: 10,
    name: "Player 10",
  },
];
const rankingPlayers = document.querySelectorAll(".players-ranking");

function renderRanking() {
    topPlayers.forEach((player, index) => {
        const playerRanking = document.createElement("li");
        playerRanking.classList.add("player-ranking");
        playerRanking.innerHTML = `${player.position} - ${player.name}`;
        rankingPlayers[0].appendChild(playerRanking);
    });
}
renderRanking();