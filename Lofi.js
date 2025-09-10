const bgMusic = document.getElementById('bgMusic');
const secretBtn = document.getElementById('secretButton');
const secretImageContainer = document.getElementById('secretImageContainer');
const logoTop = document.getElementById('logoTop');

// Botão secreto abre/fecha imagem e inicia música
secretBtn.addEventListener('click', () => {
    if(secretImageContainer.style.display === 'none' || secretImageContainer.style.display === ''){
        secretImageContainer.style.display = 'block';
        if (bgMusic.paused) {
            bgMusic.play();
        }
    } else {
        secretImageContainer.style.display = 'none';
    }
});

// Ao clicar na imagem do canto superior esquerdo, vai pra index2.html
logoTop.addEventListener('click', () => {
    window.location.href = 'index2.html';
});

// ---------- Calendário fofo e contador ----------
const calendarEl = document.getElementById('calendar');
const daysCounterEl = document.getElementById('daysCounter');
const targetDate = new Date(2025, 7, 21); // Agosto = 7

function renderCalendar() {
    const month = targetDate.getMonth();
    const year = targetDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const daysHTML = [];
    for(let i=0;i<firstDay;i++){ daysHTML.push('<span class="day"></span>'); }
    for(let d=1; d<=lastDate; d++){
        if(d === targetDate.getDate()){
            daysHTML.push(`<span class="day highlight">${d}</span>`);
        } else {
            daysHTML.push(`<span class="day">${d}</span>`);
        }
    }
    calendarEl.innerHTML = daysHTML.join('');
}

function updateDaysCounter() {
    const now = new Date();
    const diffTime = now - targetDate;
    const diffDays = Math.floor(diffTime / (1000*60*60*24));
    daysCounterEl.textContent = `Se passaram ${diffDays} dias desde 21/08/2025`;
}

renderCalendar();
updateDaysCounter();
setInterval(updateDaysCounter, 60000);