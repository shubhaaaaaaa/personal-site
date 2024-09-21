gsap.registerPlugin(ScrollTrigger);

//Title text Animation
function textAnimation() {
    const tl = gsap.timeline(); // Repeat the animation infinitely with a delay between repeats

    tl.to('.home__data h1', {
        text: {
            value: "Hello, I'm Shubha.",
            speed: 0.4, 
            ease: "power1.inOut" 
        },
        duration: 3, 
        delay: 2
    })

}

//Cursor pointer animation
var main = document.querySelector("body");
main.addEventListener('mousemove',function(event){
    gsap.to("#cursor",{
        x:event.x,
        y:event.y,
        duration:1,
        ease: 'back.out'
    })
})

//Hero section
function heroAnimation(){
    const tl = gsap.timeline()
    
    tl.from(".nav__logo, .nav__item, .nav__btns",{
        y : -30,
        duration: 1,
        delay: 1,
        opacity: 0,
        stagger: 0.055
    })
    
    tl.from(".home__social-icon",{
        x: -20,
        duration: 1,
        opacity: 0,
        stagger: 0.1
    },"-=1")
    
    tl.from(".home_img",{
        duration: 2,
        opacity: 0
    },"-=1")
    
    tl.from(".home__title",{
        x: 20,
        duration: 1,
        opacity: 0,
        stagger: 0.1
    },"-=1.5")
    
    tl.from(".home__subtitle",{
        x: 20,
        duration: 1,
        opacity: 0,
        stagger: 0.1
    },"-=1")
    
    tl.from(".home__scroll",{
        y: 20,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1
    })
}

//About Me section
function aboutmeAnimation(){
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();

    ScrollTrigger.create({
        animation:tl1,
        trigger: ".about__container",
        start: "top 50%",
        end: "bottom 20%",
        scrub:1
    })

    tl1.from(".about .section__title",{
        y : -30,
        duration:1,
        opacity: 0
    })

    tl1.from(".about__container .about__description",{
        y : 30,
        duration:1,
        opacity: 0
    })

    
    ScrollTrigger.create({
        animation:tl2,
        trigger: ".skills .section__title",
        start: "top 90%",
        end: "bottom 20%",
        scrub:1
    })

    tl2.from(".about__info div",{
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger:0.1,
    })

    
    tl2.from(".about__buttons",{
        y : 30,
        duration:1,
        opacity: 0,
    })

    tl2.from(".skills .section__title, .skills .section__subtitle",{
        y : -30,
        duration:1,
        opacity: 0
    },"-=0.5")

    tl2.from(".skills__content.left",{
        x : -100,
        duration:1,
        opacity: 0
    })

    tl2.from(".skills__content.right",{
        x : 100,
        duration:1,
        opacity: 0
    },"-=0.5")

}

//Qualification section
function qualificationAnimation(){
const tl1 = gsap.timeline()
const tl2 = gsap.timeline()

ScrollTrigger.create({
    animation:tl1,
    trigger: ".qualification.section",
    start: 'top 60%',
    end: 'bottom 100%',
    scrub:1
})

tl1.from(".qualification .section__title, .qualification .section__subtitle",{
    y : -30,
    duration:1,
    opacity: 0
})

tl1.from(".qualification__tabs",{
    y : -50,
    duration:1,
    opacity: 0
},'-=1')

ScrollTrigger.create({
    animation:tl2,
    trigger: ".qualification.active",
    start: 'top 90%',
    end: 'bottom 100%'
})

tl2.from(".qualification__data .qualification__left",{
    x : -50,
    duration:0.5,
    opacity: 0
},'anim')

tl2.from(".qualification__data .qualification__right",{
    x : 50,
    duration:0.5,
    opacity: 0
},'anim')
}

//Services section
function servicesAnimation(){
const tl1 = gsap.timeline();

ScrollTrigger.create({
    animation:tl1,
    trigger: '.services__content',
    start:'top 90%',
    end:'bottom 40%',
    scrub:1,
})

tl1.from(".services .section__title, .services .section__subtitle",{
    y : -30,
    duration:1,
    opacity: 0
})

}

//Portfolio section
function portfolioAnimation(){
    const tl1 = gsap.timeline()
    ScrollTrigger.create({
        animation:tl1,
        trigger: '.portfolio',
        scrub:1,
        start:'top 90%',
        end:'700px 100%',
    })
    
    tl1.from(".portfolio .section__title, .portfolio .section__subtitle",{
        y : -30,
        duration:1,
        opacity: 0
    })
    
}

//Testimonial section
function testimonialAnimation(){
    const tl1 = gsap.timeline()
    ScrollTrigger.create({
        animation:tl1,
        trigger: '.testimonial',
        scrub:1,
        start:'top 90%',
        end:'700px 100%',
    })
    
    tl1.from(".testimonial .section__title, .testimonial .section__subtitle",{
        y : -30,
        duration:1,
        opacity: 0
    })
    
}

//Contact section
function contactAnimation(){
    const tl1 = gsap.timeline()
    ScrollTrigger.create({
        animation:tl1,
        trigger: '.contact',
        scrub:1,
        start:'top 90%',
        end:'700px 100%',
    })
    
    tl1.from(".contact .section__title, .contact .section__subtitle",{
        y : -30,
        duration:1,
        opacity: 0
    })

    tl1.from(".grid-child.left",{
        x:-100,
        duration:1,
        opacity: 0
    },'anim')

    tl1.from(".grid-child.right",{
        x:100,
        duration:1,
        opacity: 0
    },'anim')
    
}

//Project section
function projectAnimation(){
    const tl1 = gsap.timeline()
    ScrollTrigger.create({
        animation:tl1,
        trigger: '.project',
        start: "top 90%",
        end: "bottom 60%",
        scrub:1
    })
    
    tl1.to(".project",{
        scale:1.3
    })
    
}


heroAnimation();
textAnimation();
// aboutmeAnimation();
// qualificationAnimation();
// servicesAnimation();
// portfolioAnimation();
// testimonialAnimation();
// contactAnimation();
// projectAnimation();
