function initCarousel() {
    const buttonLeft = document.querySelector(".carousel__arrow_left");
    const buttonRight = document.querySelector(".carousel__arrow_right");

    let right = 0;
    let currentSlide = 0;
    buttonLeft.style.display = "none";

    buttonLeft.addEventListener("click", function() {
        const carousel = document.querySelector(".carousel__inner");
        right = right + +`${carousel.offsetWidth}`;
        currentSlide--;
        
        carousel.style.transform = `translateX(${right}px)`;
    
        if (currentSlide == 0) {
            buttonLeft.style.display = "none";
        }
        if (currentSlide == 2) {
            buttonRight.style.display = "";
        }

     });

    buttonRight.addEventListener("click", function() {
        const carousel = document.querySelector(".carousel__inner");
        right = right - +`${carousel.offsetWidth}`;
        carousel.style.transform = `translateX(${right}px)`;
        currentSlide++;
        
        buttonLeft.style.display = "";
       
        if (currentSlide == 3) {
            buttonRight.style.display = "none";
        } 
       
  });
    
    
    }