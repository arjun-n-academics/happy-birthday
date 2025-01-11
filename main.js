// JavaScript to play Happy Birthday voice
window.onload = function() {
    let name = "Your Name"; // Replace with the birthday person's name
    document.getElementById('name').textContent = name.split('').join(' ');

    // Voice for "Happy Birthday"
    let msg = new SpeechSynthesisUtterance('Happy Birthday ' + name);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Google UK English Male'; })[0];
    speechSynthesis.speak(msg);
};

// Hover effect to show abbreviation
const letterTiles = document.querySelectorAll('.letter-tile');

letterTiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        const abbr = tile.getAttribute('data-abbr');
        const abbrDiv = tile.querySelector('.abbr');
        abbrDiv.textContent = abbr;
    });
    tile.addEventListener('mouseleave', () => {
        const abbrDiv = tile.querySelector('.abbr');
        abbrDiv.textContent = '';
    });
});
