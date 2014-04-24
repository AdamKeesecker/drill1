(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#last').on('click', pullInput);
  }

  function pullInput(){
    var input = $('#input').val().split(', ');
    makeArray((input[0]*1), (input[1]*1)).slice(-3).forEach(paint);
  }

  function makeArray(start, end){
    var array=[];
    for(var i = start; i <= end; i++){
      array.push(i);
    }
    return array;
  }

  function paint(x){

    $('#container2').append('<div>'+x+'</div>');
  }
})();
