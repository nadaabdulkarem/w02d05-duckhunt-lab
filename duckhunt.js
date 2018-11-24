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
    };

    $('.duck').each(function(){
      $(this).css({
        'top' : Math.floor(Math.random() * window.innerHeight) + 'px',
        'left' : Math.floor(Math.random() * window.innerWidth) + 'px'          
      });
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
        });
      });
    }, 1000 , 'linear');
    
    $('.duck').on('click', function(){
      $(this).removeClass('duck').addClass('shot');

      $('.shot').css({
        position: 'absolute',
        backgroundImage : 'url(images/shot.png)',
        width : '100px',
        height : '95px',
        });

      setTimeout(function(){
        $('.shot').remove();
        checkForWinner();
      }, 1000);
      
    });
  }
  createDuck();

  function checkForWinner() {
    if($('.duck').length == 0){
      alert("YOU WIN!");
     }
  }
})