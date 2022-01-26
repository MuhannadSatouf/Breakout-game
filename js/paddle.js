let paddleHeight = 8;
let paddleWidth = 60;
let paddleX = (canvas.width - paddleWidth) / 2;

let right = false;
let left = false;

function drawPaddle() {
  canvasContext.beginPath();
  canvasContext.rect(
    paddleX,
    canvas.height - paddleHeight,
    paddleWidth,
    paddleHeight
  );
  canvasContext.fillStyle = "#00008B";
  canvasContext.fill();
  canvasContext.closePath();
}

function movePaddle() {
  document.addEventListener("keydown", moveKeyPressed, false);
  document.addEventListener("keyup", moveKeyNotPressed, false);
  moveLeftAndRight();
}

function moveKeyPressed(event) {
  if (
    event.key == "Right" ||
    event.key == "ArrowRight" ||
    event.keyCode == 68
  ) {
    right = true;
  } else if (
    event.key == "Left" ||
    event.key == "ArrowLeft" ||
    event.keyCode == 65
  ) {
    left = true;
  }
}

function moveKeyNotPressed(event) {
  if (
    event.key == "Right" ||
    event.key == "ArrowRight" ||
    event.keyCode == 68
  ) {
    right = false;
  } else if (
    event.key == "Left" ||
    event.key == "ArrowLeft" ||
    event.keyCode == 65
  ) {
    left = false;
  }
}

function moveLeftAndRight() {
  if (right) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (left) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
}
