var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

var imgOrder = ["20", "21", "23", "19", "22", "27", "26", "24", "25"];
const shuffledArray = imgOrder.sort((a, b) => 0.5 - Math.random());

var correctOrder = ["19", "20", "21", "22", "23", "24", "25", "26", "27"];

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = imgOrder.shift() + ".jpg";

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);
    }
  }
};

function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherTile = this;
}

function dragEnd() {
  if (currTile.src.includes("blank")) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  checkPuzzle();

  document.getElementById("turns").innerText = turns;
}

function checkPuzzle() {
  let tiles = document.getElementById("board").getElementsByTagName("img");
  for (let i = 0; i < tiles.length; i++) {
    let filename = tiles[i].src.replace(/^.*[\\\/]/, "");
    let imgNumber = filename.slice(0, -4);
    if (imgNumber != correctOrder[i]) {
      return;
    }
  }
  setTimeout(function () {
    alert("Parabéns, você conseguiu!");
  }, 100);
}
