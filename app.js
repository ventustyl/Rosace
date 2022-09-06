var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 0;
var y = 0;
var tour = 0;
ctx.translate(innerWidth / 2, innerHeight / 2);

function dessin() {

    requestAnimationFrame(dessin);

    ctx.beginPath();
    ctx.strokeStyle = '#EDFE'
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.rotate(60 * Math.PI / 180);
    tour = tour + 60;

    if (tour> 7200) {
        return;
    }
    if (tour % 360 === 0) {
        x += 10;
        y += 10;
    }
}

dessin();