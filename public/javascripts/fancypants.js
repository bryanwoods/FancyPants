$(document).ready(function() {
  $(".fieldWithErrors").next().show();
  $(".fieldWithErrors input[type=hidden]").parent().remove();
  
  $('#flashMessage').css('opacity', '.95');
  setTimeout(function() { $('#flashMessage').fadeOut('slow'); }, 10000);
});
//error message goes away on field focus