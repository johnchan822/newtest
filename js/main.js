$(document).ready(function () {
  //換頁
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) { elmnt.innerHTML = this.responseText; }
            if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
    includeHTML();

//漢堡選單
  $("body").on('click', '.header .ham', function (e) {
   e.preventDefault();
   console.log('asdf')
    $('.menu').toggleClass('active');
  });

//index首頁
  let swiper = new Swiper(".banner-Swiper", {
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        var li = $(".swiper-content  .single-content");
        // console.log(this.activeIndex)
        li.eq((this.activeIndex)).addClass("active");
        li.eq((this.activeIndex)).siblings().removeClass("active");
      },
    },
  });
  $(".swiper-content .single-content").eq(0).addClass("active");

  let cardSwiper = new Swiper('.card-swiper', {
    // spaceBetween: 5,
    // slidesPerView: 3.5,
    loop: true,
    allowTouchMove: true,
    autoplay: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1920: {
        slidesPerView: 3.5,
        centeredSlides: false,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
      },
      1280: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
      },
      380: {
        slidesPerView: 1,
        centeredSlides: true,
      },
    },
  });
  $('.refresh-bar .bar-style').click(function (e) {
    e.preventDefault();
    $('.refresh-bar .bar-style').removeClass('active');
    $('.bar-block').removeClass('active');

    for (let i = 0; i < $('.refresh-bar .bar-style').length;i++){
      if ($(this).data("num") === $('.bar-block').eq(i).index()){
        console.log('ok')
        $('.refresh-bar .bar-style').eq(i).addClass('active')
        $('.bar-block').eq(i).addClass('active');
      }
    }
  });
  $('.refresh-bar .bar-style').eq(0).click();


  //product-server.html 切換頁面
  $('.product-bar .bar-style').click(function (e) {
    e.preventDefault();
    $('.product-bar .bar-style').removeClass('active');
    $('.product-block').removeClass('active');
    for (let i = 0; i < $('.product-block').length;i++){
        if($(this).data('name') == $('.product-block').eq(i).data('name')){
            $(this).addClass('active');
          $('.product-block').eq(i).addClass('active');
        }
    }
  });
  $('.product-bar .bar-style').eq(0).click();









// about.html  下拉表單
  $("#about .about-title .up").click(function () {
    $(this).toggleClass("active");
    $(this).parent().next(".line-border").slideToggle(0);
  });

// poster.html  下拉表單
  $("body").on('click', '#poster .column-title .up', function (e) {
    $(this).toggleClass("active");
    $(this).parent().next(".line-border").slideToggle(0);
  });

})



