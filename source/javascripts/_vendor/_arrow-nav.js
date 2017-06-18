$(document).ready(function() {
  console.log("loaded");

  $("html").keydown(function(e) {
    console.log(e.keyCode);
    //Down
    if (e.keyCode == 40) {

      if ($('.nav-list-active .nav-item-selected').is(":last-child")){
        console.log("Last Child - Do Nothing");
      }
      else {
        console.log("Go DOWNNN");
        $($('.nav-list-active .nav-item-selected')).each(function(){
          $(this).removeClass("nav-item-selected");
          $(this).next().addClass("nav-item-selected");
        });
      }
    }
    //Up
    if (e.keyCode == 38) {
      if ($('.nav-list-active .nav-item-selected').is(":first-child")){
        console.log("First Child - Do Nothing");
      }
      else {
        console.log("Go UPPP");
        $($('.nav-list-active .nav-item-selected')).each(function(){
          $(this).removeClass("nav-item-selected");
          $(this).prev().addClass("nav-item-selected");
        });
      }
    }
    //Enter
    if (e.keyCode == 13) {
      if ($('.nav-list-active .nav-item-selected').hasClass(".nav-item-active")){
        console.log("Enter - Already Active");
      }
      else {
        console.log("Enter - Change this to active");
        $($('.nav-list-active .nav-item-selected')).each(function(){
          $(this).siblings().removeClass("nav-item-active");
          $(this).addClass("nav-item-active");
        });
      }
    }


  });
});

//Escape 27
//Left Arrow 37
//Right Arrow 39
//Up 38
//Down 40
//Enter 13
