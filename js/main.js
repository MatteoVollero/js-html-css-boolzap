$(document).ready(function(){
// Ripartire da qui e capire perche ti stampa due volte le cose
  $(".fa-telegram-plane").click(function(){
    var testo = $("#messaggio").val();
      if(testo != ""){
       console.log(testo);
       var messaggio = $(".message-row").clone();
       console.log("[DEBUG] ----> messaggio = " + messaggio);
       messaggio.find(".message-text").text(testo);
       messaggio.find(".message-time").text("12:00");
       messaggio.addClass("destra");

       $(".chat-window").append(messaggio);
       $("#messaggio").val("");
      }
  });

});
