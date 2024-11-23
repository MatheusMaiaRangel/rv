// Função para gerar o QR Code
function generateQRCode(data) {
    const qrContainer = document.getElementById("qrcode");
    
    // Limpa qualquer QR Code gerado anteriormente
    qrContainer.innerHTML = "";

    // Gera o QR Code com os dados passados
    new QRCode(qrContainer, {
        text: data,        // Dados do QR Code (pode ser URL, texto, etc)
        width: 200,        // Largura do QR Code
        height: 200,       // Altura do QR Code
        colorDark: "#000", // Cor dos quadrados do QR Code
        colorLight: "#fff" // Cor do fundo do QR Code
    });
}

// Função para abrir o modal com o QR Code
function openModal() {
    const modal = document.getElementById("qrModal");
    const data = "https://www.instagram.com/mmr.maia"; // URL ou conteúdo para gerar o QR Code
    
    // Gerar o QR Code
    generateQRCode(data);

    // Mostrar o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("qrModal");
    modal.style.display = "none"; // Esconde o modal
}

// Ao clicar no botão, abre o modal
document.querySelector(".buttonqrcode").addEventListener("click", openModal);

// Ao clicar no "x" para fechar o modal
document.getElementsByClassName("close")[0].addEventListener("click", closeModal);

// Fechar o modal se clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById("qrModal");
    if (event.target == modal) {
        closeModal();
    }
}