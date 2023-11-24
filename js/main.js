//Header

let header = `<nav>
    <div id="show" onclick="show()" style="cursor:pointer;">
        <div class="line"></div>
        <div class="line2"></div>
    </div>
    
  <img src="imgs/logo.webp" width="3rem" alt="mw-logo">
  
  </nav>
  
  <!-- Menu Box -->
  <aside align="center">

  <div align="center">
  <img src="imgs/logo2.webp" alt="logo">
  <h2><span>M</span>ohamed Waleed</h2>
  <ul>
  <li class="hover-underline-animation"><a  href="#">Home</a></li>
  <li class="hover-underline-animation"><a href="#about">About</a></li>
  <li class="hover-underline-animation"><a  href="#p">Projects</a></li>
  <li class="hover-underline-animation"><a  href="https://wa.me/+201282758797">Contact</a></li>
  </ul>
    </div>
  </aside>
  
  <!-- Desktop Navbar -->
  <header>
    <h2><span>M</span>ohamed Waleed</h2>
    <br><br>
    <a class="hover-underline-animation" href="#">Home</a>
    <a class="hover-underline-animation" href="#about">About</a>
    <a class="hover-underline-animation" href="#p">Projects</a>
    <a class="hover-underline-animation" href="https://wa.me/+201556135667">Contact</a>
  </header>`;
const headerCont = document.getElementById("header");

headerCont.innerHTML = header;


window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 1200) {
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
//Show The Side Bar
const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');
const menuBox = document.querySelector('aside');

menuBox.style.left = "-200%";

function show() {
  if (menuBox.style.left === "-200%") {
    line2.style.marginBottom = "5px";
    line2.style.position = "absolute";
    line2.style.transform = "rotate(130deg)";
    line.style.transform = "rotate(50deg)";
    line.style.marginTop = "1px";
    menuBox.style.left = "0px";
  }

  else if (menuBox.style.left === "0px") {
    line2.style.marginBottom = "0px";
    line2.style.position = "relative";
    line2.style.transform = "rotate(360deg)";
    line.style.transform = "rotate(360deg)";
    line.style.marginTop = "0px";

    menuBox.style.left = "-200%";
  }
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

function ui(){
  document.querySelector('.images').style.display = "flex";
  document.querySelector('.p').style.display = "none";
}
function frontEnd(){
  document.querySelector('.images').style.display = "none";
  document.querySelector('.p').style.display = "flex";
}

//dark mode

function dark() {
  var element = document.body;
  element.classList.toggle("body");
}




//contact form


const contact = document.getElementById("contact");
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = document.getElementById("message-text").value;
  const messageCode = messageText.split(" ").join("%20");
  console.log(messageCode);
  location.assign(`https://wa.me/+201556135667?text=${messageCode}`);
});
