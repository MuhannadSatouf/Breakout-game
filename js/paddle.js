let paddleHeight = 15;
let paddleWidth = 80;
// The Paddle wil be at the middle at the beginning
let xPaddlePosition = (canvasWidth - paddleWidth) / 2;
//Right and Left movements.
let right = false;
let left = false;

function drawPaddle() {
  canvasContext.beginPath();
  canvasContext.rect(
    xPaddlePosition,
    canvasHeight - paddleHeight,
    paddleWidth,
    paddleHeight
  );
  canvasContext.fillStyle = "#9333ff";
  canvasContext.fill();
  canvasContext.closePath();
}

function movePaddle() {
  document.addEventListener("mousemove", mouseHandler, false);
  document.addEventListener("keydown", moveKeyPressed, false);
  document.addEventListener("keyup", moveKeyNotPressed, false);

  moveLeftAndRight();
  //mouseHandler();
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
  if (right && xPaddlePosition < canvasWidth - paddleWidth) {
    xPaddlePosition += 7;
  } else if (left && xPaddlePosition > 0) {
    xPaddlePosition -= 7;
  }
}

function mouseHandler(event) {
  var x = event.clientX - canvas.offsetLeft;
  if (x > 0 && x < canvasWidth) {
    paddleX = x - paddleWidth / 2;
  }
}
