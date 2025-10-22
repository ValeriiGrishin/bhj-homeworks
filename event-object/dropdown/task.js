const dropdowns = [...document.querySelectorAll('.dropdown')];

dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = [...dropdown.querySelectorAll('.dropdown__item')];
    
    button.addEventListener('click', function() {
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
            }
        });

        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            button.textContent = this.textContent;
            list.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', function(event) {
    if (event.target.closest('.dropdown__value')) {
        return;
    }
    dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    });
});