let menu = document.querySelector(".menu");
let dropMenu = document.querySelector(".burger__back");

menu.addEventListener("click", event => {
    dropMenu.style.display = 'flex';
    anime({
        targets: ".burger__back",
        translateX: {
            value: [750, 0],
            easing: 'easeInOutSine',
            duration: 500
        },
        opacity: {
            value: [0, 1],
            easing: 'easeInOutSine',
            duration: 600
        }
    })
});

dropMenu.addEventListener("click", event => {
    anime({
        targets: ".burger__back",
        translateX: {
            value: [0, 750],
            easing: 'easeInOutSine',
            duration: 500
        },
        opacity: {
            value: [1, 0],
            easing: 'easeInOutSine',
            duration: 600
        }
    })
    setTimeout(() => {
        dropMenu.style.display = 'none';
    }, 500);
})

anime({
    targets: ".home",
    opacity:[0, 1],
    duration: 900,
    easing: 'easeInOutSine',
});

anime({
    targets: ".header",
    translateY: [-100, 0],
    duration: 600,
    easing: 'easeInOutSine',
});

const animation = anime({ 
    targets: ".about", 
    autoplay: !1, 
    opacity: { value: [0, 1] }, 
    translateX: [100, 0]
}),
animation2 = anime({ 
    targets: ".tasks", 
    autoplay: !1, 
    opacity: { value: [0, 1] }, 
    translateX: [-100, 0]
}),
animation3 = anime({ 
    targets: ".projects", 
    autoplay: !1, 
    opacity: { value: [0, 1] }, 
    translateX: [100, 0]
}),
animation4 = anime({ 
    targets: ".contact", 
    autoplay: !1, 
    opacity: { value: [0, 1] }, 
    translateX: [100, 0]
}),
    section = document.querySelector(".about"),
    section2 = document.querySelector(".tasks"),
    section3 = document.querySelector(".projects"),
    section4 = document.querySelector(".contact"),
    animationOnScroll = function (e, t = 100, a = 0) {
        let i = window.pageYOffset - e.offsetTop;
        return (i + a) / t;
    };

window.onscroll = function () {
    animation.seek(animationOnScroll(section, 1e3, 500) * animation.duration),
    animation2.seek(animationOnScroll(section2, 1e3, 450) * animation.duration),
    animation3.seek(animationOnScroll(section3, 1e3, 300) * animation.duration),
    animation4.seek(animationOnScroll(section4, 1e3, 450) * animation.duration)
};