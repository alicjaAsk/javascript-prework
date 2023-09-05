let playerInput = prompt("Wybierz swój ruch: 1- kamień, 2- papier; 3- nożyce.");

console.log("Ja wybrałam: " + playerInput);
let playerMove = "nieznany ruch";

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
} else if (playerInput != "1" || "2" || "3") {
  printMessage("Niewłaściwy wybór");
}

printMessage("Mój ruch to: " + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
let computerMove = "nieznany ruch";

if (randomNumber == "1") {
  computerMove = "kamień";
} else if (randomNumber == "2") {
  computerMove = "papier";
} else {
  computerMove = "nożyce";
}
printMessage("Twój ruch to: " + computerMove);

if (
  (computerMove == "kamień" && playerMove == "papier") ||
  (computerMove == "papier" && playerMove == "nożyce") ||
  (computerMove == "nożyce" && playerMove == "kamień")
) {
  printMessage("Tą rozgrywkę wygrywam ja!");
} else if (
  (computerMove == "kamień" && playerMove == "nożyce") ||
  (computerMove == "papier" && playerMove == "kamień") ||
  (computerMove == "nożyce" && playerMove == "papier")
) {
  printMessage("Tą rozgrywkę wygrywasz Ty!");
} else if (playerInput != "1" || "2" || "3") {
  printMessage("Niewłaściwy ruch przeciwnika");
} else {
  printMessage("Remis");
}
