const html = document.documentElement;
const header = document.querySelector('.Nav_bar');
const BGI = document.querySelector('.main_BG_IMG');

window.addEventListener('scroll', () =>{
    const NavbarHeight = $('.Nav_bar').outerHeight()
    const scrollTop = html.scrollTop;
    const maxSrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxSrollTop;

    if ($('.for_scrolling').outerHeight() <= 3400) {
        var Nb_start = 0.5;
        var Nb_end = 0.6;
        var small_svg_start = 0.3;
        var big_svg_start = 0;
        var svg_end = 0.5;
    }
    else {
        var Nb_start = 0.7;
        var Nb_end = 0.8;
        var small_svg_start = 0.5;
        var big_svg_start = 0;
        var svg_end = 0.8;
    }
    console.log(Nb_start)
    if (scrollFraction <= Nb_start) {
        $('.Nav_bar').css("top",-70);
    }
    if (scrollFraction > Nb_start) {
        $('.Nav_bar').css("top",(((scrollFraction-Nb_start)*700)-70));
    }
    if (scrollFraction > Nb_end) {
        $('.Nav_bar').css("top",0);
    }
    if (scrollFraction <= 0) {
        $('.main_Content_svg_1').css("left", -2000);
        $('.main_Content_svg_3').css("left", -2000);
        $('.main_Content_svg_4').css("left", 2477);
        $('.main_Content_BIG').css("left", 2477);
    }
    if (scrollFraction > 0) {
        $('.main_Content_svg_1').css("left", scrollFraction/svg_end*2000-2000);
        $('.main_Content_svg_3').css("left", (scrollFraction/svg_end*2000-2000));
        $('.main_Content_svg_4').css("left", 2477-(scrollFraction/svg_end*2000));
        $('.main_Content_BIG').css("left", 2477-(scrollFraction/svg_end*2000));
    }
    if (scrollFraction <= small_svg_start) {
        $('.main_Content_svg_2_1').css("top",1000);
        $('.main_Content_svg_2_2').css("left",914);
        $('.main_Content_svg_2_3').css("left",-500);
        $('.main_Content_svg_2_4').css("top",914);
    }
    if (scrollFraction > small_svg_start) {
        $('.main_Content_svg_2_1').css("top",1000-((scrollFraction-small_svg_start)/(svg_end-small_svg_start)*1000));
        $('.main_Content_svg_2_2').css("left",914-((scrollFraction-small_svg_start)/(svg_end-small_svg_start)*500));
        $('.main_Content_svg_2_3').css("left",(scrollFraction-small_svg_start)/(svg_end-small_svg_start)*500-500);
        $('.main_Content_svg_2_4').css("top",914-((scrollFraction-small_svg_start)/(svg_end-small_svg_start)*500));
    }
    if (scrollFraction > svg_end) {
        $('.main_Content_svg_1').css("left", 0);
        $('.main_Content_svg_3').css("left", 0);
        $('.main_Content_svg_4').css("left", 477);
        $('.main_Content_BIG').css("left", 477);
        $('.main_Content_svg_2_1').css("top",0);
        $('.main_Content_svg_2_2').css("left",414);
        $('.main_Content_svg_2_3').css("left",0);
        $('.main_Content_svg_2_4').css("top",414);
    }
})
