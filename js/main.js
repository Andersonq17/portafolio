//select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');

const navItems= document.querySelectorAll('.menu-list');

//Set menu

let showMenu= false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item=>item.classList.add('show'));

        showMenu=true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'));

        showMenu=false;
    }
}


//video coverr

// jQuery is required to run this code
$( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }