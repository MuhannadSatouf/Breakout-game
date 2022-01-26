//Create My Canvas that will contains everything
let canvas = document.getElementById("myCanvas");

//Create 2D variables
let canvasContext = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let newPositionX = 2;
let newPositionY = -2;
let ballRadius = 5;

function drawBall() {
  canvasContext.beginPath();
  canvasContext.arc(x, y, ballRadius, 0, Math.PI * 2);
  canvasContext.fillStyle = "#0095DD";
  canvasContext.fill();
  canvasContext.closePath();
}

function draw() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  checkWall();
}

function checkWall() {
  if (
    x + newPositionX < ballRadius ||
    x + newPositionX > canvas.width - ballRadius
  ) {
    newPositionX = -newPositionX;
  }
  if (
    y + newPositionY > canvas.height - ballRadius ||
    y + newPositionY < ballRadius
  ) {
    newPositionY = -newPositionY;
  }

  x += newPositionX;
  y += newPositionY;
}
//For continues drawing
setInterval(draw, 10);
