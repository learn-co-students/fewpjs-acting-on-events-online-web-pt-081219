// Your code here
const dodger = document.getElementById("dodger");


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key ==="ArrowRight") {
        moveDodgerRight();
    }
    if (e.key ==="ArrowDown") {
        moveDodgerDown();
    }
    if (e.key ==="ArrowUp") {
        moveDodgerUp();
    }
  });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 10}px`;
    }
  }

  function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
   
    if (bottom >= 0) {
      dodger.style.bottom = `${bottom - 10}px`;
    }
  }
  function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
   
    if (bottom >= 0) {
      dodger.style.bottom = `${bottom + 10}px`;
    }
  }