const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    // Log where the user has clicked on the page and offset it to correctly
    // based on the position inside the slider div.
    startX = e.pageX - slider.offsetLeft;
    // Save where the user has initially clicked before the scroll start
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    // prevent text selecting inside a slide
    e.preventDefault();
    // locate cursor's position
    const x = e.pageX - slider.offsetLeft;
    // how far has a user deviated from the start
    // multiply by two to speed up the sliding
    const movement = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - movement;
});
