// Seleciona os elementos
const btnReferencias = document.getElementById("btnReferencias");
const overlay = document.getElementById("overlay");
const fecharReferencias = document.getElementById("fecharReferencias");

// Exibe o overlay e o div de referências ao clicar no botão
btnReferencias.addEventListener("click", function() {
    overlay.style.display = "flex"; // Mostra o overlay
});

// Esconde o overlay ao clicar no botão de fechar
fecharReferencias.addEventListener("click", function() {
    overlay.style.display = "none"; // Esconde o overlay
});
