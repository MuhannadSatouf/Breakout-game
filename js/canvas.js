//Create My Canvas that will contains everything
var canvas = document.getElementById("myCanvas");

//Create 2D variables
var canvasContext = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;

function drawBall() {
  canvasContext.beginPath();
  canvasContext.arc(x, y, 10, 0, Math.PI * 2);
  canvasContext.fillStyle = "#0095DD";
  canvasContext.fill();
  canvasContext.closePath();
}

function draw() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
}

setInterval(draw, 10);
