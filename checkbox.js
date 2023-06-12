var l = document.querySelectorAll(".container input").length;
var k = 0;

for (var i = 0; i < l; i++) {
  document.querySelectorAll(".container input")[i].addEventListener("change", function() {
    if (this.checked) {
      k++;
      if (k === l) {
        alert("Well done on completing all the exercises! Now it's time to play.");
        var a = new Audio("mah voice.mp3");
        a.play();
      }
    }
  });
}
