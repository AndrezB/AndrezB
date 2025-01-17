const loadingScreen = document.querySelector('.loading');
const mainScreen = document.querySelector('.main');
const contentScreen = document.querySelector('.content');
const music = document.getElementById('bg-music');

// Pantalla de carga
setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainScreen.style.display = 'flex';
}, 5000); // 5 segundos

// Verificar contraseña
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'capibara') {
        mainScreen.style.display = 'none';
        contentScreen.style.display = 'flex';
        music.play();
    } else {
        alert('Contraseña incorrecta');
    }
}

// Redirigir a WhatsApp
function redirectToWhatsApp() {
    music.pause();
    music.currentTime = 0;
    window.open('https://api.whatsapp.com/send?phone=+573226068586&text=Hola!%2C%20Yo%20Extraño%20y%20no%20sabes%20lo%20mucho%20que%20te%20extraño', '_blank');
}
