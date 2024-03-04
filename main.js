let app = null;

document.addEventListener('DOMContentLoaded', function() {
    app = document.getElementById('app');

    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', '320');
    canvas.setAttribute('height', '400');
    canvas.setAttribute('style', 'border: 1px solid black');

    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 50, 50);

    app.appendChild(canvas);
});