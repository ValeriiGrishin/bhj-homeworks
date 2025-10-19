//Читаем стартовое значение таймера
let timerValue = parseInt(document.getElementById('timer').textContent);

//Создаем функцию обновления таймера
function updateTimer() {
    //Уменьшаем значение на 1
    timerValue--;
    
    //Обновляем отображение
    document.getElementById('timer').textContent = timerValue;
    
    //Проверяем окончание отсчета
    if (timerValue <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
    }
}

// Запускаем таймер (обновление каждую секунду)
const timerInterval = setInterval(updateTimer, 1000);