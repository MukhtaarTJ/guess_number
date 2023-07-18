let btnCheck = document.querySelector(".btn_check");
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let btnRestart = document.querySelector(".btn_restart");
//  document.querySelector("#secretnumber").value = secretNumber;
let score = 20;
btnCheck.addEventListener("click", function() {
  let guess = Number(document.querySelector("#guess").value);
  if (!guess) {
    document.querySelector("#message").textContent = "input a number";
    // alert('kindly input a number')
    document.querySelector(".general").style.backgroundColor = "red";
    document.querySelector("#message").style.fontSize = "30px";
  } else if (guess === secretNumber) {
    document.querySelector("#message").textContent = "kudos!!! correct number";
    document.querySelector("#message").style.fontSize = "40px";
    document.querySelector(".general").style.backgroundColor = "#60b347";
    document.querySelector("#secretnumber").value = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 0 ) {
      document.querySelector("#message").textContent =
        "OOPS!!! Number Too High";
      document.querySelector(".general").style.backgroundColor = "red";
      document.querySelector("#message").style.fontSize = "30px";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      alert("GAME OVER!!!!!");
    }
  } else if (guess < secretNumber) {
    if (score > 0 ) {
      document.querySelector("#message").textContent = "OOPS!!! Number Too Low";
      document.querySelector("#message").style.fontSize = "30px";
      document.querySelector(".general").style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      alert("GAME OVER!!!!!");
    }
  }
});

btnRestart.addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".general").style.backgroundColor = " #e54831";
  document.querySelector("#message").textContent = "Start Guessing......";
  document.querySelector("#message").style.fontSize = "20px";
  document.querySelector(".secretnumber").value = Math.trunc(
    Math.random() * 20 + 1
  );
  
  document.querySelector("#guess").value = '';
});
