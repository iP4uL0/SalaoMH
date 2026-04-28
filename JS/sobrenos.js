// ==========================================
// 🌙/☀️ LÓGICA DO DARK / LIGHT MODE (Página Sobre)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica a preferência salva
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