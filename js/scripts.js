document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');
});


// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');

// function showNextSlide() {
//     slides[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % slides.length;
//     slides[currentIndex].classList.add('active');
// }

// slides[currentIndex].classList.add('active');
// setInterval(showNextSlide, 7000);


// search animation
$(document).ready(function(){
    console.log('JavaScasdasdasdript Loaded');
    $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      $(".search-form").submit();
    });
});


// navbar slide
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('navbar-toggle');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-btn');
  closeButton.innerHTML = '&times;';
  sidebar.appendChild(closeButton);


  const navbarMenu = document.querySelector('.navbar-links');
  const clonedMenu = document.createElement('ul');
  
  navbarMenu.querySelectorAll('li').forEach(item => {
    if (!item.classList.contains('no-sidebar')) {
      const clonedItem = item.cloneNode(true);
      clonedMenu.appendChild(clonedItem);
    }
  });

  sidebar.appendChild(clonedMenu);
  document.body.appendChild(sidebar);

  toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });

  closeButton.addEventListener('click', function() {
    sidebar.classList.remove('active');
  });
});