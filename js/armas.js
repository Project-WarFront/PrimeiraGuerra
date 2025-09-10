// Script básico para futuras interações
document.addEventListener("DOMContentLoaded", () => {
  console.log("Seção de armas carregada com sucesso!");

  // Exemplo: clicar em uma arma destaca ela
  const armas = document.querySelectorAll("model-viewer");
  armas.forEach(arma => {
    arma.addEventListener("click", () => {
      armas.forEach(a => a.style.outline = "none");
      arma.style.outline = "3px solid #d60000";
    });
  });
});
