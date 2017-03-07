$(document).ready(function(){
  var comments_counter = 0;

  function setComment(text){
    var $comment = $("<div class=\"comment\">").text(text);
    $comment.hide();
    $(".comments").prepend($comment);
    $comment.fadeToggle();
  }

  function publishComment(){
    setComment($("#InputText").val());
    $("#InputText").val("");
    comments_counter++;
    $("#charCounter").text(comments_counter);
  }

  $("button").on("click",function(){
    publishComment();  
  });

});