
// Data no Rodape
var data=new Date();
document.getElementById('data').innerHTML=data.getFullYear();

// Metodo para abertura da barra de navegacao lateral
function w3_open() {
document.getElementById("main").style.marginLeft = "0%";
document.getElementById("mySidenav").style.width = "50%";
document.getElementById("mySidenav").style.display = "block";
document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
document.getElementById("main").style.marginLeft = "0%";
document.getElementById("mySidenav").style.display = "none";
document.getElementById("openNav").style.display = "inline-block";
  }



// Slideshow script
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}
