const bunny = "🐰";
const panda = "🐼";
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

let buttons = document.getElementsByClassName("player");
console.log(buttons);
buttons[0].addEventListener("click", onClick);
buttons[1].addEventListener("click", onClick);
buttons[2].addEventListener("click", onClick);
buttons[3].addEventListener("click", onClick);
buttons[4].addEventListener("click", onClick);
buttons[5].addEventListener("click", onClick);
buttons[6].addEventListener("click", onClick);
buttons[7].addEventListener("click", onClick);
buttons[8].addEventListener("click", onClick);

let currentTurn = 1;

function onClick(event) {
  const buttonIndex = event.target.getAttribute("button-number");
  console.log(buttons[buttonIndex].innerText);

  if (buttons[buttonIndex].innerText === bunny) {
    return;
  }
  if (buttons[buttonIndex].innerText === panda) {
    return;
  }

  if (currentTurn === 1) {
    buttons[buttonIndex].innerText = bunny;
    currentTurn = 2;
  } else {
    buttons[buttonIndex].innerText = panda;
    currentTurn = 1;
  }
  console.log(buttons);
  Winning();
}

function Winning() {
  winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let combination of winningCombinations) {
    console.log(buttons[0].innerText);
    console.log(buttons[1].innerText);
    console.log(buttons[2].innerText);
    if (
      buttons[combination[0]].innerText === bunny &&
      buttons[combination[1]].innerText === bunny &&
      buttons[combination[2]].innerText === bunny
    ) {
      alert("Player 1 you win");
      window.location.reload();
      return;
    }
    if (
      buttons[combination[0]].innerText === panda &&
      buttons[combination[1]].innerText === panda &&
      buttons[combination[2]].innerText === panda
    ) {
      alert("Player 2 you win");
      window.location.reload();
      return;
    }
  }

  for (let button of buttons) {
    if (button.innerText === "") {
      return;
    }
  }
  alert("nadie ganó qlos, alv");
  window.location.reload();
}
