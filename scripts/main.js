// navbar animation
document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }
}); 



$(document).ready(function() {
    $('.showElementOnStart').fadeIn(2300);
});


//fadeIn
$(document).scroll(function() {
    $(".showElement:hidden").each(function() {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).fadeIn(1000);
        }
    });
});

