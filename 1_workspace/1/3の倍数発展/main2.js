const display = document.getElementById("display")
const button = document.getElementById("button")
const genkiFunction = function(number) {}
genkiFunction(24)
let count = 1
const countup = function() {
  if (count % 3 === 0) {
    console.log(count + "!!!!!!!")
  } else {
    console.log(count)
  }
  count += 1
}
setInterval(countup, 1000)

let id = null

button.onclick = function() {
  if (id === null) {
    // start
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
