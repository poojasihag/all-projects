let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector(".new-btn");
let mainMsgContainer = document.querySelector(".main-winner-container");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  mainMsgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "x";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};
const showWinner = (winner) => {
  msgContainer.innerText = `congratulation,winner is ${winner}`;
  mainMsgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winningPattern) {
    
    let positionOne = boxes[pattern[0]].innerText;
    let positionTwo = boxes[pattern[1]].innerText;
    let positionThree = boxes[pattern[2]].innerText;
    if (positionOne != "" && positionTwo != "" && positionThree != "") {
      if (positionOne === positionTwo && positionTwo === positionThree) {
        console.log("Winner");
        showWinner(positionOne);
      }
    }
  }

};

resetBtn.addEventListener("click", resetGame);

newBtn.addEventListener("click", resetGame);
