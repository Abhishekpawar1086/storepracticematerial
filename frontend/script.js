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
    const fetchDataButton = document.getElementById('fetch-data');
    const apiData = document.getElementById('api-data');
    const toast = document.getElementById('toast');

    let text = [
        "This is a typing effect.",
        "It can display multiple lines of text.",
        "Enjoy the experience!"
    ];
    let lineIndex = 0;
    let charIndex = 0;
    let count = localStorage.getItem('count') || 0;
    countDisplay.textContent = count;

    // Typing Effect
    function typeText() {
        if (lineIndex < text.length) {
            if (charIndex < text[lineIndex].length) {
                typingText.textContent += text[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100); // Adjust typing speed here
            } else {
                typingText.textContent += '\n'; // Add a new line
                lineIndex++;
                charIndex = 0;
                setTimeout(typeText, 500); // Delay between lines
            }
        }
    }
    typeText();

    // Dark Mode Toggle
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Counter
    incrementButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
    });

    // Form Submission
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        formOutput.textContent = `Hello, ${name}!`;
        showToast(`Welcome, ${name}!`);
    });

    // Dynamic Content Loading
    loadContentButton.addEventListener('click', () => {
        const newContent = document.createElement('p');
        newContent.textContent = "This is dynamically loaded content!";
        dynamicContent.appendChild(newContent);
        showToast('New content loaded!');
    });

    // Fetch API Data
    fetchDataButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const data = await response.json();
            apiData.textContent = data.text;
            showToast('Random fact fetched!');
        } catch (error) {
            apiData.textContent = 'Failed to fetch data.';
            showToast('Failed to fetch data.');
        }
    });

    // Toast Notification
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});
