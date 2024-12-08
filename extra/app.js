// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startRecording');
    const transcriptElement = document.getElementById('transcript');

    // Initialize the Speech Recognition API
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN'; // Set language to Indian English or any regional language
    recognition.continuous = true;

    // When voice recognition starts
    recognition.onstart = () => {
        console.log("Voice recognition started...");
    };

    // When the voice input result is available
    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        console.log("Voice Input:", transcript);
        transcriptElement.textContent = `You said: ${transcript}`;  // Display the transcript on the webpage

        // Send the transcript to backend for further processing (if needed)
        // For example, use an AJAX call or fetch API to send data to your server.
    };

    // Start voice recognition when the button is clicked
    startButton.addEventListener('click', () => {
        recognition.start();
    });
});
