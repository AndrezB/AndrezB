// Animación de puntos en el mensaje de "Cargando..."
let dotCount = 0;
const dotsElement = document.getElementById("dots");

setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    dotsElement.textContent = ".".repeat(dotCount);
}, 500);

// Redirigir automáticamente después de 10 segundos
setTimeout(() => {
    window.location.href = "segunda.html"; // Redirige a la segunda página
}, 10000); // 10 segundos = 10000 milisegundos
