const messages = [
  "Conectando aos servidores...",
  "Verificando segurança...",
  "Carregando catálogo...",
  "Preparando streaming...",
  "Entrando na plataforma..."
];

let i = 0;
const statusText = document.getElementById("statusText");

const interval = setInterval(() => {
  i++;
  if (i < messages.length) {
    statusText.textContent = messages[i];
  }
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  window.location.href = "http://playerbr.webplayer.one/";
}, 5000);

window.addEventListener("load", () => {
  const video = document.getElementById("bgVideo");
  video.play().catch(() => {});
});