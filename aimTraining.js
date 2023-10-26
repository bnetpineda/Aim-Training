let points = 0;
      document.getElementById("points").textContent = "Points: " + points;

      function changePosition() {
        const myElement = document.getElementById("button");
        const randomInt = Math.floor(Math.random() * 80) + 10;
        myElement.style.left = randomInt + "%";

        const imgElement = document.createElement("img");
        imgElement.src = "images/dot.png";
        myElement.innerHTML = "";
        myElement.appendChild(imgElement);
      }

      function click() {
        const buttonElement = document.getElementById("button");
        buttonElement.addEventListener("click", function () {
          points += 1;
          document.getElementById("points").textContent = "Points: " + points;
          document.getElementById("points").textContent = "Points: " + points;
        });
      }
      setInterval(changePosition, 1000);
      click();