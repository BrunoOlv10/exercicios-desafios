const button = document.getElementById("openModal");

button.onclick = function () {
  const fora = document.querySelector("div#fora");
  const dentro = document.querySelector("div#dentro");
  fora.style.visibility = "visible";
  dentro.style.visibility = "visible";
};

document.addEventListener("keydown", function (event) {
  const esc = event.key === "Escape";

  if (esc) {
    const fora = document.querySelector("div#fora");
    const dentro = document.querySelector("div#dentro");
    fora.style.visibility = "hidden";
    dentro.style.visibility = "hidden";
  }
});
