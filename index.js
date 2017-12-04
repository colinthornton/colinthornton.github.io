$( document ).ready(function() {
  $(".button-collapse").sideNav();
  $('.carousel').carousel({
    duration: 600,
    shift: 50
  });
  $(".side-nav a").click(function() {
    $(".button-collapse").sideNav("hide");
  });
  $(".card-reveal").click(function(e) {
    $("")
  })
  setInterval(rotateCarousel, 5000);
});

function rotateCarousel() {
  $('.carousel').carousel('next', 2);
}
