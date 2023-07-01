const voicePreview = document.getElementById('voicePreview');
const bufferTime = 2500; // Buffer time in milliseconds

// Function to display text with a typing animation
function displayTextWithAnimation(text) {
  voicePreview.textContent = ''; // Clear previous content

  let index = 0;
  const timer = setInterval(() => {
    voicePreview.textContent += text.charAt(index);
    index++;

    if (index >= text.length) {
      clearInterval(timer); // Stop the timer when all text is displayed
    }
  }, 60); // Typing speed (adjust as needed)
}

// Function to handle voice recording and navigation
function handleVoiceRecording() {
  const body = document.body;
  const recordingClass = 'recording';

  
  // Clear voice preview after buffer time
  setTimeout(() => {
    voicePreview.textContent = '';
  }, bufferTime);

  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'es-AR'; // Set the language for speech recognition
  console.log("Script is running");

  // Start speech recognition when the button is clicked
  recognition.start();

  // Add recording class to indicate recording is in progress
  body.classList.add(recordingClass);

  // Handle recognition results
  recognition.onresult = function(event) {
   
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log('Recognized text:', transcript);

    // Display voice preview with animation
    displayTextWithAnimation(transcript.toUpperCase());

    // Perform navigation based on recognized voice cues
    if (transcript.includes('video')) {
      // Add buffer time before navigating to the video page
      setTimeout(() => {
        window.location.href = 'video.html';
      }, bufferTime);
    } else if (transcript.includes('galería')) {
      // Add buffer time before navigating to the gallery page
      setTimeout(() => {
        window.location.href = 'galeria.html';
      }, bufferTime);
    } else if (transcript.includes('universidad')) {
      // Add buffer time before navigating to the location page
      setTimeout(() => {
        window.location.href = 'location.html';
      }, bufferTime);
    }
    else if (transcript.includes('sugerencias')) {
        // Add buffer time before navigating to the gallery page
        setTimeout(() => {
          window.location.href = 'sugerencias.html';
        }, bufferTime);}
        else if (transcript.includes('más información')) {
            // Add buffer time before navigating to the gallery page
            setTimeout(() => {
              window.location.href = 'about.html';
            }, bufferTime);}
         else {
      // Handle unrecognized cue
      console.log('Unrecognized voice cue:', transcript);
    }

    // Remove recording class to indicate recording has stopped
    body.classList.remove(recordingClass);
  };
}

// Attach event listener to the voice recording button
const voiceButton = document.getElementById('voiceButton');
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
