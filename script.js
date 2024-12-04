const colors = [
  "crimson", "coral", "aquamarine", "gold", "orchid",
  "peachpuff", "plum", "rosybrown", "salmon", "slateblue"
];

let selectedColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementById("colors-list").textContent = colors.join(", ");

function checkGuess() {
  const userGuess = document.getElementById("user-guess").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userGuess === selectedColor) {
    feedback.textContent = "Parabéns! Você acertou!";
    document.body.style.backgroundColor = selectedColor;
  } else if (userGuess < selectedColor) {
    feedback.textContent = "Dica: sua cor está antes da cor correta na ordem alfabética.";
  } else {
    feedback.textContent = "Dica: sua cor está depois da cor correta na ordem alfabética.";
  }
}