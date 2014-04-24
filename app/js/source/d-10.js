(function(){
  'use strict';

  $(document).ready(init);

  var clock = 0;
  var timer;

  function init(){
    $('#start').on('click', start);
    $('#stop').on('click', stop);
  }

  function start(){
    timer = setInterval(function(){
      clock++;
      $('#clock').text(clock);
    }, 1000);
  }

  function stop(){
    clearInterval(timer);
  }

})();
