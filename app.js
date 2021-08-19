$(document).ready(function(){       
 var scroll_start = 0;
 var startchange = $('#startchange');
 var offset = startchange.offset();
 console.log(startchange.length);
   $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    console.log(scroll_start); 
    if(scroll_start > offset.top) {
      $(".navbar").addClass("navbar-default");
      $(".navbar").removeClass("pt-5");
      console.log("toto");
    } else {
      $('.navbar').removeClass("navbar-default");
    }
  });
});
