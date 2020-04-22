function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  button.addEventListener("click", function () {
    //text.classList.toggle("hidden");
    if (text.hidden == false) {
      text.hidden = true;
    }else {
      text.hidden = "";
    }
    
  })
}
