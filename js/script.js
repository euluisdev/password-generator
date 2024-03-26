'use strict'

const generatePasswBtn = document.querySelector('#generete-password');
const generatorPasswElement = document.querySelector('#generated-password');

    if (!generatePasswBtn || !generatorPasswElement) {
        throw Error ('Elementos DOM não encontrados!');
    }

const getLetterLower = () => {
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}

getLetterLower();

generatePasswBtn.addEventListener('click', () => {
    console.log();
});

