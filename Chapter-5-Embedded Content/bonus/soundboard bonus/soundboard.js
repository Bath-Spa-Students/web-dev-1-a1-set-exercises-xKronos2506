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