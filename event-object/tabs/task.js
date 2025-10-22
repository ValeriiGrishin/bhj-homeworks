const allTabs = document.querySelectorAll('.tab');

allTabs.forEach(tab => {
    tab.addEventListener('click', function() {

        const tabsContainer = this.closest('.tabs');
        const tabsInThisContainer = tabsContainer.querySelectorAll('.tab');
        const contentsInThisContainer = tabsContainer.querySelectorAll('.tab__content');
        const tabIndex = Array.from(tabsInThisContainer).indexOf(this);
        tabsInThisContainer.forEach(t => t.classList.remove('tab_active'));
        contentsInThisContainer.forEach(c => c.classList.remove('tab__content_active'));

        this.classList.add('tab_active');
        contentsInThisContainer[tabIndex].classList.add('tab__content_active');
    });
});