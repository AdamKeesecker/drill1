(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#even').on('click', pullInput);
  }

  function pullInput(){
    var input =$('#input').val().split(', ');
    makeArray(input[0], input[1]).map(square).filter(isEven).forEach(paint);
  }

  function makeArray(start, end){
    var array=[];
    for(var i = start; i <= end; i++){
      array.push(i);
    }
    return array;
  }

  function square(x){
    x*=x;
    return x;
  }

  function isEven(x){
    return x % 2===0;
  }

  function paint(x){
    $('#container2').append('<div>'+x+'</div>');
  }
})();
