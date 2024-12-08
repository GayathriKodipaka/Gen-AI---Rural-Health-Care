// Toggle chatbot visibility
function toggleChat() {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
}

// Send a message in the chat window
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
    const message = userInput.value.trim();

    if (message) {
        const userMessage = document.createElement("p");
        userMessage.textContent = You: ${message};
        chatBody.appendChild(userMessage);

        const botReply = document.createElement("p");
        botReply.textContent = Bot: I heard you say "${message}".;
        botReply.style.color = "blue";
        chatBody.appendChild(botReply);

        userInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
    }
}
// JavaScript function to handle the page redirection
function redirectToNextPage() {
    // This will redirect to the "nextPage.html"
    window.location.href = "pagevoice.html"; // Replace "nextPage.html" with your desired page
}