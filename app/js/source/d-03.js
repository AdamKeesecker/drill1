(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#fourth').on('click', seperate);
  }

  function seperate(){
    var array= $('#input').val().split(', ');
    array.forEach(equate);
  }

  function equate(number){
    var $div=$('<div>');
    $('#container2').append($div);

    var x = Math.pow(number, 4);
    $div.append(x);
    $(x).addClass('finished');
  }





})();
