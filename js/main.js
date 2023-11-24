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


//contact form
const contactBtb = document.getElementById("contact-button");
const messageTxt = document.getElementById("message-text");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const msgCode = messageTxt.value.split(" ").join("%20");
  console.log(msgCode);
  location.assign(`https://wa.me/+201556135667?text=${msgCode}`);
})
