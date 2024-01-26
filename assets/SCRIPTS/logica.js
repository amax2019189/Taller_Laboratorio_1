document.addEventListener("DOMContentLoaded", function () {


    const imageUrls = [
        "kinal.webp",
        "kinal1.webp",
    ]
});

const galleryContainer = document.getElementById("gallery");

imageUrls.forEach((url) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.alt = "Imagen";
    imgElement.addEventListener("click", () => openImage(url)); // Abre la imagen al hacer clic
    galleryContainer.appendChild(imgElement);
});

function openImage(url) {
    
    alert("Imagen seleccionada: " + url);
}