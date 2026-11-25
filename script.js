// SHARK HOST — personaliza los enlaces antes de publicar.
const CONFIG = {
  panelUrl: "",   // Ejemplo: https://panel.tudominio.com
  discordUrl: ""  // Pega aquí la invitación de tu Discord
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function configureLink(id, url, label) {
  const link = document.getElementById(id);
  if (!url) {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert(label + " todavía está en preparación. ¡Próximamente!");
    });
  } else {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
}
configureLink("panelLink", CONFIG.panelUrl, "El panel de clientes");
configureLink("discordLink", CONFIG.discordUrl, "Discord y soporte");
