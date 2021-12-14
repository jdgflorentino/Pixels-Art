function colorPalette() {
    elementSection = document.getElementById('color-palette');

    for (let i = 0; i < 4; i += 1) {
        let elementDiv = document.createElement('div');
        elementDiv.className = 'color';
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

};

colorSelected();