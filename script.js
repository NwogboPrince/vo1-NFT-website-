$(document).ready(function () {  
  // Handle menu link clicks  
  $(".menu-links li a").click(function (e) {  
    $(".menu-links li.active").removeClass("active");  
    $(this).parent().addClass("active"); // $parent variable can be omitted  
  });  

  // Combine the hamburger icon click handlers into one  
  $(".hamburger-icon").click(function () {  
    $(".menu-links").toggleClass("left");  
    $(this).toggleClass("ham-style");  
  });  

  // Theme switch for dark/light mode  
  const themeSwitch = document.querySelector("#checkbox");  
  themeSwitch.addEventListener("change", () => {  
    document.body.classList.toggle("dark-theme");  
  });  
});





var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {
 
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}



function doThing() {
  var sliderinput = document.getElementById("sldr");
  var size = sliderinput.value();
}