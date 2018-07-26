$(window).load(function(){
  $("#slide_list img").click(function(){
    var img_src = $(this).attr("src");
    $("#slide_main img").attr("src", img_src);
  });
});
