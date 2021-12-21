function colorPalette() {
    const color = ['black', '#FAC2A0', '#FAE46E', '#7AF9FA'];

    for (let i = 0; i < color.length; i += 1) {
        let elementSection = document.querySelector('#color-palette');
        let elementDiv = document.createElement('div');
        elementDiv.className = 'color';
        elementDiv.style.backgroundColor = color[i];
        elementSection.appendChild(elementDiv);
    }

    let elementDiv = document.querySelector('.color');
    elementDiv.className = 'color selected';
}

colorPalette();

function pixelBoard() {
    let main = document.getElementById('main');
    let elementSection = document.createElement('section');
    elementSection.id = 'pixel-board';
    main.appendChild(elementSection);

    for (let i = 0; i < 25; i += 1) {
        let elementDiv = document.createElement('div');
        elementDiv.className = 'pixel';
        elementSection.appendChild(elementDiv);
    }
}

pixelBoard(25);

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

function boardRemoved() {
    let buttonBoard = document.querySelector('#generate-board');

    buttonBoard.addEventListener('click', function() {
        let board = document.getElementById('pixel-board');
        board.parentNode.removeChild(board);

    });
}

boardRemoved();

function limite() {
    let main = document.getElementById('main');
    let board = document.createElement('section');
    board.id = 'pixel-board';
    main.appendChild(board);
    let inputBoard = document.getElementById('board-size');
    let buttonBoard = document.getElementById('generate-board');

    buttonBoard.addEventListener('click', function() {

        if (inputBoard.value > 0) {
            if (inputBoard.value < 5) {
                inputBoard.value = 5;
            } else if (inputBoard.value > 50) {
                inputBoard.value = 50;
            }
        } else {
            alert('Board inválido!');
        }

        let width = inputBoard.value * 42;
        board.style.width = width + 'px';
        let num = inputBoard.value ** 2;

        for (let i = 0; i < num; i += 1) {
            let elementDiv = document.createElement('div');
            elementDiv.className = 'pixel';
            board.appendChild(elementDiv);
            inputBoard.value = '';
        }
    });
}

limite();