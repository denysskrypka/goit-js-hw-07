function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
    }

    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        return;
    }

    createBoxes(amount);
    input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);