document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(function(rotator) {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;
        
        function rotate() {
            cases.forEach(function(caseItem) {
                caseItem.classList.remove('rotator__case_active');
            });
            
            const currentCase = cases[currentIndex];
            currentCase.classList.add('rotator__case_active');
            
            const speed = currentCase.dataset.speed || 1000;
            const color = currentCase.dataset.color;
            
            if (color) {
                currentCase.style.color = color;
            }
            
            currentIndex++;
            if (currentIndex >= cases.length) {
                currentIndex = 0;
            }
            
            setTimeout(rotate, speed);
        }
        
        rotate();
    });
});