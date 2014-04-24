(function(){
  'use strict';

  $(document).ready(createBig);
  $(document).ready(init);

  function init(){
  }

  function createBig(){
    var big = '<div class="big">b</div>';
    var small = '<div class="small">s</div>';
    big = big.css('position:absolute');
    $('#container').append(big);
    $('.big').append(small);
  }


})();
