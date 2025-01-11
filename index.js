document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'a' && password === 'a') {
        window.location.href = 'first_page.html';
    } else {
        errorMessage.textContent = 'Incorrect username or password.';
        errorMessage.style.display = 'block';
        
        // Speak the error message
        const utterance = new SpeechSynthesisUtterance('Incorrect username or password.');
        speechSynthesis.speak(utterance);
    }
});
