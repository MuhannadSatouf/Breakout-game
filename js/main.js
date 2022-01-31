function main() {
  canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
  document.addEventListener("mousemove", mouseHandler, false);
  movePaddle();
  drawBricks();
  //Draw a bal on the Canvas
  drawBall();
  //Draw a paddle on the canvas
  drawPaddle();

  brokeBreaks();
  checkWalls();
}
