const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');
const loading = document.getElementById('loading');

// Senha correta: 21/08/2025
const correctPassword = "21082025";

loginBtn.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    errorMsg.textContent = "";
    loading.classList.remove("hidden");

    // Aguardar 2s antes de redirecionar
    setTimeout(() => {
      window.location.href = "index2.html";
    }, 2000);

  } else {
    errorMsg.textContent = "Senha incorreta. Tente novamente.";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

// Permite Enter
passwordInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') loginBtn.click();
});