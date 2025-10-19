let dead = 0, lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        // Проверка через className.includes
        if (this.className.includes('hole_has-mole')) {
            dead++;
            document.getElementById('dead').textContent = dead;
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
        }
        
        if (dead === 10) {
            alert('Победа!');
            resetGame();
        } else if (lost === 5) {
            alert('Проигрыш!');
            resetGame();
        }
    };
}

function resetGame() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = '0';
    document.getElementById('lost').textContent = '0';
}