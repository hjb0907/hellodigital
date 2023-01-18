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



  
  var time; 
  var $carouselLi;
  var carouselCount; 
  var currentIndex; 
  var caInterval;
   
  var imgW;   
  $(document).ready(function(){
      carouselInit(500, 2000);
  });
   
  $(window).resize(function(){
      carousel_setImgPosition();
  });
   

  function carouselInit( height, t ){
      time = t + 1000;
      $("#carousel_section").height(height); 
      $carouselLi = $("#carousel_section > ul >li");
      carouselCount = $carouselLi.length; 
      currentIndex = 0;
      carousel_setImgPosition();
      carousel();
  }
   
  function carousel_setImgPosition(){
   
      imgW = $carouselLi.width(); 
      for(var i = 0; i < carouselCount; i++)
      {
          if( i == currentIndex)
          {
              $carouselLi.eq(i).css("left", 0);
          }
          else
          {
              $carouselLi.eq(i).css("left", imgW);
          }
      }
  }
   
  function carousel(){
      caInterval = setInterval(function(){
          var left = "-" + imgW;
   

          $carouselLi.eq(currentIndex).animate( { left: left }, function(){

              $carouselLi.eq(currentIndex).css("left", imgW);
   
              if( currentIndex == ( carouselCount - 1 ) )
              {
                  currentIndex = 0;
              }
              else
              {
                  currentIndex ++;
              }
          } );
   
          if( currentIndex == ( carouselCount - 1 ) )
          {
              $carouselLi.eq(0).animate( { left: 0 } );
          }
          else
          {
              $carouselLi.eq(currentIndex + 1).animate( { left: 0 } );
          }
      }, time);
  }
  


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

let h=$(window).height() - $(".top_btn").height() - 50;
       
$(window).scroll(function(){
 var sct=$(this).scrollTop();
 $(".top_btn").stop().animate({top: sct+h} , 300);

 var sec1=$(".main").offset().top + 100;
console.log(sec1);

 if(sct< sec1){
  $(".top_btn").css({"opacity" : 0})
 }else{ $(".top_btn").css({"opacity" : 1})}
});


$(".top_btn").click(function(){
  $("html, body").animate({scrollTop:0}, 1000);
});