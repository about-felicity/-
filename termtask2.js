var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});

$owl.owlCarousel({
  center: true,
  loop: true,
  nav:true,
  items: 5,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});

$(document).on('click', '.owl-item>div', function() {
  var $speed = 300;
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});