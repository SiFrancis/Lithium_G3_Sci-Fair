// Get the container element
var btnContainer = document.getElementById("btn-container");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("topic-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

function showTopic(name) {
    document.getElementById("main-desc").innerHTML = document.getElementById(name + "-desc").innerHTML;
    document.getElementById("main-text").innerHTML = document.getElementById(name).innerHTML;
}