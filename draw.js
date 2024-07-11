document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const prompt = urlParams.get('prompt');
    const drawPromptElement = document.getElementById('draw-prompt');
    drawPromptElement.textContent = prompt || "No prompt found";

    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    let drawing = false;

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = '#000000';
    document.querySelector('.container').appendChild(colorPicker);

    const brushSize = document.createElement('input');
    brushSize.type = 'range';
    brushSize.min = 1;
    brushSize.max = 20;
    brushSize.value = 5;
    document.querySelector('.container').appendChild(brushSize);

    canvas.addEventListener('mousedown', () => {
        drawing = true;
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
        context.beginPath();
    });

    canvas.addEventListener('mousemove', draw);

    function draw(event) {
        if (!drawing) return;

        context.lineWidth = brushSize.value;
        context.lineCap = 'round';
        context.strokeStyle = colorPicker.value;

        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }
});

function clearCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}
