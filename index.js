gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
//   });

// let scroll = gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         // snap: i
//     });
// });

// {
//     scrollTrigger:{
//         trigger: "#panel1",
//         start: "top top",
//         end: "",
//         pin: true
//     }
// }

// let panel1Scroll = ScrollTrigger.create({
//     trigger: "#panel1",
//     start: "top top",
//     pin: true,
//     pinSpacing: false
// })



let panel1TL = gsap.timeline({
    scrollTrigger: {
        trigger: "#panel1",
        start: "top top",
        scrub: 0.7,
        end: "+=300%",
        pin: true,
        pinSpacing: true
    }
})

panel1TL.addLabel("petal6", 2)
panel1TL.addLabel("petal5", 1.6)
panel1TL.addLabel("petal4", 1.2)
panel1TL.addLabel("petal3", 0.8)
panel1TL.addLabel("petal2", 0.4)
panel1TL.addLabel("petal1", 0)
panel1TL.addLabel("end", 2.5)

panel1TL.from(".petal__center", {opacity: 0})
    .from(".petal__left__6", {opacity: 0, rotation: 20, ease: "power2.inOut", transformOrigin: "left bottom", x: 50}, "petal6")
    .from(".petal__right__6", {opacity: 0, rotation: -20, ease: "power2.inOut", transformOrigin: "right bottom", x: -50}, "petal6")
    .from(".petal__left__5", {opacity: 0, rotation: 30, ease: "power2.inOut", transformOrigin: "left bottom", x: 140}, "petal5")
    .from(".petal__right__5", {opacity: 0, rotation: -30, ease: "power2.inOut", transformOrigin: "right bottom", x: -140}, "petal5")
    .from(".petal__left__4", {opacity: 0, rotation: 40, ease: "power2.inOut", transformOrigin: "left bottom", x: 220}, "petal4")
    .from(".petal__right__4", {opacity: 0, rotation: -40, ease: "power2.inOut", transformOrigin: "right bottom", x: -220}, "petal4")
    .from(".petal__left__3", {opacity: 0, rotation: 60, ease: "power2.inOut", transformOrigin: "right bottom", x: 30},"petal3")
    .from(".petal__right__3", {opacity: 0, rotation: -60, ease: "power2.inOut", transformOrigin: "left bottom", x: -30}, "petal3")
    .from(".petal__left__2", {opacity: 0, rotation: 60, ease: "power2.inOut", transformOrigin: "left bottom", x: 300, y: -200}, "petal2")
    .from(".petal__right__2", {opacity: 0, rotation: -60, ease: "power2.inOut", transformOrigin: "left bottom", x: -200, y: -40}, "petal2")
    .from(".petal__left__1", {opacity: 0, rotation: 62, ease: "power2.inOut", transformOrigin: "left bottom", x: 61, y: -210}, "petal1")
    .from(".petal__right__1", {opacity: 0, rotation: -60, ease: "power2.inOut", transformOrigin: "left bottom", x: 50, y: -20}, "petal1")




// let panel1Scroll = ScrollTrigger.create({
//     trigger: "#panel1",
//     start: "top top",
//     pin: true,
//     pinSpacing: false
// })

// let panel2Scroll = ScrollTrigger.create({
//     trigger: "#panel2",
//     start: "top top",
//     pin: true,
//     markers: true,
//     pinSpacing: false
// })

// let panel3Scroll = ScrollTrigger.create({
//     trigger: "#panel3",
//     start: "top top",
//     pin: true,
//     pinSpacing: false
// })

// let panel4Scroll = ScrollTrigger.create({
//     trigger: "#panel4",
//     start: "top top",
//     markers: true,
//     pin: true,
//     pinSpacing: false
// })

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
