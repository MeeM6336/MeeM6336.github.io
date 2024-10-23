function type() {
    const currentWord = wordChoices[i];

    if(isDeleting) {
        textElement.innerHTML = currentWord.substring(0,j-1);
        j--;

        if(j == 0 ) {
            isDeleting = false;
            i = (i + 1) % wordChoices.length;
        }
    }

    else {
        textElement.innerHTML = currentWord.substring(0, j + 1);
        j++;
    
        if (j == currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
            return;
        }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
}

const textElement = document.querySelector('.js-profile-title')
const wordChoices = ["developer", "student", "blogger"]; // List of words
let i= 0, j = 0; // i=word index and j=char index
let typingSpeed = 100, deletingSpeed = 100, delayBetweenWords = 1500;
let isDeleting = false;

type();