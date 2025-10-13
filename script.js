const list = [];

const inputValue = document.getElementById('input-list');
const tableList = document.getElementById('lista');
const writeWinner = document.getElementById('win');
const runEvent = document.getElementById('run-event');
const reloadPage = document.getElementById('reload');
const hideHeader = document.getElementById('result');
const hideContenders = document.getElementById('contenders');
const isAlpha = /^[a-zA-Z() ]+$/;

// Atualiza a lista visual
function renderList() {
    tableList.innerHTML = "";
    list.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        tableList.appendChild(li);
    });
}

inputValue.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        clickMe();
    }
});

function clickMe() {
    const nome = inputValue.value.trim();
    if (nome === "") {
        alert("Nenhum nome para inserir");
    } else if (!nome.match(isAlpha)) {
        alert("Nome inválido. Use apenas letras e espaços.");
    } else if (list.includes(nome)) {
        alert("Esse nome já foi inserido!");
    } else {
        list.push(nome);
        renderList();
        inputValue.value = "";
        inputValue.focus();
        hideContenders.style.opacity = "1";
        hideHeader.style.opacity = "1";
        runEvent.style.opacity = "1";
    }
}

function resetBtn() {
    inputValue.value = "";
    list.length = 0;
    renderList();
    writeWinner.innerHTML = "";
    hideContenders.style.opacity = "0";
    hideHeader.style.opacity = "0";
    runEvent.style.opacity = "0";
    reloadPage.innerHTML = "";
    hideHeader.style.color = "";
    inputValue.focus();
}

function randomGen() {
    const len = list.length;
    if (len < 1) {
        alert("Nenhum nome foi inserido");
        return;
    }
    const result = Math.floor(Math.random() * len);
    writeWinner.innerHTML = `
        <div id="winner" class="animate-bottom">
            <h2>Parabéns,</h2>
            <p>${list[result]}</p>
        </div>
    `;
    runEvent.style.opacity = "0";
    hideHeader.style.color = "transparent";
    setTimeout(showPage, 2000);
}

function showPage() {
    const winnerDiv = document.getElementById("winner");
    if (winnerDiv) {
        winnerDiv.style.display = "block";
    }
    reloadPage.innerHTML = `<button id="reload-btn" onclick="window.location.reload()">recarregar</button>`;
    const reloadBtn = document.getElementById("reload-btn");
    if (reloadBtn) {
        reloadBtn.style.opacity = "1";
    }
}
