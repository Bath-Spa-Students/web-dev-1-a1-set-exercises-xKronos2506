document.addEventListener("DOMContentLoaded", function() { // handles request on accessing elements such as id and classes from the html without waiting for the page to load.
    const soundContainers = document.querySelectorAll(".sounds"); //selects the following codes with the sound class and stores their value within the soundContainer variable.

    soundContainers.forEach(container => { // loops each element within the soundContainer variable using the forEach method, which iterates each container being accessed and excecutes the command that was instructed.
        container.addEventListener("click", function() { //specifies the following variables under soundContainer to be clickable.
            const audio = this.querySelector(".audio"); //once clicked, the code selects any following audio tag under the audio class, which would fetch their content under the audio var
            audio.currentTime = 0; //resets the audio playback to the beginning everytime it is being clicked (specific sound )
            audio.play(); //plays the audio associated with the container element
        });
    });
});

function textToSpeech() { //text to speech function
    let msg = document.getElementById("text-to-speech").value; //sets the msg variable through fetching the tts id value and its information
    let speech = new SpeechSynthesisUtterance(); //sets a new instance throught the specific object, which is a web API to adjust the speech sound and way of speaking
    speech.lang = "en-US"; // sets the speech language to english (to properly annotate any words specific to its language)
    speech.text = msg; //asigns the speech text variable (in order to process the following text needed to be TTs) to the msg variable
    speech.volume = 9; //sets the speech volume 
    speech.rate = 2; // sets the speed of how the text is being spoken 
    speech.pitch = 1; // sets on how high the tone for the speech text
    window.speechSynthesis.speak(speech); // calls out the speak function from the SpeechSynthesis object, which helps make the text to be spoken
    }