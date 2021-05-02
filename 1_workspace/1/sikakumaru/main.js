const figure = document.getElementById("figure")

figure.onclick = function() {
  console.log(figure.classList)
  if (figure.classList.value === "transition square") {
    figure.classList.add("rounded")
  } else if (figure.classList.value === "transition square rounded") {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else if (figure.classList.value === "transition square triangle") {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
