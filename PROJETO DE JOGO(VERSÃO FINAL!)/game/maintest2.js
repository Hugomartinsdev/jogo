// Cria o elemento canvas e o adiciona à página
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var stars = [];
for (var i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        color: '#ffffff' // cor inicial das estrelas
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        star.x += Math.random() * 2 - 1;
        star.y += Math.random() * 2 - 1;
        if (star.x < 0 || star.x > canvas.width) {
            star.x = Math.random() * canvas.width;
        }
        if (star.y < 0 || star.y > canvas.height) {
            star.y = Math.random() * canvas.height;
        }
        // define uma nova cor aleatória para a estrela
        star.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

function animate() {
    requestAnimationFrame(animate);
    updateStars();
    drawStars();
}

animate();
