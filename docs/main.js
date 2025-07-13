document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation
    let isValid = true;
  
    // Validate Name
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name === "") {
      isValid = false;
      nameError.textContent = "Name is required.";
    } else {
      nameError.textContent = "";
    }
  
    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      isValid = false;
      emailError.textContent = "Email is required.";
    } else if (!emailRegex.test(email)) {
      isValid = false;
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }
  
    // Validate Subject
    const subject = document.getElementById("subject").value.trim();
    const subjectError = document.getElementById("subjectError");
    if (subject === "") {
      isValid = false;
      subjectError.textContent = "Subject is required.";
    } else {
      subjectError.textContent = "";
    }
  
    // Validate Message
    const message = document.getElementById("message").value.trim();
    const messageError = document.getElementById("messageError");
    if (message === "") {
      isValid = false;
      messageError.textContent = "Message is required.";
    } else {
      messageError.textContent = "";
    }
  
    // Submit the form if all fields are valid
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });

  /**
   * Scroll top button
   */
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);


AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
      let target = document.querySelector(window.location.hash);
      if (target) {
          setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 500); // Delay to ensure the page loads first
      }
  }
});





