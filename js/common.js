$(document).ready(function() {
  

  $(".itemPopup").magnificPopup({
  type : 'image',
  gallery : {
    enabled : true
  },
  removalDelay: 300,
  mainClass: 'mfp-fade'
  });

  $(".home-gallery-wrap").each(function() {
    $(this).magnificPopup({
      
      delegate: 'a',
      type : 'image',
      tLoading: '',
      gallery : {
        enabled : true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade-gallary'
    });
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
  
  $(".item-card").height('auto').equalHeights();
  $(".m_Photo a").height('auto').equalHeights();
  $("h3.text-primary").height('auto').equalHeights();
  
  $(".mouse-icon").click(function() {
    $("html, body").animate({
      scrollTop : $(".s-adv").offset().top
    }, 800);
  });
});

// Анимация заголовков
$(window).load(function() {

  $(".overlay h1.anim-left").animated("fadeInLeft", "fadeInRight");
  $(".overlay h2.anim-right").animated("fadeInRight", "fadeInLeft");
  $(".m_Text h1").animated("flip", "flipInY");
  $(".m_Wrap h2.come").animated("tada", "tada");
  $(".m_Wrap h1.anim-down").animated("fadeInDown", "fadeInUp");
  $(".m_Wrap h1.bounce").animated("bounceInDown", "bounceInDown");
  $(".item_text h2.anim-left").animated("flip", "flipInY");
});