function hideSelf() {
  let button = document.querySelector(".hide-self-button");
  button.onclick = function (event) {
    event.target.hidden = true;
  }
}
