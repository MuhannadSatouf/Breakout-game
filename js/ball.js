function drawBall() {
  canvasContext.beginPath();
  canvasContext.arc(x, y, 5, 0, Math.PI * 2);
  canvasContext.fillStyle = "#9333ff";
  canvasContext.fill();
  canvasContext.closePath();
}
