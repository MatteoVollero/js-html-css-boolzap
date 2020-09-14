$(document).ready(function(){

  //written mi serve per capire quando far mandare il messaggio alla timing function
  var written = false;
  //Variabile per scalare correttamente lo scroll
  var messageOnWindow = 1;
  //variabile per settare l'orario una volta che il documento è pronto
  var orario = new Date();

  //Controllo per il settaggio iniziale dell'ora
  if(orario.getMinutes() < 10){
    $(".orario").text(orario.getHours() + ":0" + orario.getMinutes());
  } else {
    $(".orario").text(orario.getHours() + ":" + orario.getMinutes());
  }

  //Funzione per l'invio messaggio al click
  $(".fa-telegram-plane").click(function(){
    var testo = $("#messaggio").val();
      if(testo != ""){
       var messaggio = $("#sender").clone();
       messaggio.find(".message-text").text(testo);
       messaggio.find(".message-time").text("12:00");
       messaggio.addClass("destra");

       $(".active").append(messaggio);
       $("#messaggio").val("");
       if(data.getMinutes() < 10){
         $(this).find("orario").text(data.getHours() + ":0" + data.getMinutes());
       } else {
         $(this).find("orario").text(data.getHours() + ":" + data.getMinutes());
       }
       $(".active").scrollTop(227);
       written = true;
      }
  });

  //Funzione per l'invio del messaggio quando si preme invio
  $("#messaggio").keydown(function(){
    var data = new Date();
    console.log("Hai premuto invio");
    if(event.which == 13){
      var testo = $("#messaggio").val();
       var messaggio = $("#sender").clone();
       messaggio.find(".message-text").text(testo);
       if(messaggio.hasClass("hide")){
         messaggio.removeClass("hide");
       }

       if(data.getMinutes() < 10){
         $(messaggio).find(".message-time").text(data.getHours() + ":0" + data.getMinutes());
       } else {
         $(messaggio).find(".message-time").text(data.getHours() + ":" + data.getMinutes());
       }
       messaggio.addClass("destra");
       $(".active").append(messaggio);
       $("#messaggio").val("");
       $(".active").scrollTop(227 * messageOnWindow);
       written = true;
      }
  });

  //timing function che si ripete ogni secondo
  setInterval(function(){

    var data = new Date();

    if(written == true){
      var messaggio = $("#receiver").clone();
      messaggio.find(".message-text").text("ok");
      if(data.getMinutes() < 10){
        $(messaggio).find(".message-time").text(data.getHours() + ":0" + data.getMinutes());
      } else {
        $(messaggio).find(".message-time").text(data.getHours() + ":" + data.getMinutes());
      }
      messaggio.addClass("sinistra")

      $(".active").append(messaggio);
      $(".active").scrollTop(227 * messageOnWindow);
      messageOnWindow ++;
      written = false;
    }
  }, 1000);


  //Funzione per programmare l'invio nel cerca persone
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

  //Funzione per il cambio amico una volta cliccato
  $(".friend").click(function(){
    var orario = new Date();
    var closingWindow = $(".active");
    var selector = '.chat-window[data-friend="' + $(this).data("friend") + '"]';
    var openingWindow = $(selector);

    var newImg = $(this).find("img").attr("src");
    var newName = $(this).find(".nome").text();

    $(".selected-info").find("img").attr("src",newImg);
    $(".selected-info").find("h5").text(newName);
    closingWindow.removeClass("active");
    openingWindow.addClass("active");

  });

  //Funzione per far comparire il menu a tendina per effettuare operazioni sul messaggio
  $(document).on("click",".fa-angle-down",
    function(){
      console.log("cliccato");
      $(this).parent().children(".option").toggle();
      $(".active").scrollTop(200);

    });

  //Funzione di eliminazione del messaggio
  $(document).on("click",".option ul li:nth-child(2)",
    function(){
      $(this).parent().parent().parent().parent().remove();
      $(this).parent().parent().hide();
    });

});
