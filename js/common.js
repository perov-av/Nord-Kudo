$(document).ready(function() {

  $(".itemPopup").magnificPopup({
    type : 'image',
    gallery : {
      enabled : true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      alert("Спасибо за Ваш вопрос! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
});

$(function() {

  $(".mouse-icon").click(function() {
    $("html, body").animate({
      scrollTop : $(".s-adv").offset().top
    }, 800);
  });

})