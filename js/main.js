function main() {
  canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPaddle();
  movePaddle();
  drawBall();
  drawBricks();
  brokeBreaks();
  checkWalls();

  requestAnimationFrame(main);
}

main();
