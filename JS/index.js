// ==========================================
// 🌙/☀️ LÓGICA DO DARK / LIGHT MODE
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica no navegador se o usuário já tinha escolhido o modo claro antes
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

// Evento de clique no botão para alternar os temas
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Troca o ícone e salva a preferência do usuário no navegador
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});


// ==========================================
// 📸 LÓGICA DO CARROSSEL DE IMAGENS
// ==========================================
let indice = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Botão de Próximo
document.querySelector('.next').addEventListener('click', function(){
    indice++;
    if(indice > totalSlides - 1) indice = 0;
    atualizarCarrossel();
});

// Botão de Anterior
document.querySelector('.prev').addEventListener('click', function(){
    indice--;
    if(indice < 0) indice = totalSlides - 1;
    atualizarCarrossel();
});

// Função que move os slides
function atualizarCarrossel(){
    slides.style.transform = `translateX(${-indice * 100}%)`;
}

// Troca automática a cada 5 segundos
setInterval(() => {
    indice++;
    if(indice > totalSlides - 1) indice = 0;
    atualizarCarrossel();
}, 5000);