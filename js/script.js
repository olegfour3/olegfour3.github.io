$(function(){

    /*Слайдер*/
    $('#carousel-ex').carousel({
        ride: 'carousel',
        interval: 3000,
        pause: false
        });
    
    $('body').waitForImages({
		finished: function() {
				$('body').jKit();
		},
		waitForAll:false
	});

    /*Параллакс эффект*/
    function sidebarhero() {
        if($("#hero").length) {
          var fadeStart=100,fadeUntil=800,fading = $('#hero');
      
          $(window).bind('scroll', function(){
              var offset = $(document).scrollTop()
                  ,opacity=0
              ;
              if( offset<=fadeStart ){
                  opacity=1;
              }else if( offset<=fadeUntil ){
                  opacity=1-offset/fadeUntil;
              }
              fading.css('opacity',opacity);
          });
        } 
      }

    /*Фильтр в портфолио*/
    $('.toggles button').click(function(){
      var get_id= this.id; 
      var get_current = $('.posts .' + get_id);

      $('.post').not(get_current).hide(500);
      get_current.show(500);
    });

    $('#all').click(function(){
        $('.post').show(500);
    });

    /*Кнопка вврех*/
    $(function() {
        $('.scrollup').click(function() {
            $("html, body").animate({
            scrollTop:0
            },1000);
        })
    });

    /*Галерея изображений*/
    $(function() {
        $('.resizing').magnificPopup({
            type : 'image',
            gallery : {
                enabled : true
            }
        })
    });

    /*Скрытие меню*/
    $(document).ready(function() {
        $("nav.fixed-top").autoHidingNavbar();
        $('nav').autoHidingNavbar('setAnimationDuration', 400);
        $('nav').autoHidingNavbar('setShowOnBottom', false);
                     
    });
    
    // var mywindow = $(window);
    // var mypos = mywindow.scrollTop();
    // var up = false;
    // var newscroll;
    // mywindow.scroll(function () {
    //     newscroll = mywindow.scrollTop();
    //     if (newscroll > mypos && !up) {
    //         $('.navbar').stop().slideToggle();
    //         up = !up;
    //         console.log(up);
    //     } else if(newscroll < mypos && up) {
    //         $('.navbar').stop().slideToggle();
    //         up = !up;
    //     }
    //     mypos = newscroll;
    // });
})
