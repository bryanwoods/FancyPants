 $(document).ready(function(){
//SELECT PHOTOS
  //declare the number selected  
      var photoSelected = 0;
  //get active accordion element from packs 
      //var currentPack = $("#accordion h3").index($("#accordion h3.ui-state-active")); 
  //toggle between highlighted and blank
      $("li").toggle(
        function() {
          if(photoSelected<16) {
          //highlight
            $(this).addClass("selected");          
          //add one to selected count
            photoSelected++;
          //highlight checkmark
            $("#checkmarks #checkmark").eq(photoSelected - 1).addClass("active");    
          //update counter
            $("#count_selected").text(photoSelected +"/16");
          //add to pack
            var imgUrl = $(this).attr("id");
            $('.thumbs').append('<img src="'+imgUrl+'" alt="" id="'+imgUrl+'" />');
          } else { }
        },
        function () {
        //un-highlight
          $(this).removeClass("selected");
        //remove image from pack
          var imgUrl = $(this).attr("id");
          $('.thumbs [id="'+imgUrl+'"]').remove();
        //remove one from count
          photoSelected--;
        //remove checkmark highlight
          $("#checkmarks #checkmark").eq(photoSelected ).removeClass("active");
        //update counter
          $("#count_selected").text(photoSelected +"/16")
        }
      );

var packSelected = 0;      
 $(".pack_left").toggle(
   function(){
     $(this).addClass("selected");
     $(this).children("#checkmark").addClass("active");
     packSelected++;
     $("#checkmarks.right #checkmark").eq(packSelected - 1).addClass("active");
   },
   function(){
     $(this).removeClass("selected");
     $(this).children("#checkmark").removeClass("active");
     packSelected--;
     $("#checkmarks.right #checkmark").eq(packSelected ).removeClass("active");
   }
 );
          
  //make pack title editable in place (Demo only)
    $('#editable_title').focus(function() {
      $('#editable_title').val(' ');
      });    
    var packTitle = "Click to edit title"
  //create new pack on new_pack_btn click 
    $("#new_pack_btn").click(function(){
      $('#accordion').append("<h3><div id='pack' class='collapsed'><div id='pack_dot' class='inactive'></div><div id='pack_title'><input id='editable_title' value='"+packTitle+"'/></div></div></div></h3><div><div id='pack' class='expanded'></div>");
      $("#accordion").tabs("#accordion div.pane", { 
          tabs: 'h3',  
          effect: 'slide' 
      });
    });
});