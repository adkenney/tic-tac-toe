const player = (name) => {
  this.name = name;
  const marker = "";
  const playerTurn = true;
  return { name, playerTurn };
};

const playerOne = player("bob");
playerOne.marker = "X";
const playerTwo = player("dan");
playerTwo.marker = "O";
playerTwo.playerTurn = false;

const tiles = document.querySelectorAll("div .tile");
tiles.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (playerOne.playerTurn == true && e.target.textContent == "") {
      e.target.textContent = playerOne.marker;
      playerOne.playerTurn = false;
      playerTwo.playerTurn = true;
    }
    if (playerTwo.playerTurn == true && e.target.textContent == "") {
      e.target.textContent = playerTwo.marker;
      playerTwo.playerTurn = false;
      playerOne.playerTurn = true;
    }
  });
});
