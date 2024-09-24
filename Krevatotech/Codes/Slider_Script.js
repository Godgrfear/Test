const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween:false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,
    },
  
    //Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    

    /* And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    */
    //Responsive break
    breakpoints: {
        0:{
            slidesPerView: 1
        },

        620: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView : 3
        }
    }
  });