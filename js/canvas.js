//Create My Canvas that will contains everything
let canvas = document.getElementById("myCanvas");
/*
var canvasWidth = 580;
var canvasHeight = 420;
*/

var canvasWidth = canvas.offsetWidth;
var canvasHeight = canvas.offsetHeight;

//Create 2D variables
let canvasContext = canvas.getContext("2d");
let x = canvasWidth / 2;
let y = canvasHeight - 10;

//Position of the ball on the Canvas
let newPositionX = 3;
let newPositionY = -3;
let ballRadius = 5;

function checkWalls() {
  if (
    x + newPositionX > canvasWidth - ballRadius ||
    x + newPositionX < ballRadius
  ) {
    newPositionX = -newPositionX;
  }
  if (y + newPositionY < ballRadius) {
    newPositionY = -newPositionY;
  } else if (y + newPositionY > canvasHeight - ballRadius) {
    if (x > xPaddlePosition && x < xPaddlePosition + paddleWidth) {
      newPositionY = -newPositionY;
    } else {
      alert("Game Over");
      document.location.reload();
    }
  }
  x += newPositionX;
  y += newPositionY;
}
