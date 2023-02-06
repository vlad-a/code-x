// /////////// TABS ///////////

$(".create-tabs__box .tab")
  .click(function () {
    $(".create-tabs__box .tab")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  })
  .eq(0)
  .addClass("active");

// /////////// BURGER-MENU ///////////
$(".header-b__btn").click(function () {
  $(".header-b__btn").toggleClass("active");
  $(".header-b__back").toggleClass("active");
  $(".header__burger").toggleClass("active");
});


// /////////// OWL-CUROUSEL ///////////

$(document).ready(function () {
   $(".slide-one").owlCarousel({      
      loop: false,
      nav: false,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 450,
      responsive: { //Адаптация в зависимости от разрешения экрана
         0: {
            items: 1
         },
         1200: {
            items: 3,
            margin: 10
         },
         1600: {
            items: 4,
            margin: 30
         },
         1900: {
            items: 5
         }
      }

   });

   $(".slide-two").owlCarousel({      
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,      
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 450
   });

   $(".slide-three").owlCarousel({      
      margin: 0,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,      
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 450,
      navText: ['<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="67.5" y="67.5" width="67" height="67" rx="4.5" transform="rotate(-180 67.5 67.5)" stroke="#FF0000"/><line x1="40.7885" y1="48.4956" x2="26.6464" y2="34.3535" stroke="#FF0000"/><line x1="41.4956" y1="20.3536" x2="27.3535" y2="34.4957" stroke="#FF0000"/></svg>', '<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="67" height="67" rx="4.5" stroke="#FF0000"/><line x1="27.3536" y1="19.6464" x2="41.4957" y2="33.7886" stroke="#FF0000"/><line x1="26.6464" y1="47.7885" x2="40.7886" y2="33.6464" stroke="#FF0000"/></svg>'],
      responsive: { //Адаптация в зависимости от разрешения экрана
         1200: {
            items: 3
         },
         1410: {
            items: 4
         },
         1900: {
            items: 4
         }
      }

   });




});