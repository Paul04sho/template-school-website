// Sélectionner le menu et le bouton hamburger
const hamburgerToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// Au clic de l'utilisateur on affiche le menu 
hamburgerToggle.addEventListener("click", () => {
   navLinks.classList.toggle("active");
});

// Le menu se ferme automatiquement lorsqu'on clique sur un lien 
document.querySelectorAll(".nav-links a").forEach(link => {
   link.addEventListener("click", () => {
       navLinks.classList.remove("active");
   });
});