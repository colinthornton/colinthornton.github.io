$( document ).ready(function() {
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

  $('.carousel').carousel({
    duration: 600,
    shift: 50,
  });
  setInterval(rotateCarousel, 5000);
});

function rotateCarousel() {
  $('.carousel').carousel('next', 2);
}
