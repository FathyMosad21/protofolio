let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
        
    }else{
        document.querySelector('.headwe').classList.remove('active');
    }
    
}
window.onload = () =>{
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
        
    }else{
        document.querySelector('.headwe').classList.remove('active');
    }
}


//for home section
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
   grabcursor: true,
   loop: true,
   centeredslides: true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  });

  //for feature section
  var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    grabcursor: true,
   loop: true,
   centeredslides: true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
        slidesperview: 1,
    },
    768: {
        slidesperview: 2,
    },
    991: {
        slidesperview: 3,
    },
  },
  });
  //for trainers section
  var swiper = new Swiper(".trainer-solider", {
    spaceBetween: 20,
    grabcursor: true,
   loop: true,
   centeredslides: true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
        slidesperview: 1,
    },
    768: {
        slidesperview: 2,
    },
    991: {
        slidesperview: 3,
    },
  },
  }); 
  //for blogs
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabcursor: true,
   loop: true,
   centeredslides: true,
   autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
        slidesperview: 1,
    },
    768: {
        slidesperview: 2,
    },
    991: {
        slidesperview: 3,
    },
  },
  });