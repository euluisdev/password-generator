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

const getNumber = () => {
    return Math.floor(Math.random() * 10);
}

const getSymbol = () => {
    const symbols = "()[]{}=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLower, getLetterUp, getNumber, getSymbol) => {
    let password = '';

    const passwordLength = 10;

    const generators = [getLetterLower, getLetterUp, getNumber, getSymbol]

    for (let i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            console.log(randomValue);
        });
    }
}

generatePasswBtn.addEventListener('click', () => {
    generatePassword(getLetterLower, getLetterUp, getNumber, getSymbol);
});

