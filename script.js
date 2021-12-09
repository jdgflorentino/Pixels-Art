function pixelBoard() {

    main = document.getElementById('main');
    for (let i = 0; i < 5; i += 1) {
        let elementSection = document.createElement('section');
        elementSection.id = 'pixel-board';
        main.appendChild(elementSection);
    }

    elementSection = document.querySelectorAll('#pixel-board');

    for (let j = 0; j < elementSection.length; j += 1) {

        for (let k = 0; k < elementSection.length; k += 1) {
            let elementDiv = document.createElement('div');
            elementDiv.className = 'pixel';
            elementSection[j].appendChild(elementDiv);
        }
    }
}

pixelBoard();