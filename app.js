let swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1000,
    cubeEfect : {
        shadow: false,
        slideShadow: true,
        shadowOffset :10,
        shadowScale : 0.94
    },
    autoplay: {
        delay: 2400,
        pauseOnMouseEnter: true, 

    }
});