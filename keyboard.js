const Keyboard = window.SimpleKeyboard.default;
const InputField = document.getElementById("input");
const checkbox = document.getElementById("checkbox");
const keyboardVirtaul = document.getElementById("virtualKeyboard");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    keyboardVirtaul.classList.remove("hidden");
  } else {
    keyboardVirtaul.classList.add("hidden");
  }
});
console.log("hello keyboard", Keyboard);
let keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});
/**
 * Update simple-keyboard when input is changed directly
 */
InputField.addEventListener("input", (event) => {
  console.log(event.target.value);
  keyboard.setInput(event.target.value);
});

console.log(Keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle,
  });
}
