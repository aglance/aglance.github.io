(function ($) {
  $(function () {
    $('.sidenav').sidenav();
    
    $(".magnific-popup-iframe-frontpage").magnificPopup({
      type: "iframe",
      showCloseBtn: false,
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/", id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1&showinfo=0&rel=0"
          }
        },
        markup:
          `<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>
        <div> <a style="position: absolute; left: 50%; bottom: -65px; margin-left: -120px;" class="btn-large green col s5" href="/signup">
        Try free for 30 days<i class="material-icons right">send</i></a></div>`
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
