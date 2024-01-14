const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=Vf2TpWsPvgI', '_blank');
});

h1.addEventListener('mouseenter', () => {
    h1.querySelectorAll('span').forEach(span => {
        span.style.setProperty('--random-x', `${random(-50, 50)}px`);
        span.style.setProperty('--random-y', `${random(-50, 50)}px`);
    });
    h1.classList.add('spill');
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}
