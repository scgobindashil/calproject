const button = document.querySelectorAll("button");
let display = document.querySelector("input");

button.forEach(function (button) {
  button.addEventListener("click", calc);
});

function calc(evt) {
  const buttonClick = evt.target.value;
  if (buttonClick === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (buttonClick === "C") {
    display.value = "";
  } else {
    display.value += buttonClick;
  }
}
