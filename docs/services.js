document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");
  
    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
  
        services.forEach(service => {
            const boxTop = service.getBoundingClientRect().top;
  
            if (boxTop < triggerBottom) {
                service.classList.add("visible");
            }
        });
    }
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load
  });

  