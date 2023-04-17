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

//fadeIn
$(document).ready(function() {
    $('.showElementOnStart').fadeIn(2300);
});


$(document).scroll(function() {
    $(".showElement:hidden").each(function() {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).fadeIn(1000);
        }
    });
});


// signature

function makeSig(id) {
    let temp = document.getElementById(id);
    temp.style.strokeDashoffset = temp.getTotalLength()
    temp.style.strokeDasharray = temp.getTotalLength()
    temp.classList.add("sig")
}

function sigReset(id) {
    let temp = document.getElementById(id);
    temp.classList.remove("sig")
}



// load footer

let isFooter = false;

function loadFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("footer").innerHTML = this.responseText;
        
        $("#buttonFooter").click(_=>{            
            const footer = $("#footer");            
            if (isFooter) {
                footer.css({top:"calc(100vh - 32px)"})

                sigReset("sigJ");
                sigReset("sigO");

                isFooter = false;
            }else{
                footer.css({top:`calc(100vh - ${$("footer").height() + 32}px`})

                makeSig("sigJ");
                makeSig("sigO");

                isFooter = true;
            }
        })

    }
    xhttp.open("GET", "/res/footer.html", true);
    xhttp.send();
}

loadFooter()