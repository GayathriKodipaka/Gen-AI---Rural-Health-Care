const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-IN';
recognition.continuous = true;

const startButton = document.getElementById('startRecording');
const iframeChat = document.getElementById('dialogflowChat');

// When the button is clicked
startButton.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    console.log("Voice Input:", transcript);

    // Send the transcript to Dialogflow iframe
    sendToDialogflow(transcript);
};

// Function to send text to the embedded iframe
function sendToDialogflow(text) {
    const chatWindow = iframeChat.contentWindow;
    chatWindow.postMessage({ queryInput: text }, "*");
}
