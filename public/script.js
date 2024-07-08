let clickStartTime;
let progressBarInterval;
let countdownInterval;
let originalText;
let isHeldLongEnough = false;

function openPopup() {
    document.getElementById('popupContainer').style.display = 'flex';
}

function handleMouseDown() {
    const button = document.getElementById('clickButton');
    const progressBar = document.getElementById('progressBar');
    const buttonText = button.querySelector('span');
    originalText = buttonText.textContent;
    
    button.style.color = '#222222';
    button.style.borderColor = '#fff';
    button.classList.remove('success');
    isHeldLongEnough = false; // Reset the flag
    
    clickStartTime = Date.now();
    progressBar.style.width = '0%';
    
    let countdown = 9;
    buttonText.textContent = `Hold for ${countdown} seconds`;

    countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
            buttonText.textContent = `Hold for ${countdown} seconds`;
        } else {
            buttonText.textContent = 'Continue holding';
        }
    }, 1000);
    
    progressBarInterval = setInterval(() => {
        const elapsed = Date.now() - clickStartTime;
        const duration = 10000; // 10 seconds duration
        const progress = Math.min(1, elapsed / duration);
        progressBar.style.width = `${progress * 100}%`;
        
        if (progress >= 1) {
            clearInterval(progressBarInterval);
            clearInterval(countdownInterval);
            isHeldLongEnough = true;
        }
    }, 16); 
}

function handleMouseUp() {
    const button = document.getElementById('clickButton');
    const buttonText = button.querySelector('span');
    const message = document.getElementById('message');
    const clickDuration = (Date.now() - clickStartTime) / 1000;
    
    clearInterval(progressBarInterval);
    clearInterval(countdownInterval);
    document.getElementById('progressBar').style.width = '0';

    if (isHeldLongEnough) {
        button.classList.add('success');
        buttonText.textContent = 'Good Job! Click again';
        message.innerText = `Success! Captcha was successful.`;
        message.style.color = 'green';

        // Automatically close the popup after success
        setTimeout(() => {
            document.getElementById('popupContainer').style.display = 'none';
            // Redirect to the login page
        }, 1000);
    } else {
        button.style.color = '#222222';
        button.style.borderColor = '#d0d0d0';
        buttonText.textContent = originalText;
        message.innerText = `Please hold for 10 seconds.`;
        message.style.color = 'red';
    }
}

// Remove event listener for closing popup by clicking outside
/*
document.getElementById('popupContainer').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
*/
