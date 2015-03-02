var dp = jQuery;
dp.noConflict();
dp(document).ready(function() {

    //SMOOTH SCROLL
    dp('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });

    //SUPER SLIDES
    dp('#home-slide').superslides({
        animation: 'fade', // You can choose either fade or slide
        play: 6000
    });

    //ANIMAZE
    dp('.animaze').bind('inview', function(event, visible) {
        if (visible) {
            dp(this).stop().animate({
                opacity: 1,
                top: '0px'
            }, 500);
        }
        /* REMOVE THIS if you want to repeat the animation after the element not in view
              else {
                $(this).stop().animate({ opacity: 0 });
                $(this).removeAttr('style');
              }*/
    });
    dp('.animaze').stop().animate({
        opacity: 0
    });

    //SERVICES
    dp("#dp-service").sudoSlider({
        customLink: 'a.servicesLink',
        responsive: true,
        speed: 350,
        prevNext: false,
        useCSS: true,
        effect: "fadeOutIn",
        continuous: true,
        updateBefore: true
    });

    //TEXT ROTATOR
    dp(".rotatez").textrotator({
        animation: "fade",
        separator: ",",
        speed: 1700
    });

    //PORTFOLIO
    dp('.portfolioContainer').mixitup({
        filterSelector: '.portfolioFilter a',
        targetSelector: '.portfolio-item',
        effects: ['fade', 'scale']
    });

    //QUOTE SLIDE
    dp("#quote-slider").sudoSlider({
        customLink: 'a.quoteLink',
        speed: 425,
        prevNext: true,
        responsive: true,
        prevHtml: '<a href="#" class="quote-left-indicator"><i class="icon-arrow-left"></i></a>',
        nextHtml: '<a href="#" class="quote-right-indicator"><i class="icon-arrow-right"></i></a>',
        useCSS: true,
        continuous: true,
        effect: "fadeOutIn",
        updateBefore: true
    });

    //MAGNIFIC POPUP
    dp('.popup').magnificPopup({
        type: 'image'
    });

    //PARALLAX
    dp('.parallaxize').parallax("50%", 0.3);

    // CONTACT SLIDER
    dp("#contact-slider").sudoSlider({
        customLink: 'a.contactLink',
        speed: 750,
        responsive: true,
        prevNext: false,
        useCSS: false,
        continuous: false,
        updateBefore: true,
        effect: "fadeOutIn"
    });
});
dp(window).load(function() {
    dp("#lazyload").fadeOut();
});

// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42796191-1', 'mgingras.ca');
ga('send', 'pageview');

new Timesheet('timesheet-alternative', 2010, 2015, [
  ['08/2010', '04/2015', '<strong>Carleton University</strong> - Honours BCS: Software Engineering Stream', 'carleton'],
  ['04/2012', '12/2012', '<strong>IBM</strong> - Business Intelligence Technical Analyst', 'ibm'],
  ['01/2013', '08/2013', '<strong>BlackBerry</strong> - Wireless Data Application Developer', 'blackberry'],
  ['11/2013', '04/2014', '<strong>Contract</strong> - Software Development', 'contract'],
  ['01/2014', '04/2014', '<strong>Carleton Universtity</strong> - Teaching Assistant: Introduction to Systems Programming', 'carleton'],
  ['04/2014', '08/2014', '<strong>IBM</strong> - Extreme Blue Technical Intern', 'ibm'],
  ['09/2014', '02/2015', '<strong>IBM</strong> - Full Stack Software Developer', 'ibm']
]);
