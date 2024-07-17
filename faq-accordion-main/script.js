document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const accordionToggle = header.querySelector('.accordion-toggle');

        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
            accordionToggle.textContent = '+';
            accordionToggle.style = 'background-color: #e522ff;'
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
            accordionContent.style.display = 'block';
            accordionToggle.textContent = '-';
            accordionToggle.style = 'background-color: #751c81;'
        }
    });
});
