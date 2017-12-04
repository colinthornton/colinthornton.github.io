$( document ).ready(function() {
  $(".button-collapse").sideNav();
  $(".side-nav a").click(function() {
    $(".button-collapse").sideNav("hide");
  });
});
