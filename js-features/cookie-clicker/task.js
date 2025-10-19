const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let lastClick = 0;

cookie.onclick = function() {
    //Увеличиваем счетчик
    counter.textContent = Number(counter.textContent) + 1;
    
    //Чередуем размер
    cookie.width = cookie.width === 200 ? 180 : 200;
    cookie.height = cookie.width; // сохраняем пропорции
    
    //Скорость клика
    const speedElement = document.getElementById('clicker__speed');
    if (!speedElement) {
        // Создаем элемент для скорости если его нет
        const speedDiv = document.createElement('div');
        speedDiv.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span>';
        counter.parentNode.appendChild(speedDiv);
    }
    
    const now = Date.now();
    if (lastClick > 0) {
        const speedValue = (1000 / (now - lastClick)).toFixed(2);
        document.getElementById('clicker__speed').textContent = speedValue;
    }
    lastClick = now;
};