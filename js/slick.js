$(document).ready(function(){
    $('.slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        draggable: false
    });
  });

  $(document).ready(function(){
    $('.feedback-slider-into').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        draggable: false
    });
  });


  $(document).ready(function(){
    $('.auto-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 910,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
              }
            }
        ]
      });
  });
  
