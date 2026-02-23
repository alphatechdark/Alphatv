document.addEventListener("DOMContentLoaded", () => {

  /* ================= VIDEO AUTO PLAY ================= */

  const video = document.getElementById("bgVideo");
  if (video) {
    video.play().catch(() => {});
  }

  /* ================= MENSAGENS DINÂMICAS ================= */

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

  /* ================= REDIRECIONAMENTO ================= */

  setTimeout(() => {
    clearInterval(interval);

    // efeito leve antes de sair
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      window.location.href = "http://playerbr.webplayer.one/";
    }, 500);

  }, 5000);

});