const adviceNumber = document.querySelector('.content p');
const adviceText = document.querySelector('.content h2');
const diceButton = document.querySelector('.dice-wrapper');

async function fetchAdvice() {
    try {
        adviceText.classList.add('fetching');
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();523
        
        adviceNumber.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
        
        adviceText.classList.remove('fetching');
    } 
    
    catch (error) {
        console.log('Error', error);
        adviceText.textContent = '"advice not found, try once again maybe"';
    }
}

diceButton.addEventListener('click', fetchAdvice);
window.addEventListener('DOMContentLoaded', fetchAdvice);