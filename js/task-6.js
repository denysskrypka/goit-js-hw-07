function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const fragment = document.createDocumentFragment();

function createBoxes() {
  const boxesQuant = input.value;

  if (boxesQuant < 1 || boxesQuant > 100) {
    alert("Введіть число від 1 до 100");
    return;
  }

  destroyBoxes();

  let boxSize = 30;
  for (let i = 0; i < boxesQuant; i++) {
    const div = document.createElement("div");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    boxSize += 10;
  }
  boxes.appendChild(fragment);
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
