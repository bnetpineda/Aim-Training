let points = 0;
let difficulty,
  gameMode,
  start = false,
  time = 5;

function button(difficulty) {
  let spiderTrue = false;

  if (difficulty.includes("Spider")) {
    spiderTrue = true;
  }
  if (difficulty === "easy" || difficulty === "easySpider") {
    difficulty = 3;
  } else if (difficulty === "normal" || difficulty === "normalSpider") {
    difficulty = 2;
  } else if (difficulty === "hard" || difficulty === "hardSpider") {
    difficulty = 1;
  }
  document.getElementById("points").textContent = "Points: " + points;

  document.querySelectorAll(".button").forEach((button) => button.remove());

  const textElement = document.getElementById("textRemove");
  if (textElement) {
    textElement.innerHTML = "";
  }

  if (spiderTrue == true) {
    setInterval(function () {
      spideraddImage(difficulty);
    }, difficulty * 800);
    startTimer();
  } else {
    setInterval(function () {
      addImage(difficulty);
    }, difficulty * 800);
    startTimer();
  }
}

function addImage(difficulty) {
  let randNum = Math.floor(Math.random() * 80) + 10;
  document.getElementById("image-container").style.left = randNum + "%";
  document.getElementById("image").style.display = "block";
  document.getElementById("image").style.animation =
    "fadeOut " + difficulty * 800 + "ms forwards";
  setTimeout(() => {
    document.getElementById("image").style.display = "none";
  }, 750 * difficulty);
}
function spideraddImage(difficulty) {
  let randNum = Math.floor(Math.random() * 80) + 10;
  let randNum1 = Math.floor(Math.random() * 80) + 10;
  document.getElementById("image-container").style.left = randNum + "%";
  document.getElementById("image-container").style.top = randNum1 + "%";
  document.getElementById("image").style.display = "block";
  document.getElementById("image").style.animation =
    "fadeOut " + difficulty * 800 + "ms forwards";
  setTimeout(() => {
    document.getElementById("image").style.display = "none";
  }, 750 * difficulty);
}
function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = time;
}
function totalPoints() {
  let stringScore;
  if (points < 20){
    stringScore = "Failed"
  }else if(points > 20 && points <= 40){
    stringScore = "Good"
  }else if (points > 40){
    stringScore = "Excellent"
  }
  document.getElementById("totalScore").textContent = "A score of " + points + " is " + stringScore
  document.getElementById("totalScore").style.animation =
    "fadeIn 5s forwards";
}
function startTimer() {
  const countdownInterval = setInterval(function () {
    time -= 1;
    updateTimer();

    if (time === 0) {
      clearInterval(countdownInterval);
      totalPoints();
      setTimeout(function() {
        window.location.href = "index.html";
      }, 5000);
    }
  }, 1000);
}

if (time === 0) {
  clearInterval(addImage);
}

function removeImage() {
  document.getElementById("image").style.display = "none";
  points += 1;
  document.getElementById("points").textContent = "Points: " + points;
  updateTimer();
}

document.getElementById("image-container").addEventListener("click", removeImage);
document.getElementById("goBackButton").addEventListener("click", function () {
  window.history.back();
});