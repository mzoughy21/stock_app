  
  // Get the modal
  var modal1 = document.getElementById("myModal1");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImge");
  var modalImg = document.getElementById("img02");
  
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal1.style.display = "none";
  }
/*----------------------- SECOND IMAGE -------------------------*/
  // Get the modal
  var modal1 = document.getElementById("myModal1");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImge");
  var modalImg = document.getElementById("img02");
  
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close1")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal1.style.display = "none";
  }
  /*---------------------------THIRD IMAGE -------------------------------*/
   // Get the modal
   var modal1 = document.getElementById("myModal2");
  
   // Get the image and insert it inside the modal - use its "alt" text as a caption
   var img = document.getElementById("myImge1");
   var modalImg = document.getElementById("img03");
   
   var captionText = document.getElementById("caption");
   img.onclick = function(){
     modal1.style.display = "block";
     modalImg.src = this.src;
     captionText.innerHTML = this.alt;
   }
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close2")[0];
   
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() { 
     modal1.style.display = "none";
   }
  
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

}());


}

main();