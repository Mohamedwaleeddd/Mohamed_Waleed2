const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = document.getElementById("message-text").value;
  const messageCode = messageText.split(" ").join("%20");
  console.log(messageCode);
  location.assign(`https://wa.me/+201556135667?text=${messageCode}`);
});
