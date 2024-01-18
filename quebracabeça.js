var rows = 3;
var columns = 3;

var currTile;
var otherTile; 

var turns = 0;

var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
const shuffledArray = imgOrder.sort((a, b) => 0.5 - Math.random());

var correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

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
}

function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

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
    let imgNumber = filename.charAt(0);
    if (imgNumber != correctOrder[i]) {
      return;
    }
  }
  setTimeout(function () {
    alert("Parabéns, você conseguiu!");
  }, 100);
}