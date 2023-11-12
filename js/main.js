const contact = document.getElementById("contact");
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = document.getElementById("message-text").value;
  const messageCode = encodeURIComponent(messageText);
  window.open(`https://wa.me/+201556135667?text=${messageCode}`, "_blank");
});
