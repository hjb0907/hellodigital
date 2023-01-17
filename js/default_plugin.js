let w=$(window).width();

$(window).on("resize", function(){
    w=$(window).width();
    if(w>320){
      $(".gnb-bg").removeAttr("style");
      $(".nav").stop().animate({right:"-100%"}, 200);
    }
});

//mobile
$(".main").on("click", mobileGnb);

function mobileGnb(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      $(".m-gnb ul").stop().slideUp(300);
  }else{
    $(".main").removeClass("on");
    $(".m-gnb ul").stop().slideUp(300);
    $(this).addClass("on");
    $(this).next().stop().slideDown(300);
  }
}

$(".mobile-menu").on("click", function(){
  if($(this).hasClass("on")){
    $(".mobile-menu").removeClass("on");
  $(".mobile-gnb").css({display:"none"});
  $("body").css({overflow:"auto"});
  }else{
    $(".mobile-menu").addClass("on");
    $(".mobile-gnb").css({display:"block"});
    $("body").css({overflow:"hidden"});
  }
})



//PC
$(".pc-nav").on("mouseenter focusin", pcGnb)
$(".pc-nav").on("mouseleave focusout", gnbLeave)

function pcGnb(){
     $(this).find(".lnb-bg").show();
  }

function gnbLeave(){
   $(this).find(".lnb-bg").hide();
  }



   var swiper = new Swiper(".mySwiper", {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });

const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcon.forEach((tabc_all) => {
      tabc_all.classList.remove("active");
  
    });

    target.classList.add("active");
   
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabs.forEach((tabs_all) => {
      tabs_all.classList.remove("orange");
    });

    tab.classList.add("orange");
  
  });
});

