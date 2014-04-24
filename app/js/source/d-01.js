(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#equals').on('click', doIt);

  }


  function doIt(){
    var x = $('#input1').val() * 1;
    var y = $('#input2').val() * 1;
    var xy = x + y;
    $('#answer').append(xy);
  }





})();
