let noButtonAttempts = 0;
let noButtonAttemptsForLove = 0; // New counter for the second "No" button

// Function to handle the "Click me" button and trigger the flower shower effect
function startFlowerShower() {
    const flowerContainer = document.getElementById("flowerContainer");
    const flowerCount = 50; // Number of flowers for the shower effect

    // Hide the "Click me!" button immediately after clicking it
    document.getElementById("startButton").style.display = "none";

    // Create flowers and append them to the flower container
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement("img");
        flower.src = "flower-image.png"; // Path to flower image
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 100}%`; // Random starting position
        flower.style.animationDelay = `${Math.random() * 2}s`; // Randomize start times for flowers
        flowerContainer.appendChild(flower);
    }

    // Hide the "Click me" button and show the continue buttons after 2 seconds
    setTimeout(() => {
        document.getElementById("continueButtonContainer").style.display = "flex"; // Show continue buttons
    }, 2000);
}

// Function to handle "No" button dodging (for "Do you want to send your love to me?" page)
function dodgeNoButton() {
    const noButton = document.getElementById("noButton");
    noButtonAttempts++;

    // Make "No" button move randomly when clicked
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // After 4 attempts, the "No" button disappears
    if (noButtonAttempts >= 4) {
        noButton.style.display = "none";
    }
}

// Function to handle the "No" button dodging on "Do you want to send your love to me?" page
function dodgeNoButtonForLove() {
    const noButtonLove = document.getElementById("noButtonLove");
    noButtonAttemptsForLove++;

    // Make "No" button move randomly when clicked
    const randomX = Math.random() * (window.innerWidth - noButtonLove.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButtonLove.offsetHeight);
    noButtonLove.style.position = "absolute";
    noButtonLove.style.left = `${randomX}px`;
    noButtonLove.style.top = `${randomY}px`;

    // After 4 attempts, the "No" button disappears
    if (noButtonAttemptsForLove >= 4) {
        noButtonLove.style.display = "none";
    }
}

// Function to handle the "Yes" button click on "Do you want to continue?" page
function continueFun() {
    // Hide the "Do you want to continue?" question and buttons
    document.getElementById("continueButtonContainer").style.display = "none";

    // Make sure the "Thank You" page is visible before fading out
    document.getElementById("thankYouPage").style.display = "flex";  // Ensure it's shown first

    // Wait for 2 seconds to show the "Thank You" content clearly
    setTimeout(() => {
        // Start fade-out animation after 2 seconds of visibility
        document.getElementById("thankYouMessage").style.animation = "fadeOut 3s forwards"; // Apply fade-out effect to text
        document.getElementById("leftHalf").style.animation = "fadeOut 3s forwards"; // Apply fade-out effect to image

        // Show the new question page after fade-out (3 seconds)
        setTimeout(() => {
            document.getElementById("thankYouPage").style.display = "none"; // Hide the "Thank You" page
            document.getElementById("newQuestionPage").style.display = "block"; // Show the new question page
        }, 3000); // After 3 seconds (fade-out duration), show the new page
    }, 2000); // Wait 2 seconds before starting the fade-out effect
}

// Function to handle the "Yes" button click on the "Do you want to send your love to me?" page
function sendLove() {
    // Hide the current page (Do you want to send your love to me?)
    document.getElementById("newQuestionPage").style.display = "none";

    // Show the heart page with the love message
    document.getElementById("heartPage").style.display = "flex"; // Show the heart page
}

// Function to handle the "Yes" button click for the last page (Haan Pauch Gya Pyaar)
function showHeartPage() {
    document.getElementById("heartPage").style.display = "flex";
}

// Adding event listeners for both "No" buttons
document.getElementById("noButtonContinue").addEventListener("click", dodgeNoButton);  // First "No" button
document.getElementById("noButtonLove").addEventListener("click", dodgeNoButtonForLove); // Second "No" button

// Adding event listener for the "Yes" buttons
document.getElementById("yesButtonContinue").addEventListener("click", continueFun);
document.getElementById("yesButtonLove").addEventListener("click", sendLove);
