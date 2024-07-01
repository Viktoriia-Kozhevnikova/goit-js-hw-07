function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputNum = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


function createBoxes(amount) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();

  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    boxSize += 10;
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
   boxesContainer.innerHTML = "";
}

buttonCreate.addEventListener("click", () => {
  const amount = parseInt(inputNum.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = ""; 
  };
});

buttonDestroy.addEventListener("click", () => {
  destroyBoxes(); 
});