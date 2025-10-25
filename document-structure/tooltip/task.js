const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

let currentLink = null;

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (currentLink === this) {
            tooltip.classList.remove('tooltip_active');
            currentLink = null;
            return;
        }
        
        currentLink = this;
        tooltip.textContent = this.title;
        tooltip.classList.add('tooltip_active');
        
        const rect = this.getBoundingClientRect();
        const position = this.getAttribute('data-position') || 'top';
        
        switch(position) {
            case 'top':
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
                break;
            case 'bottom':
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.bottom + 5) + 'px';
                break;
            case 'left':
                tooltip.style.left = (rect.left - tooltip.offsetWidth - 5) + 'px';
                tooltip.style.top = rect.top + 'px';
                break;
            case 'right':
                tooltip.style.left = (rect.right + 5) + 'px';
                tooltip.style.top = rect.top + 'px';
                break;
        }
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('has-tooltip')) {
        tooltip.classList.remove('tooltip_active');
        currentLink = null;
    }
});

window.addEventListener('scroll', function() {
    tooltip.classList.remove('tooltip_active');
    currentLink = null;
});