var swapSystem = function(system) {
  $('#menu').removeClass().addClass(system);
  $('#container').removeClass().addClass(system);
}

$(document).ready(function() {
  $('#menu li').click(function() {
    var system = $(this).attr('class');
    swapSystem(system);
  });
});
