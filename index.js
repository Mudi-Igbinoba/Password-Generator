//This array captures all the characters
const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
];

//This array captures only the alphabets
const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

//This array captures only alphabets and numbers
const alphasNumbers = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];

//This array captures only alphabets and symbols
const alphasSymbols = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
];

let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let passwordThree = document.getElementById('password3');
let passwordFour = document.getElementById('password4');
let length = document.getElementById('length');
let error = document.getElementById('error');
let symbol = document.getElementById('symbol');
let number = document.getElementById('number');
let one;
let two;
let three;
let four;

// A function that returns the length specified by the user
function getLength() {
    return length.value;
}

// This function create the password and takes in the password length and the character to use (array) as parameters
function createPassword(e, array) {
    if (e >= 8 && e <= 20) {
        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * array.length);
            one += array[random];
        }

        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * array.length);
            two += array[random];
        }

        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * array.length);
            three += array[random];
        }

        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * array.length);
            four += array[random];
        }

        passwordOne.value = one;
        passwordTwo.value = two;
        passwordThree.value = three;
        passwordFour.value = four;
        error.style.display = 'none';
    } else {
        passwordOne.value = '...';
        passwordTwo.value = '...';
        passwordThree.value = '...';
        passwordFour.value = '...';
        error.style.display = 'block';
    }
}

//creates a password based on the options given(with all characters, with only alphabets, with only alphabets and symbols, with only alphabets and numbers)
function setOptions(e) {
    one = '';
    two = '';
    three = '';
    four = '';

    if (symbol.checked === false && number.checked === false) {
        createPassword(e, characters);
    } else if (symbol.checked && number.checked) {
        createPassword(e, alphabets);
    } else if (symbol.checked === true && number.checked === false) {
        createPassword(e, alphasNumbers);
    } else {
        createPassword(e, alphasSymbols);
    }
}

//This function then generates the password to the interface while preventing the page from reloading when clicking the submit button
function generatePassword() {
    event.preventDefault();
    setOptions(getLength());
}

// This function sets the "click-to-copy" interaction
function copyPassword(e) {
    navigator.clipboard.writeText(e.target.value); //copies the value of the clciked object

    e.target.previousElementSibling.style.display = 'block'; //shows copied to clipboard when clicked

    setTimeout(() => {
        e.target.previousElementSibling.style.display = 'none';
    }, 3000);
}
