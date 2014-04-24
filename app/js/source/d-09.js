(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#color').on('click', randomize);
  }

  function randomize(){
    var rgb1 = Math.floor(Math.random()*256);
    var rgb2 = Math.floor(Math.random()*256);
    var rgb3 = Math.floor(Math.random()*256);
    var rndA = Math.random()*2;
    colorize(rgb1, rgb2, rgb3, rndA);
  }

  function colorize(r,g,b,a){
    $('div').css('background-color','rgba('+r+','+g+','+b+','+a+')');
  }

})();
