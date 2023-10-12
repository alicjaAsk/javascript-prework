{
  function playGame(playerInput) {
    clearMessages();

    const getMoveName = function (computerMove) {
      if (computerMove == 1) {
        return "kamień";
      } else if (computerMove == 2) {
        return "papier";
      } else if (computerMove == 3) {
        return "nożyce";
      }
      printMessage("Mój ruch to: " + computerMove);
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    console.log("moves:", computerMove, playerMove);

    const displayResult = function (computerMove, playerMove) {
      printMessage("Zagrałem " + computerMove + ", a Ty " + playerMove);

      if (computerMove == "kamień" && playerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (computerMove == "kamień" && playerMove == "nożyce") {
        printMessage("Przegrywasz, następnym razem się uda:)");
      } else if (computerMove == "kamień" && playerMove == "kamień") {
        printMessage("Mamy remis");
      } else if (computerMove == "kamień" && playerMove == "kamień") {
        printMessage("Remis");
      } else if (computerMove == "papier" && playerMove == "papier") {
        printMessage("Remis");
      } else if (computerMove == "papier" && playerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (computerMove == "papier" && playerMove == "kamień") {
        printMessage("Ja wygrywam!");
      } else if (computerMove == "nożyce" && playerMove == "papier") {
        printMessage("Ja wygrywam!");
      } else if (computerMove == "nożyce" && playerMove == "nożyce") {
        printMessage("Remis");
      } else {
        printMessage("Ty wygrywasz!");
      }
    };
    displayResult(computerMove, playerMove);
  }
  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
