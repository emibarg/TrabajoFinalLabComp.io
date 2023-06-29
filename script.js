// Get reference to the voice recording button
const voiceButton = document.getElementById('voiceButton');

// Function to handle voice recording and navigation
function handleVoiceRecording() {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'es-AR'; // Set the language for speech recognition
    console.log("Script is running");
    // Start speech recognition when the button is clicked
    recognition.start();

    // Handle recognition results
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Recognized text:', transcript);

        // Perform navigation based on recognized voice cues
        if (transcript.includes('video')) {
            window.location.href = 'video.html';
        } else if (transcript.includes('galería')) {
            window.location.href = 'galeria.html';
        } else if (transcript.includes('universidad católica de córdoba')) {
            window.location.href = 'location.html';
        } else {
            // Handle unrecognized cue
            console.log('Unrecognized voice cue:', transcript);
        }
    };
}

// Attach event listener to the voice recording button
voiceButton.addEventListener('click', handleVoiceRecording);

// Optional: Add more images to the array
const images = [
    'image1.png',
    'image2.png',
    'image3.png',
    // Add more image file paths here
  ];
  
  // Function to preload images
  function preloadImages() {
    for (let i = 0; i < images.length; i++) {
      const image = new Image();
      image.src = images[i];
    }
  }
  
  // Call the preloadImages function
  preloadImages();
  