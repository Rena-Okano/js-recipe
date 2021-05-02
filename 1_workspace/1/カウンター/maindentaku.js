const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const multiplyButton = document.getElementById("multiply-button")
const minusButton = document.getElementById("minus-button")
const devideButton = document.getElementById("devide-button")
const equalButton = document.getElementById("equal-button")
const zeroButton = document.getElementById("0")
const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nineButton = document.getElementById("9")

let count = 0
oneButton.onclick = function() {
  count += 1
  display.textContent = count
}
