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

pixelBoard();

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
    sectionButton.id = 'section-button'

    let button = document.createElement('button');
    button.id = 'clear-board';
    button.innerText = 'Limpar';
    sectionButton.appendChild(button);


    button.addEventListener('click', function() {

        let pixels = document.getElementsByClassName('pixel');

        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = 'white';

        }

    })


};

cleanBoard();