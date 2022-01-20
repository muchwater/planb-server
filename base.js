const html = document.documentElement;
const header = document.querySelector('.Nav_bar');

window.addEventListener('scroll', () =>{
    const NavbarHeight = $('.Nav_bar').outerHeight()
    const scrollTop = html.scrollTop;
    const maxSrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxSrollTop;

    if ($('.for_scrolling').outerHeight() <= 3400) {
        var Nb_start = 0.5;
        var Nb_end = 0.6;
    }
    else {
        var Nb_start = 0.7;
        var Nb_end = 0.8;
    }
    if (scrollFraction <= Nb_start) {
        $('.Nav_bar').css("top",-70);
    }
    if (scrollFraction > Nb_start) {
        $('.Nav_bar').css("top",(((scrollFraction-Nb_start)*700)-70));
    }
    if (scrollFraction > Nb_end) {
        $('.Nav_bar').css("top",0);
    }
})