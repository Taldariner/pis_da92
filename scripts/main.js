var messageArray = ["A programmer"];
var textPosition = 0;
var speed = 125;

typewriter = () => {
  var dateSpan = document.createElement("span");
  dateSpan.innerHTML = "_";
  dateSpan.className += " blinking";
  document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition);
  document.querySelector("#message").appendChild(dateSpan);

  if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

slidedown = () => {
  document.querySelector("#mainwrapper").transform = "translate(0, -100%)"; 
}

change_theme = () =>
{
  document.body.classList.toggle("dark-theme");
}

window.addEventListener("DOMContentLoaded", setTimeout(typewriter, 500));
window.addEventListener("DOMContentLoaded", change_theme);
//document.getElementById("icon").addEventListener("click", typewriter);
