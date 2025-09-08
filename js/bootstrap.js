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

document.addEventListener("DOMContentLoaded", function () {
wordflick(); // Start the animation after the DOM is fully loaded
});

$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault(); // Prevent default anchor behavior
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800 // Animation duration in milliseconds (adjust as needed)
      );
    }
  });
});



 
