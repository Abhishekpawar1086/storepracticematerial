document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const clickMeButton = document.getElementById('click-me');
    const resetButton = document.getElementById('reset');

    let text = "This is a typing effect. Click the button to see more!";
    let index = 0;

    // Function to simulate typing effect
    function typeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }

    // Start typing effect on page load
    typeText();

    // Add event listener to "Click Me!" button
    clickMeButton.addEventListener('click', () => {
        alert('You clicked the button!');
    });

    // Add event listener to "Reset" button
    resetButton.addEventListener('click', () => {
        typingText.textContent = '';
        index = 0;
        typeText();
    });
});
