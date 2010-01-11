$(document).ready(function() {
  $(".fieldWithErrors").next().show();
  $(".fieldWithErrors input[type=hidden]").parent().remove();
  
  $('#flashMessage').css('opacity', '.95');
  setTimeout(function() { $('#flashMessage').fadeOut('slow'); }, 10000);
  
  $('#close').click(function () {
    $(this).parent().fadeOut('fast');
  });
  
});