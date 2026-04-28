// DARK MODE
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// CARROSSEL
let indice = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', function(){
    indice++;
    if(indice > totalSlides - 1) indice = 0;
    atualizarCarrossel();
});

document.querySelector('.prev').addEventListener('click', function(){
    indice--;
    if(indice < 0) indice = totalSlides - 1;
    atualizarCarrossel();
});

function atualizarCarrossel(){
    slides.style.transform = `translateX(${-indice * 100}%)`;
}

setInterval(() => {
    indice++;
    if(indice > totalSlides - 1) indice = 0;
    atualizarCarrossel();
}, 5000);