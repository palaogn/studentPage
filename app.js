const body = document.body;

const yellowColor = '#ffcd4b'
let currentColor = 'black';

const page = document.getElementsByClassName('page')[0];
const colourButton = document.getElementsByClassName('colour-button')[0];
const colorText = document.getElementById('color-text');

const addYellowLabel = () => {
    const yellowLabel = document.createElement('div');
    yellowLabel.innerText = "Yellow";
    colorText.append(yellowLabel);
}

const removeYellowLabel = () => {
    // const yellowLabel = document.getElementsByClassName('yellowLabel')[0];
    // yellowLabel.remove();
    colorText.innerText = "";
}

const changeBackgroundColor = () => {
   
    if(currentColor === 'black') {
        currentColor = 'yellow';
        page.style.backgroundColor = yellowColor;
        colourButton.innerHTML = 'Reset';
        addYellowLabel();
    } else {
        currentColor = "black";
        page.style.backgroundColor = 'black';
        colourButton.innerHTML = 'What is my favorite colour?';
        removeYellowLabel();
    }
}



colourButton.addEventListener('click', changeBackgroundColor)

document.addEventListener('keyup', function (event) {
if(event.key === 't') {
    changeBackgroundColor()
}
   
})