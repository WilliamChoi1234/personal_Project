var scroll = new SmoothScroll('a[href*="#"]');

(function ($) {
  $.fn.visible = function (partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);
//change the nav bar from transparent to solid - vice versa
$(document).ready(function () {
  $(window).scroll(function () { // check if scroll event happened
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      $('.navbar').removeClass('navbar-light');
      $('.navbar').addClass('solid');
      $('.navbar-brand').addClass('navbar-brandActive')

    } else if ($(document).scrollTop() < 50) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
      $('.navbar').removeClass('solid');
      $('.navbar-brand').removeClass('navbar-brandActive')
      $('.navbar').addClass('navbar-light');
    }
  });
});


$(function(){
  $('.entrancetitle').click(function(){
      $('.william img').animate({ opacity: 1 });;
  });
});

$(function(){
  $('.entrancetitle').click(function(){
      $('.quotation img').animate({ opacity: 1 });;
  });
});

$(function(){
  $('.entrancetitle').click(function(){
      $('.signature img').animate({ opacity: 1 });;
  });
});

$(function(){
  $('.entrancetitle').click(function(){
      $('.signature img').animate({ opacity: 1 });;
  });
});

$(function(){
  $('.cardset-1').mouseover(function(){
      $('.cardset-1').animate({ margin: 20 ,opacity: 1});;
  });
});

$(function(){
  $('.cardset-1').mouseleave(function(){
    $('.cardset-1').animate({ margin: 5 ,opacity: 1 });;
  });
});

$(function(){
  $('.cardset-2').mouseover(function(){
      $('.cardset-2').animate({ margin: 20 ,opacity: 1});;
  });
});

$(function(){
  $('.cardset-2').mouseleave(function(){
    $('.cardset-2').animate({ margin: 5 ,opacity: 1});;
  });
});

$(function(){
  $('.cardset-3').mouseover(function(){
      $('.cardset-3').animate({ margin: 20 ,opacity: 1  });;
  });
});

$(function(){
  $('.cardset-3').mouseleave(function(){
    $('.cardset-3').animate({ margin: 5 ,opacity: 1 });;
  });
});

$(function(){
  $('.lifeblock').mouseover(function(){
    $('.lifeblock').animate({ transform: 20 });;
  });
});

$(function(){
  $('.lifeblock').mouseleave(function(){
    $('.lifeblock').animate({ transform: 0});;
  });
});

