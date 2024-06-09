$(document).ready(function () {
    $(".container").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
  
      image: {
        verticalFit: true,
    
      },
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300, 
        opener: function (element) {
          return element.find("img");
        },
      },
    });
  });