function main(){
  var $avatar = $('#chee');
  $avatar.hide();
  $avatar.fadeIn(1000);

  var $cheebio = $('#cheedescript');
  $cheebio.hide();
  $cheebio.fadeIn(1500);

  var $projects = $('.hpcontent');
  $projects.hide();
  $projects.fadeIn(2000);

}

$(document).ready(main);
