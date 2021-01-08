gsap.registerPlugin(ScrollTrigger);

let scroll = gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: i
    });
});
