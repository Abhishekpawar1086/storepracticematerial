document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const incrementButton = document.getElementById('increment');
    const resetButton = document.getElementById('reset');
    const countDisplay = document.getElementById('count');
    const userForm = document.getElementById('user-form');
    const formOutput = document.getElementById('form-output');
    const loadContentButton = document.getElementById('load-content');
    const dynamicContent = document.getElementById('dynamic-content');

    let text = "This is a typing effect. Click the button to see more!";
    let index = 0;
    let count = 0;

    // Typing Effect
    function typeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }
    typeText();

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Counter
    incrementButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        countDisplay.textContent = count;
    });

    // Form Submission
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        formOutput.textContent = `Hello, ${name}!`;
    });

    // Dynamic Content Loading
    loadContentButton.addEventListener('click', () => {
        const newContent = document.createElement('p');
        newContent.textContent = "This is dynamically loaded content!";
        dynamicContent.appendChild(newContent);
    });
});
