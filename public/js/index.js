
  
    //Landing Page animation
    const landingTl = gsap.timeline({duration: .3});
    landingTl.to('#heroBox h1', {opacity: 1, left: 0});
    landingTl.to('#heroBox h2', {opacity: 1, bottom: 0}, '<.015');
    landingTl.to('#heroBox h3', {opacity: 1, right: 0}, '<.015');
    landingTl.to('#navUl ul', {opacity: 1, top: 0});
    landingTl.to('body', {overflow: 'unset'});

    //Artist Section Animations
    ScrollTrigger.batch(".artistCard", {
      onEnter: batch => gsap.to(batch, {opacity: .95, bottom: 0, stagger: 0.2, overwrite: true})
  });

    // Artist Section Animations
    const piercingTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#piercingSection .sectionHeader",
        pin: false,   // pin the trigger element while active
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "+=100" // end after scrolling 500px beyond the start
      }, duration: .1
    });
    piercingTl.to('#piercingImage', {transform: 'translate(0, 0)', opacity: .75, ease:'power1.inOut'});
    piercingTl.to('.piercingArtistImage', {transform: 'translate(0, 0)', opacity: 1, ease:'power1.inOut'}, '<=.001');
    piercingTl.to('.piercingArtistLink h1', {transform: 'translate(0, 0)', opacity: 1, ease:'power1.inOut'}, '>=.15');
    piercingTl.to('.piercingArtistLink a', {transform: 'translate(0, 0)', opacity: 1, ease:'power1.inOut'}, '>=.15');


  $('.hamburger--squeeze').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('#mobileNav').toggleClass('active');
    $('body').toggleClass('bodyOverflow');
  });
  $('#mobileNav li a').on('click', function(){
    navToggle();
    $('.hamburger').toggleClass('is-active');
  });
  //Open location in Mapping App
  function navigate(lat, lng) {
     // If it's an iPhone..
     if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
       function iOSversion() {
         if (/iP(hone|od|ad)/.test(navigator.platform)) {
           // supports iOS 2.0 and later
           var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
           return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
         }
       }
       var ver = iOSversion() || [0];

       var protocol = 'http://';
       if (ver[0] >= 6) {
         protocol = 'maps://';
       }
       window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
     }
     else {
       window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
     }
   };
  //mobileNav toggle
  function navToggle(){
    $(this).toggleClass('is-active');
    $('#mobileNav').toggleClass('active');
    $('body').toggleClass('bodyOverflow');
  }
