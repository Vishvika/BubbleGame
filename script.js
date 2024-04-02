var timer = 10;
var score = 0;

var hitRn;

function incScore() {
  score += 10;

  document.querySelector("#scoreval").textContent = score;
}
function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitRn;
}
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 72; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#panelBtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#panelBtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document
  .querySelector("#panelBtm")
  .addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hitRn) {
      incScore();
      makeBubble();
      getNewHit();
    }
  });
runTimer();
makeBubble();
getNewHit();
