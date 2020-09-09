$(document).ready(function(){

  $(".fa-telegram-plane").click(function(){
    var testo = $("#messaggio").val();
    if(testo != ""){
      var messaggio = $(".messages").clone();

      messaggio.find(".message-text").text(testo);
      messaggio.find(".message-time").text("11:05");
      messaggio.addClass("owner-message");

      $(".messages").append(messaggio);

    }

    $("#messaggio").val() = "";
  });

});
