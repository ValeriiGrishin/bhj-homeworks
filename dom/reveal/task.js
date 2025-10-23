window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');    
    reveals.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const isVisible = elementPosition.top < window.innerHeight && elementPosition.bottom > 0;      
        if (isVisible) {
            element.classList.add('reveal_active');
        }
    });
});