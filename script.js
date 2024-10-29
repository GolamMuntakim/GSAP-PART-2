gsap.to("#page2 h1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        marker:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})