let profile = document.querySelector('.profile')
let menu = document.querySelector('.menu')
profile.onclick = function(){
    menu.classList.toggle('active');
}
function toggleProfileMenu(event) {
    event.preventDefault();
    var menu = document.getElementById("profileMenu");
    menu.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    var menu = document.getElementById("profileMenu");
    if (!event.target.matches(".profile-link")) {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    }
  };
  window.addEventListener("scroll", function () {
    const body = document.querySelector("body");
    if (window.scrollY > 0) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  });
  $(document).ready(function() {
    $('.dropdown-btn').on('click', function() {
      $(this).next('.dropdown-content').toggle();
    });
  });
