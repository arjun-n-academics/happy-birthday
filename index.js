document.getElementById('entryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const magicWord = document.getElementById('magicWord').value;
    const errorMessage = document.getElementById('error-message');

    if (magicWord.toLowerCase() === 'dhanusha') {
        window.location.href = 'first_page.html';
    } else {
        errorMessage.textContent = 'Oops! That’s not the right word. Try again!';
        errorMessage.style.display = 'block';
        
        // Speak the error message
        const utterance = new SpeechSynthesisUtterance('Oops! That’s not the right word. Try again!');
        speechSynthesis.speak(utterance);
    }
});
