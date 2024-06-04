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