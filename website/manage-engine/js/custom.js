function openNav() {
  document.getElementById("mySidenav").style.left = "0%";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-100%";
}


$(document).on('ready', function() {
      $(".single-item").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
});
