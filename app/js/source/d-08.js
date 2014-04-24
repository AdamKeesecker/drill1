(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#button').on('click', toggle);
  }

  function toggle(){
    $('#button').toggleClass('green');
    $('#button').toggleClass('red');
  }
})();
