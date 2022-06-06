let characters = [
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
    '-',
    '_',
    '.',
    '>',
    '<',
    '!',
    '?',
    '@',
    '+',
    '&',
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
];

let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let passwordThree = document.getElementById('password3');
let passwordFour = document.getElementById('password4');
let length = document.getElementById('length');
let error = document.getElementById('error');

function getLength() {
    let passwordLength = length.value;
    return passwordLength;
}

function generateRandom(e) {
    let one = '';
    let two = '';
    let three = '';
    let four = '';

    if (e >= 8 && e <= 20) {
        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * characters.length);
            one += characters[random];
        }

        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * characters.length);
            two += characters[random];
        }

        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * characters.length);
            three += characters[random];
        }

        for (let i = 0; i < e; i++) {
            let random = Math.floor(Math.random() * characters.length);
            four += characters[random];
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

function generatePassword() {
    generateRandom(getLength());
}

function copyPassword(e) {
    navigator.clipboard.writeText(e.target.value);

    e.target.previousElementSibling.style.display = 'block';

    setTimeout(() => {
        e.target.previousElementSibling.style.display = 'none';
    }, 3000);
}
