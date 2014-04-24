(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').on('click', arrify);
  }

  function arrify(){
    debugger;
    $('#input').val().split(', ').map(exponent).forEach(attach);
  }

  function exponent(x){
    if(x % 2){
      x=x*x*x;
      x.addClass('odd');
    }
    else{
      x=x*x;
      x.addClass('even');
    }
  }

  function attach(x){
    var div=$('<div></div>');
    $(div).addClass.append(x);
  }
})();
