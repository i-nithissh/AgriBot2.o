
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav li a");
  const sections = document.querySelectorAll("section");

  function updateActiveLinkOnScroll() {
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
          let sectionTop = section.offsetTop - 80;
          let sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              document.querySelectorAll(".nav li").forEach((li) => li.classList.remove("active"));
              document.querySelector(`.nav a[href="#${section.id}"]`).parentElement.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", updateActiveLinkOnScroll);

  navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          let targetId = this.getAttribute("href").substring(1);
          let targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - 70,
              behavior: "smooth"
          });

          document.querySelectorAll(".nav li").forEach((li) => li.classList.remove("active"));
          this.parentElement.classList.add("active");
      });
  });
});


var words = ['protect', 'grow', 'guide'], 
    i = 0, 
    offset = 0, 
    forwards = true, 
    skip_count = 0, 
    skip_delay = 20, 
    speed = 100; // Adjust speed if needed

function wordflick() {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        skip_count++;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i = (i + 1) % words.length; // Loop through words
      }
    }

    var part = words[i].substr(0, offset);
    if (skip_count === 0) {
      offset += forwards ? 1 : -1;
    }

    document.querySelector('.word').textContent = part; // Update text dynamically
  }, speed);
}

document.addEventListener("DOMContentLoaded", wordflick);

