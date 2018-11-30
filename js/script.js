$(function(){

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

      function Masonry() {
        var $container = $('.posts');
      
        $container.imagesLoaded( function(){
          $container.masonry({
            itemSelector : 'li'
          });
        });
 }

    $('.toggles button').click(function(){
      var get_id= this.id; 
      var get_current = $('.posts .' + get_id);

      $('.post').not(get_current).hide(500);
      get_current.show(500);
    });

    $('#all').click(function(){
        $('.post').show(500);
    });

    $(function() {
        $('.scrollup').click(function() {
            $("html, body").animate({
            scrollTop:0
            },1000);
        })
    });

    $(".resizing").magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        }
    });

})
