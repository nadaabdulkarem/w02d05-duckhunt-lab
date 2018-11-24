$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var $body = $('body');
  var $duck = [];

  function createDuck() {
    for (var i = 0; i < 5; i++){
      $duck[i] = $('<div/>').addClass('duck');
      $body.append($duck);
    }

    $('.duck').each(function(){
      $(this).css({
        'top' : Math.floor(Math.random() * window.innerHeight) + 'px',
        'left' : Math.floor(Math.random() * window.innerWidth) + 'px'          
      })
    });
    
    setInterval(function(){
      $('.duck').each(function(){
        $(this).toggleClass('flap');
      });
    }, 250);

    setInterval(function(){
      $('.duck').each(function(){
        $(this).animate({
          'top' : Math.floor(Math.random() * window.innerHeight) + 'px',
          'left' : Math.floor(Math.random() * window.innerWidth) + 'px'          
        })
      });
    }, 1000 , 'linear');

    $('.duck').on('click', function(){
      $(this).removeClass('duck').addClass('shot');

      $('.shot').css({
        position: 'absolute',
        backgroundImage : 'url(images/shot.png)',
        width : '100px',
        height : '95px',
        })

      setTimeout(function(){
        $('.shot').remove();
      }, 1000);
    });
    
    return $duck;
  }
  createDuck();

  function checkForWinner() {
    if($('.duck').length == 0){
      alert("YOU WIN!");
    } else {
      setTimeout(checkForWinner, 1000);
    }
  }
  checkForWinner();

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying
  

})