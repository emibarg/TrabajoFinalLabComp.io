const voicePreview = document.getElementById('voicePreview');
const bufferTime = 2500; 


function displayTextWithAnimation(text) {
  voicePreview.textContent = ''; 

  let index = 0;
  const timer = setInterval(() => {
    voicePreview.textContent += text.charAt(index);
    index++;

    if (index >= text.length) {
      clearInterval(timer); 
    }
  }, 60); 
}


function handleVoiceRecording() {
  const body = document.body;
  const recordingClass = 'recording';

  
 
  setTimeout(() => {
    voicePreview.textContent = '';
  }, bufferTime);

  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'es-AR'; 
  console.log("Script is running");

  
  recognition.start();


  body.classList.add(recordingClass);

  
  recognition.onresult = function(event) {
   
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log('Recognized text:', transcript);

   
    displayTextWithAnimation(transcript.toUpperCase());


    if (transcript.includes('video')) {
     
      setTimeout(() => {
        window.location.href = 'video.html';
      }, bufferTime);
    } else if (transcript.includes('galería')) {
     
      setTimeout(() => {
        window.location.href = 'galeria.html';
      }, bufferTime);
    } else if (transcript.includes('universidad')) {
     
      setTimeout(() => {
        window.location.href = 'location.html';
      }, bufferTime);
    }
    else if (transcript.includes('sugerencias')) {
       
        setTimeout(() => {
          window.location.href = 'sugerencias.html';
        }, bufferTime);}
        else if (transcript.includes('más información')) {
            
            setTimeout(() => {
              window.location.href = 'about.html';
            }, bufferTime);}
         else {
     
      console.log('Unrecognized voice cue:', transcript);
    }

  
    body.classList.remove(recordingClass);
  };
}


const voiceButton = document.getElementById('voiceButton');
voiceButton.addEventListener('click', handleVoiceRecording);


const images = [
  'image1.png',
  'image2.png',
  'image3.png',
  
];


function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const image = new Image();
    image.src = images[i];
  }
}


preloadImages();
