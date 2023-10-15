window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 900) {
    document.querySelector('.p').style.opacity = "1";
  }else{
   document.querySelector('.p').style.opacity = "0";
  }
});



window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 1000) {
    document.querySelector('.skills-cont').style.opacity = "1";
  }else{
   document.querySelector('.skills-cont').style.opacity = "0";
  }
});


window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
    document.querySelector('.about').style.left = "0";
  }
  else {
    document.querySelector('.about').style.left = "-100%";
  }
});

// Menu Box
function show(){
  document.querySelector('.menu').style.top = "0";
}
function d(){
  document.querySelector('.menu').style.top = "-100%";
}

//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Arrow Up Button
const arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    arrowUp.style.opacity = "1";
  } else {
    arrowUp.style.opacity = "0";
  }
});

arrowUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Animations
function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.querySelector('.cont').style.display = "none";
}


function ui(){
  document.querySelector('.images').style.display = "flex";
  document.querySelector('.p').style.display = "none";
}
function frontEnd(){
  document.querySelector('.images').style.display = "none";
  document.querySelector('.p').style.display = "block";
}