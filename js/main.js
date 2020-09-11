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
       $(".active").scrollTop(227);
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
      $(".active").scrollTop(227);
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

  $(".friend").click(function(){
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

  $(document).on("click",".fa-angle-down",
    function(){
      console.log("cliccato");
      $(this).parent().children(".option").toggle();
    });

  $(document).on("click",".option ul li:nth-child(2)",
    function(){
      $(this).parent().parent().parent().parent().remove();
      $(this).parent().parent().hide();
    });

  // $(".option ul li:nth-child(2)").click(function(){
  //   $(this).parent().parent().parent().parent().addClass("hide");
  //   $(this).parent().parent().hide();
  // });

});
