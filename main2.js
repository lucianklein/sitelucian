// Modo claro/escuro
const toggleBtn = document.getElementById('toggleTheme');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'white') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      toggleBtn.textContent = '☽';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      toggleBtn.textContent = '☼';
    }
  });
}

// Música
const musicBtn = document.getElementById('playMusic');
const bgMusic = document.getElementById('bgMusic');

if (musicBtn && bgMusic) {
  musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = '♥';
    } else {
      bgMusic.pause();
      musicBtn.textContent = '♡';
    }
  });
}

// Botão para acessar Lofi.html
const goLofiBtn = document.getElementById('goLofi');
if (goLofiBtn) {
  goLofiBtn.addEventListener('click', () => {
    window.location.href = "Lofi.html";
  });
}

// Corações flutuantes ao clicar ou arrastar
function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = x - 12 + 'px';
  heart.style.top = y - 12 + 'px';
  heart.textContent = '❤️';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1500);
}

document.addEventListener('click', e => createHeart(e.clientX, e.clientY));
document.addEventListener('mousemove', e => {
  if (e.buttons === 1) createHeart(e.clientX, e.clientY); // arrastar
});