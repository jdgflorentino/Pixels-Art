function colorPalette() {

    let letters = '0123456789ABCDEF';
    let palette = ['black'];
    let color = '#';

    for (let j = 1; j <= 3; j++) {

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        palette[j] = color;
        color = '#';

    }

    for (let i = 0; i < palette.length; i += 1) {
        const elementSection = document.querySelector('#color-palette');
        let elementDiv = document.createElement('div');
        elementDiv.className = 'color';
        elementDiv.style.backgroundColor = palette[i];
        elementSection.appendChild(elementDiv);
    }

    const elementDiv = document.querySelector('.color');
    elementDiv.className = 'color selected';
}

colorPalette();

function pixelBoard(num, boardWidth) {
    const main = document.getElementById('main');
    const elementSection = document.createElement('section');
    elementSection.id = 'pixel-board';
    elementSection.style.width = boardWidth;
    elementSection.style.height = boardWidth;
    main.appendChild(elementSection);

    for (let i = 0; i < num; i += 1) {
        let elementDiv = document.createElement('div');
        elementDiv.className = 'pixel';
        elementSection.appendChild(elementDiv);
    }
}

pixelBoard(25, 210);

function colorSelected() {
    let elementColor = document.getElementsByClassName('color');

    for (let i = 0; i < elementColor.length; i += 1) {
        elementColor[i].addEventListener('click', function(event) {
            let elementSelected = document.getElementsByClassName('selected')[0];
            elementSelected.classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
}

colorSelected();

function pixelSelected() {
    let pixelBoard = document.querySelector('#pixel-board');

    pixelBoard.addEventListener('click', function(event) {
        let colorSelected = document.querySelector('.color.selected');

        let color = colorSelected.style.backgroundColor;
        event.target.style.backgroundColor = color;
    });
}

pixelSelected();

function cleanBoard() {
    let main = document.querySelector('#main');
    let firstSection = document.querySelector('#color-palette');
    let sectionButton = document.createElement('section');
    main.insertBefore(sectionButton, firstSection.nextSibling);
    sectionButton.id = 'section-button';

    let button = document.createElement('button');
    button.id = 'clear-board';
    button.innerText = 'Limpar';
    sectionButton.appendChild(button);

    button.addEventListener('click', function() {
        let pixels = document.getElementsByClassName('pixel');

        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = 'white';
        }
    });
}

cleanBoard();

// Requisitos Bônus

let sectionButton = document.querySelector('#section-button');
let inputBoard = document.createElement('input');
let buttonBoard = document.createElement('button');
inputBoard.id = 'board-size';
inputBoard.type = 'number';
inputBoard.min = '1';
buttonBoard.id = 'generate-board';
buttonBoard.innerText = 'VQV';
sectionButton.appendChild(inputBoard);
sectionButton.appendChild(buttonBoard);

function boardChanged() {
    let buttonBoard = document.querySelector('#generate-board');

    buttonBoard.addEventListener('click', function() {
        let board = document.getElementById('pixel-board');
        board.parentNode.removeChild(board);

        if (inputBoard.value > 0) {
            if (inputBoard.value < 5) {
                inputBoard.value = 5;
            } else if (inputBoard.value > 50) {
                inputBoard.value = 50;
            }
        } else {
            alert('Board Inválido!');
        }

        let num = inputBoard.value ** 2;
        let boardWidth = inputBoard.value * 42 + 'px';

        pixelBoard(num, boardWidth);
    });
}

boardChanged();