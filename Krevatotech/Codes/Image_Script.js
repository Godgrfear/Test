
let Zoom_Image = document.getElementById('Zoom_Image');

Zoom_Image.addEventListener('mousemove', (event) => {
    Zoom_Image.style.setProperty('--display', 'block');

    let pointer = {
        x: (event.offsetX * 100) / Zoom_Image.offsetWidth,
        y: (event.offsetY * 100) / Zoom_Image.offsetHeight
    };

    Zoom_Image.style.setProperty('--zoom-x', pointer.x + '%');
    Zoom_Image.style.setProperty('--zoom-y', pointer.y + '%');
});

Zoom_Image.addEventListener('mouseout', () => {
    Zoom_Image.style.setProperty('--display', 'none');
});
