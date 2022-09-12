//document.body.classList.toggle("dark-theme");
//$("#mainwrapper_1").css("top","calc(50% + 32.5px)");
//$("#mainwrapper_2").css("top","calc(150% + 32.5px)");
//$("#mainwrapper_1").css("transform","translate(0, -50%)");
//$("#mainwrapper_2").css("transform","translate(0, -50%)");
$(document).ready(function() {
  setTimeout(function() {
  $(".cover").css("transition-duration", "250ms");
  $('.cover').css('opacity', "0");
  $('.cover').css('z-index', -1000);
}, 250);
});


$( document ).ready(function()
{
    console.log( "ready!" );
});

$( document ).ready(function()
{
  $(".nextpointer").on("click", function() {
    console.log("Durka");
    $(".mainwrapper").css("transition-duration", "1500ms");
    $("#mainwrapper_1").css("top","calc(-50% + 32.5px)");
    $("#mainwrapper_2").css("top","calc(50% + 32.5px)");
    //$("#mainwrapper_1").css("transform","translate(0, -100vh)");
    //$("#mainwrapper_2").css("transform","translate(0, 50vh)");
    //$("#nextpointer").css("transition","0.3s ease-in-out");
    $("#nextpointer").css("opacity","0");
    //$("#previouspointer").css("transition","1.5s ease-in-out");
    setTimeout(
      function()
    {
    $("#previouspointer").css("opacity","100");
  }, 1000);

    });
});

$( document ).ready(function()
{
  $(".previouspointer").on("click", function() {
    console.log("Durka");
    $(".mainwrapper").css("transition-duration", "1500ms");
    $("#mainwrapper_1").css("top","calc(50% + 32.5px)");
    $("#mainwrapper_2").css("top","calc(150% + 32.5px)");
    //$("#mainwrapper_1").css("transform","translate(0, -50%)");
    //$("#mainwrapper_2").css("transform","translate(0, 150vh)");
    $("#previouspointer").css("opacity","0");
    //$("#nextpointer").css("transition","1.5s ease-in-out");
    setTimeout(
      function()
    {
    $("#nextpointer").css("opacity","100");
  }, 1000);

    //$("#previouspointer").css("transition","0.3s ease-in-out");

    });
});

$( document ).ready(function()
{
  $(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      console.log("Durka");
      $(".mainwrapper").css("transition-duration", "1500ms");
      $("#mainwrapper_1").css("top","calc(50% + 32.5px)");
      $("#mainwrapper_2").css("top","calc(150% + 32.5px)");
      //$("#mainwrapper_1").css("transform","translate(0, -50%)");
      //$("#mainwrapper_2").css("transform","translate(0, 150vh)");
      $("#previouspointer").css("opacity","0");
      //$("#nextpointer").css("transition","1.5s ease-in-out");
      setTimeout(
        function()
      {
      $("#nextpointer").css("opacity","100");
    }, 1000);
    }
    else {
      $(".mainwrapper").css("transition-duration", "1500ms");
      $("#mainwrapper_1").css("top","calc(-50% + 32.5px)");
      $("#mainwrapper_2").css("top","calc(50% + 32.5px)");
      //$("#mainwrapper_1").css("transform","translate(0, -100vh)");
      //$("#mainwrapper_2").css("transform","translate(0, 50vh)");
      //$("#nextpointer").css("transition","0.3s ease-in-out");
      $("#nextpointer").css("opacity","0");
      //$("#previouspointer").css("transition","1.5s ease-in-out");
      setTimeout(
        function()
      {
      $("#previouspointer").css("opacity","100");
    }, 1000);
    }
});
});
