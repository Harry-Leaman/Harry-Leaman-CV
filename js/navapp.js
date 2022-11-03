const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;
    let lastScroll = 0;

    //listens for event scroll on y axis
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset
            if (currentScroll <= 0) {
            body.classList.remove("scroll-up")
         }
            //if downward scrolling  adds active class of scroll down, in turn trigger CSS code to hide the nav
            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
                body.classList.remove("scroll-up")
                body.classList.add("scroll-down")
            }    
            //if up scrolling adds active class of scroll up
            if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
                body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
            }            
            lastScroll = currentScroll;
     });
    
    
    //aria current code for selecting the active page, paired with css will show user what page they are currently on
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.href === window.location.href){
          link.setAttribute('aria-current', 'page')
        }
      })
    //toggles the burger nav menu when the "screen is in mobile menu"
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animtation for href links fading in
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation= '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');

    });

}

navSlide();



