score = 0;
let brickRowCount = 9;
let columnBricks = 5;
let brickWidth = 50;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for (var c = 0; c < columnBricks; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function drawBricks() {
  for (var col = 0; col < columnBricks; col++) {
    for (var row = 0; row < brickRowCount; row++) {
      if (bricks[col][row].status == 1) {
        var brickX = row * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = col * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[col][row].x = brickX;
        bricks[col][row].y = brickY;
        canvasContext.beginPath();
        canvasContext.rect(brickX, brickY, brickWidth, brickHeight);
        canvasContext.fillStyle = "#9333ff";
        canvasContext.fill();
        canvasContext.closePath();
      }
    }
  }
}

function brokeBreaks() {
  for (var col = 0; col < columnBricks; col++) {
    for (var row = 0; row < brickRowCount; row++) {
      var b = bricks[col][row];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          newPositionY = -newPositionY;
          b.status = 0;
          score++;
          updateScore(score);
          console.log(score);
          if (score == brickRowCount * columnBricks) {
            alert("COOOOOOOOOOOOOOOOL !");
            document.location.reload();
          }
        }
      }
    }
  }
}

function updateScore(score) {
  let newScore = document.getElementById("score");
  newScore.innerHTML = score;
}
