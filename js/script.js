

$(document).ready(function() {
   var text = "I want you to rite this text instead0";
   var number = 42;
   // var paragraph = $("p").html("<h1>Greetings World</h1)");
   // console.log(paragraph);
   $("p").text(text + " " + number)
   $(".contentBox").append("<h2>add this HTML too!</h2>")
   $("h1").css({
   "font-size": "22px",
   "color": "blue"});
   //Change BG color when clicked
   $(".contentBox").click(function() {
      $(".contentBox").addClass("redbg");
      $("h2").slideToggle();
   })

   $("div").hover(function() {
      $(this).toggleClass("greenbg");
   })

   $("div.bar").click(function() {
      $("div.bar").each(function(index, element) {
         var random = 300*Math.random();
         $(this).css("height",random+"px");
         $(this).css("width",random+"px");
      })
   })


})
