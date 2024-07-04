const canvas = document.getElementById('map-canvas');
const ctx = canvas.getContext('2d');
const mapImage = document.getElementById('map-image');
const boxes = document.querySelectorAll('.box');

mapImage.onload = function() {
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
}

let startX, startY, isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
    startX = e.offsetX;
    startY = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mouseup', (e) => {
    if (!isDrawing) return;
    isDrawing = false;
    const endX = e.offsetX;
    const endY = e.offsetY;
    drawLine(startX, startY, endX, endY);
});

function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

boxes.forEach(box => {
    box.addEventListener('mousedown', (e) => {
        startX = e.pageX - canvas.offsetLeft;
        startY = e.pageY - canvas.offsetTop;
        isDrawing = true;
    });

    box.addEventListener('mouseup', (e) => {
        if (!isDrawing) return;
        isDrawing = false;
        const endX = e.pageX - canvas.offsetLeft;
        const endY = e.pageY - canvas.offsetTop;
        drawLine(startX, startY, endX, endY);
    });
});
