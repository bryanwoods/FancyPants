$(document).ready(function() {
  //shows errorMessage
  $(".fieldWithErrors").next().show();
  /*rails uses hidden fields for things like the checkbox, and still throws errors for any hidden fields 
  in your form.  This removes the error div so things stay pretty when that happens.*/
  $(".fieldWithErrors input[type=hidden]").parent().remove();
  //fades out flash message
  $('#flashMessage').css('opacity', '.95');
  setTimeout(function() { $('#flashMessage').fadeOut('slow'); }, 10000);
  //fades out flash message on "x" button click
  $('#close').click(function () {
    $(this).parent().fadeOut('fast');
  });
});