 /* eslint-disable */
 $(document).ready(function () {
     const headerTitle = $('.header__title');
     // const header = $('.header');
     // const glitch = $('.glitch');
     const top = $('.header__title-top');
     const btm = $('.header__title-btm');
     const tm = TweenMax;
     const particles = $('#particles-js2');
     const hamburger = $('.nav__hamburger');
     const hamburgerLine = $('.nav__hamburger-line');
     const arrow = $('.header__arrow');

     // Animating Title
     tm.from(headerTitle, 0.5, {
         opacity: 0
     }).delay(0.15);
     tm.from(headerTitle, 1, {
         color: '#000000'
     }).delay(0.25);
     tm.to(top, 0.25, {
         className: "+=glitch"
     }).delay(1.25);
     tm.to(btm, 0.25, {
         className: "+=glitch"
     }).delay(1.75);
     tm.to(top, 0.1, {
         left: 4,
         ease: Bounce.easeOut
     }).delay(1).repeat(-1).repeatDelay(2);
     tm.to(btm, 0.1, {
         left: -3,
         ease: Bounce.easeOut
     }).delay(2.15).repeat(-1).repeatDelay(3);
     // Animating Particles
     tm.from(particles, 8, {
         right: '-10vw',
         ease: Elastic.easeOut
     });
     tm.from(particles, 0.5, {
         opacity: 0.25,
         ease: Bounce.easeOut
     }).delay(1).repeat(-1).repeatDelay((Math.random() + 0.1) * 10);

     //  Animating Arrow
     tm.from(arrow, 3, {
         bottom: -200,
         ease: Elastic.easeOut
     }).delay(1);
     tm.from(arrow, 0.5, {
         opacity: 0.25,
         ease: Bounce.easeOut
     }).delay(4).repeat(-1).repeatDelay((Math.random() + 0.1) * 10);


 });
 /* eslint-enable */