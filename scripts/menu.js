$(document).ready(function () {
    const open = 'is-active';
//    const open = 'nav__hamburger--is-open';
    const hamburger = $('.nav__hamburger');
    const content = $('.content');
    const menu = $('.nav__menu');
    const menuOpen = 'nav__menu--is-open';
    

    $(document.body).append(
        '<div class="blurred-content__frame">' +
        '<div class="blurred-content"></div>' +
        '</div>');
    
    content.clone().appendTo('.blurred-content');
    
$('#particles-js').last().prop('id', 'particles-js2');

    const blurredContentFrame = $('.blurred-content__frame');
    const blurredContentFrameOpen = 'blurred-content__frame--is-open';

    hamburger.click(function () {
        $(this).toggleClass(open);
        blurredContentFrame.toggleClass(blurredContentFrameOpen);
        menu.toggleClass(menuOpen);
//        tm.to(blurredContentFrame, 1, {height: 100%, ease: Bounce.easeOut});
//        tm.to(menu, 1, {top: 0, ease: Bounce.easeOut});
    });
    
});