$(document).ready(function () {
  // Typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      let contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // Appel de la fonction writeText sur l'élément avec l'id "holder"
  $("#holder").writeText("DEVELOPPEUR WEB - FULL STACK");

  // Initialisation de la bibliothèque WOW.js pour les animations
  new WOW().init();

    // Push the body and the nav over by 285px over
    let main = function () {
      $(".fa-bars").click(function () {
        $(".nav-screen").animate(
          {right: "0px"},
          200
        );
  
        $("body").animate(
          {right: "285px"},
          200
        );
      });
  
      // Then push them back */
      $(".fa-times").click(function () {
        $(".nav-screen").animate(
          {right: "-285px"},
          200
        );
  
        $("body").animate(
          {right: "0px"},
          200
        );
      });
  
      $(".nav-links a").click(function () {
        $(".nav-screen").animate(
          {right: "-285px"},
          500
        );
  
        $("body").animate(
          {right: "0px"},
          500
        );
      });
    };
  
    $(document).ready(main);

  // Initialisation du plugin fullPage.js pour le défilement à une page complète
  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["home", "skills", "portfolio", "about", "connect"],
    anchors: ["home", "about", "portfolio", "contact", "connect"],

    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      let loadedSection = $(this);

      // Utilisation de l'index pour les actions à effectuer après le chargement de chaque section
      if (index == 1) {
        /* Ajout d'une opacité à la flèche */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
      }

      if (index == 2) {
        /* Animation des barres de compétences */
        $(".skillbar").each(function () {
          $(this)
            .find(".skillbar-bar")
            .animate(
              {
                width: $(this).attr("data-percent")
              },
              4000
            );
        });
      }
    }
  });

  // Déplacement vers le bas d'une section
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // Navigation vers la section des compétences
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });


  // Carrousel Text
  function carrosuelText(sel, time) {
    let $el = $(sel);
    let $list = $el.children();
    let $item = $list.children().first();
    let inherentMarginTop = parseInt($list.css("marginTop"), 20);
    let offset = -inherentMarginTop + $item.height();
    function loop() {
      $list.animate(
        {
          marginTop: -offset
        },
        function() {
          $list.css({ marginTop: inherentMarginTop + 'px' });
          $list.children().first().appendTo($list);
          setTimeout(loop, time);
        }
      );
    }
    
    loop();
  }
  
  carrosuelText('.carrosuelContainer', 1000);


  addEventListener('DOMContentLoaded',function(event){
  
    // array with texts to type in typewriter
    let dataText=["Bootstrap", "Jquery", "Symfony", "Angular", "REACT"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function dataWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h2
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          dataWriter(text, i + 1, fnCallback)
        }, 50);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 2500);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 500);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       dataWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

});
