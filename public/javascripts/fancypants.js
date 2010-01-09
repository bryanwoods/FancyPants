$(document).ready(function() {
  $(".fieldWithErrors").next().show();
  $(".fieldWithErrors input[type=hidden]").parent().remove();
});
//error message goes away on field focus