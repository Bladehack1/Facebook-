// script.js
document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.getElementById("spinner");
  const message = document.getElementById("message");
  const reconnectBtn = document.getElementById("reconnect-btn");

  // Cacher le spinner après 5 secondes et afficher le message
  setTimeout(() => {
    spinner.style.display = "none"; // Cache le spinner
    message.classList.remove("hidden"); // Affiche le message
  }, 5000); // 5 secondes

  // Redirection au clic sur le bouton
  reconnectBtn.addEventListener("click", () => {
    window.location.href = "https://web.facebook.com/?_rdc=1&_rdr"; // Redirige vers la page de connexion
  });
});