var slider = document.getElementById("myRange");
var output = document.getElementById("num");
var progress = document.querySelector(".progress");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  var percent = (this.value - this.min) / (this.max - this.min) * 100;
  progress.style.width = percent + "%";
}
