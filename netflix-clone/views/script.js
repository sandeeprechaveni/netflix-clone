// Select all buttons
const buttons = document.querySelectorAll('.question');

// SVG icons
const cross = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
const plus = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
    <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const hiddenDiv = button.nextElementSibling; 
        const emoji = button.querySelector('.x'); 

        if (!emoji) {
            console.error(`No .x element found within button:`, button);
            return;
        }

        if (hiddenDiv.classList.contains('active')) {
            hiddenDiv.classList.remove('active');
            emoji.innerHTML = plus;
        } else {
            hiddenDiv.classList.add('active');
            emoji.innerHTML = cross;
        }
    });
});
