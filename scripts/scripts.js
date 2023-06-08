const keys = document.querySelectorAll('.key')
const showkeys = document.querySelector('.showkeys')
const switcher = document.querySelector('.switcher')
const pianokeys = document.querySelector('.piano-keys')

showkeys.addEventListener('change', ({ target }) => {

	if (target.checked) {
		switcher.classList.add('switcher-active')
		pianokeys.classList.remove('disabled-keys')
		return
	}

	switcher.classList.remove('switcher-active')
	pianokeys.classList.add('disabled-keys')

})




/*
    "Tab":       () => keyDown(keys[0]),
    "1":         () => keyDown(keys[1]),
    "q":         () => keyDown(keys[2]),
    "2":         () => keyDown(keys[3]),
    "w":         () => keyDown(keys[4]),
    "e":         () => keyDown(keys[5]),
    "4":         () => keyDown(keys[6]),
    "r":         () => keyDown(keys[7]),
    "5":         () => keyDown(keys[8]),
    "t":         () => keyDown(keys[9]),
    "6":         () => keyDown(keys[10]),
    "y":         () => keyDown(keys[11]),
    "u":         () => keyDown(keys[12]),
    "8":         () => keyDown(keys[13]),
    "i":         () => keyDown(keys[14]),
    "9":         () => keyDown(keys[15]),
    "o":         () => keyDown(keys[16]),
    "p":         () => keyDown(keys[17]),
    "-":         () => keyDown(keys[18]),
    "[":         () => keyDown(keys[19]),
    "=":         () => keyDown(keys[20]),
    "]":         () => keyDown(keys[21]),
    "Backspace": () => keyDown(keys[22]),
    "\\":        () => keyDown(keys[23]),
*/

const playNote = (note) => {
    const audio = new Audio(`./notes/${note}.wav`);
    audio.play();
}

const mouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if(key.className.includes('black')) {
        key.classList.add('black-pressed')
        return
    } key.style.background = '#ddd'
}

const mouseUp = (key) => {
    if(key.className.includes('black')) {
        key.classList.remove('black-pressed')
        return
    } key.style.background = 'white'
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => mouseDown(key))
    key.addEventListener('mouseup', () => mouseUp(key))
});

const keyDownMapper = {
    "Tab": () => mouseDown(keys[0]),
    "1": () => mouseDown(keys[1]),
    "q": () => mouseDown(keys[2]),
    "2": () => mouseDown(keys[3]),
    "w": () => mouseDown(keys[4]),
    "e": () => mouseDown(keys[5]),
    "4": () => mouseDown(keys[6]),
    "r": () => mouseDown(keys[7]),
    "5": () => mouseDown(keys[8]),
    "t": () => mouseDown(keys[9]),
    "6": () => mouseDown(keys[10]),
    "y": () => mouseDown(keys[11]),
    "u": () => mouseDown(keys[12]),
    "8": () => mouseDown(keys[13]),
    "i": () => mouseDown(keys[14]),
    "9": () => mouseDown(keys[15]),
    "o": () => mouseDown(keys[16]),
    "p": () => mouseDown(keys[17]),
    "-": () => mouseDown(keys[18]),
    "[": () => mouseDown(keys[19]),
    "=": () => mouseDown(keys[20]),
    "]": () => mouseDown(keys[21]),
    "Backspace": () => mouseDown(keys[22]),
    "\\": () => mouseDown(keys[23]),
}

const keyUpMapper = {
    "Tab": () => mouseUp(keys[0]),
    "1": () => mouseUp(keys[1]),
    "q": () => mouseUp(keys[2]),
    "2": () => mouseUp(keys[3]),
    "w": () => mouseUp(keys[4]),
    "e": () => mouseUp(keys[5]),
    "4": () => mouseUp(keys[6]),
    "r": () => mouseUp(keys[7]),
    "5": () => mouseUp(keys[8]),
    "t": () => mouseUp(keys[9]),
    "6": () => mouseUp(keys[10]),
    "y": () => mouseUp(keys[11]),
    "u": () => mouseUp(keys[12]),
    "8": () => mouseUp(keys[13]),
    "i": () => mouseUp(keys[14]),
    "9": () => mouseUp(keys[15]),
    "o": () => mouseUp(keys[16]),
    "p": () => mouseUp(keys[17]),
    "-": () => mouseUp(keys[18]),
    "[": () => mouseUp(keys[19]),
    "=": () => mouseUp(keys[20]),
    "]": () => mouseUp(keys[21]),
    "Backspace": () => mouseUp(keys[22]),
    "\\": () => mouseUp(keys[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    keyDownMapper[event.key]()
})
document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
})