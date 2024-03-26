'use strict'

const generatePasswBtn = document.querySelector('#generete-password');
const generatorPasswElement = document.querySelector('#generated-password');

    if (!generatePasswBtn || !generatorPasswElement) {
        throw Error ('Elementos DOM não encontrados!');
    }

const getLetterLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUp = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getLetterUp());

generatePasswBtn.addEventListener('click', () => {
    console.log();
});

