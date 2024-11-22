let history = [];  

const choices = ['gunting', 'kertas', 'batu'];  

function getComputerChoice() {  
    const randomIndex = Math.floor(Math.random() * choices.length);  
    return choices[randomIndex];  
}  

function determineWinner(userChoice, computerChoice) {  
    if (userChoice === computerChoice) {  
        return 'seri';  
    } else if (  
        (userChoice === 'gunting' && computerChoice === 'kertas') ||  
        (userChoice === 'kertas' && computerChoice === 'batu') ||  
        (userChoice === 'batu' && computerChoice === 'gunting')  
    ) {  
        return 'menang';  
    } else {  
        return 'kalah';  
    }  
}  

function updateHistory(result) {  
    const historyEntry = {  
        timestamp: new Date().toLocaleString(),  
        result: result  
    };  
    history.push(historyEntry);  
    renderHistory();  
}  

function renderHistory() {  
    const historyList = document.getElementById('historyList');  
    historyList.innerHTML = '';  
    history.forEach(entry => {  
        const listItem = document.createElement('li');  
        listItem.textContent = `${entry.timestamp}: ${entry.result}`;  
        historyList.appendChild(listItem);  
    });  
}  

document.getElementById('startGame').onclick = function() {  
    const userChoice = prompt("Pilih: gunting, kertas, atau batu");  
    if (!choices.includes(userChoice)) {  
        alert("Pilihan tidak valid!");  
        return;  
    }  

    const computerChoice = getComputerChoice();  
    const result = determineWinner(userChoice, computerChoice);  
    alert(`Komputer memilih: ${computerChoice}\nHasil: ${result}`);  

    updateHistory(result);  
};