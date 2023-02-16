$(window).load(function(){
  menuslide();
  visualSlide();



})


function menuslide(){


  var $menuBtn = $('.menuBtn');
  var $mainmenuWrap = $('.mainmenuWrap');
  var $onPlay = false;
  $menuBtn.on('click', onOver);
  $(window).on('scroll',onScroll);
  $mainmenuWrap.hide(0)

  function onOver(){
    if($onPlay == false){
    $mainmenuWrap.addClass('on');
    $('.line01').addClass('on');
    $('.line02').addClass('on');
    $('.line03').addClass('on');
    $mainmenuWrap.show(500)
    $onPlay = true;
    }else{
      $mainmenuWrap.removeClass('on');
      $('.line01').removeClass('on');
      $('.line02').removeClass('on');
      $('.line03').removeClass('on');
      $mainmenuWrap.hide(500)
      $onPlay = false;
    }
  }

  function onScroll(){
    $mainmenuWrap.removeClass('on');
    $('.line01').removeClass('on');
    $('.line02').removeClass('on');
    $('.line03').removeClass('on');
    $mainmenuWrap.hide(300)
    $onPlay = false;
  }


}


function visualSlide(){
  
  $('.visualSlider').slick({
    autoplay : true,
    infinite : true,
    dotsClass : "dotList",
    speed : 500,
    autoplaySpeed : 1500,
    dots : true,
    slidesToShow : 3,
    sldiesToScroll : 1,
    arrows : false,
    asNavFor : '.visualSlider021',
  })

  $('.visualSlider021').slick({
    autoplay : true,
    infinite : true,
    dotsClass : "dotList",
    speed : 500,
    autoplaySpeed : 1500,
    dots : true,
    slidesToShow : 1,
    sldiesToScroll : 1,
    arrows : false,
    asNavFor : '.visualSlider',
  })
}

















// function visualSlide(){
  
//   var $slider01 = $('.item01');
//   var $slider02 = $('.item02');
//   var timer
  

//   init01($slider01);
//   init02($slider02);
//   start();


  

//   function init01(el){
//     var $itemSize = el.find('li').size();
//     console.log($itemSize);

//     el.children('ul').css({
//       'width':($(window).innerWidth() / 3) * $itemSize,
//       'height':'100%',
//       'marginLeft':- $(window).innerWidth() / 3

//     })

//     el.find('li').css({
//       'width': $(window).innerWidth() / 3,
//       'height':'100%'
      
//     })

//     el.find("li").last().prependTo(el.children("ul"));
    
//   }
//   function init02(el){
//     var $itemSize = el.find('li').size();
//     console.log($itemSize);

//     el.children('ul').css({
//       'width':100 * $itemSize + '%',
//       'height':'100%',
//       'marginLeft':'-100%'
//     })
//     el.find('li').css({
//       'width': 100 / $itemSize +"%",
//       'height':'100%',
      
//     })
//     el.find("li").last().prependTo(el.children("ul"));
//   }

//   function next01(el){
//   var $marginItem = parseInt(el.find("li").innerWidth() / $(window).innerWidth( ) *100) * (-1) + '%';
//     console.log($marginItem)
//     el.find("ul").animate({ 'marginLeft': -el.find("li").innerWidth() * 2}, 700 ,function(){
//       $(this).find("li").first().appendTo( $(this) ); 
//       $(this).css({ 'marginLeft': -el.find("li").innerWidth()});
//       });

//   }

//   function next02(el){
//     el.children("ul").animate({ 'marginLeft': "-200%"}, 700 ,function(){
//       $(this).find("li").first().appendTo( $(this) ); 
//       $(this).css({ 'marginLeft': "-100%"});
//       });

//   }

//   function start(){
//     timer = setInterval(function(){
//       next01($slider01);
//       next02($slider02)

//   }, 2000);
//   }

  


// }







