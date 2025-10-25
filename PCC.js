const adviceNumber = document.querySelector('.content p');
const adviceText = document.querySelector('.content h2');
const diceButton = document.querySelector('.dice-wrapper');

async function fetchAdvice() {
    try {
        
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        
        adviceNumber.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`; 
    } 
    
    catch (error) {
        console.log('Error', error);
        adviceText.textContent = '"advice not found, try once again maybe"';
    }
}

diceButton.addEventListener('click', fetchAdvice);
fetchAdvice();