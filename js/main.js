$(document).ready(function(){

  var written = false;
// Ripartire da qui e capire perche ti stampa due volte le cose
  $(".fa-telegram-plane").click(function(){
    var testo = $("#messaggio").val();
      if(testo != ""){
       var messaggio = $("#sender").clone();
       messaggio.find(".message-text").text(testo);
       messaggio.find(".message-time").text("12:00");
       messaggio.addClass("destra");

       $(".active").append(messaggio);
       $("#messaggio").val("");
       written = true;
      }
  });

  $("#messaggio").keyup(function(){
    console.log("Hai premuto invio");
    if(event.which == 13){
      var testo = $("#messaggio").val();
       var messaggio = $("#sender").clone();
       messaggio.find(".message-text").text(testo);
       messaggio.find(".message-time").text("12:00");
       messaggio.addClass("destra");
       if(messaggio.hasClass("hide")){
         messaggio.removeClass("hide");
       }
       $(".active").append(messaggio);
       $("#messaggio").val("");
       written = true;
      }
  });

  setInterval(function(){

    if(written == true){
      var messaggio = $("#receiver").clone();
      messaggio.find(".message-text").text("ok");
      messaggio.find(".message-time").text("12:00");
      messaggio.addClass("sinistra")

      $(".active").append(messaggio);
      written = false;
    }
  }, 500);

  $("#cerca").keyup(function(){
    var searchInput = ($(this).val()).toLowerCase();
    var contactName = $(".friend h5");


    contactName.each(function(){
      var name = ($(this).text()).toLowerCase();
      if(name.includes(searchInput) == true){
        $(this).parent().parent().show();
        console.log("hai inserito --> " + searchInput);
      } else {
        $(this).parent().parent().hide();
      }
    });
  });

  function topChanger(index){}

  $(".friend").click(function(){
    var closingWindow = $(".active");
    var selector = '.chat-window[data-friend="' + $(this).data("friend") + '"]';
    var openingWindow = $(selector);


    topChanger($(this).data("friend"));

    closingWindow.removeClass("active");
    openingWindow.addClass("active");

  });

  $(".fa-angle-down").click(function(){
    $(this).parent().children(".option").toggle();
  });

  $(".option ul li:nth-child(2)").click(function(){
    $(this).parent().parent().parent().parent().addClass("hide");
    $(this).parent().parent().hide();
  });

});
