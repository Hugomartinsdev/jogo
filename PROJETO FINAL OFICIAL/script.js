const logo = document.getElementById('logo');
const container = document.getElementById('container');

function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

function checkCollision() {
    const logoRect = logo.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (
        logoRect.left < containerRect.left ||
        logoRect.right > containerRect.right ||
        logoRect.top < containerRect.top ||
        logoRect.bottom > containerRect.bottom
    ) {
        logo.style.animationPlayState = 'paused';
        logo.style.backgroundColor = '#ff0000';
        logo.style.transform = 'translate(0, 0)';
        setTimeout(() => {
            logo.style.animationPlayState = 'running';
            logo.style.backgroundColor = '#00ff00';
        }, 1000);
    }
}

setInterval(checkCollision, 10);
