(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#exp').on('click', splits);
  }

  function splits(){
    var split = $('#input').val().split(' - ');
    var splitOne = split[0].split(', ');
    var splitTwo = split[1].split(', ');
    getPosition(splitOne, splitTwo);
  }

  function getPosition(x, y){
    for(var i=0; i < x.length; i++){
      var a = x[i];
      var b = y[i];
      var c = exponentiate(a, b);
      paint(a, b, c);
    }
  }

  function exponentiate(a, b){
     return Math.pow(a, b);
  }

  function paint(base, exponent, result){
    var div = '<div><div class="top">'+base+'<sup>'+exponent+'</sup></div><div class="bottom">'+result+'</div></div>';
    $('#container2').append(div);
  }
})();
