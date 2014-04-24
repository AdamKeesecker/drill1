(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#case').click(createArray);
  }

  function createArray(){
    var array= $('#input').val().split(', ');
    array.forEach(create);
  }

  function create(single){
    var $div=$('<div>');
    $div.append(single);
    $('#container2').append($div);
    if(isOdd(single)){
      $div.addClass('odd');
    }
    else{
      $div.addClass('even');
    }
  }

  function isOdd(word){
    if(word.length%2){
      return true;
    }
    else{
      return false;
    }
  }
})();
