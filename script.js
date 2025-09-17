// Contact Form Submission (dummy handler)

document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault(); // prevent actual form submission

  alert("Thank you for contacting me! I’ll get back to you soon.");

  this.reset();

});