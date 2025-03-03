$('.all-cart-sec-feature-nano').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// slick slider 2 

$('.all-your-program').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10px' 
            }
        }
    ]
});

// Toggle Button

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Back to Top 

document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
      var scrolled = window.scrollY;
      var goTopButton = document.querySelector('.top-bar');
  
      if (scrolled > 250) {
        goTopButton.style.display = 'block';
        setTimeout(function() {
          goTopButton.style.opacity = 1;
        }, 0); 
      } else {
        goTopButton.style.opacity = 0;
        setTimeout(function() {
          if (window.scrollY <= 250) { 
            goTopButton.style.display = 'none';
          }
        }, 600); 
      }
    };
    document.querySelector('.top-bar').onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });
  