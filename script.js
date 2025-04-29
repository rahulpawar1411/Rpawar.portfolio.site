// var crcs = document.querySelector("#crcs");
// var nav  = document.querySelectorAll("#nav");

// document.querySelector("#main").addEventListener("mousemove",function(dets){
//  gsap.to(crcs,{
//     x: dets.x,
//     y: dets.y,
//     duration:1
//  })
// })

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()


var min1 = document.querySelector(".min1");
var min2 = document.querySelector(".min2");
var min3 = document.querySelector(".min3");
var open = document.querySelector(".open");
var close = document.querySelector(".close");
var min1_a = document.querySelector(".min1 a");
var min2_a = document.querySelector(".min2 a");
var min3_a = document.querySelector(".min3 a");


function openNav() {

  open.addEventListener("click", () => {

    gsap.to(".min1", {
      left: "5%",
      width: "80px",
      height: "60%",
      // display:"none"
    }, "z")
    gsap.to(".min1 a", {
      opacity: 1,
      
    }, "z")
    gsap.to(".close", {
      display: "block",
    }, "z")

    

    gsap.to(".min2", {
      left: "28%",
      width: "90px",
      height: "60%",
      // display:"none"
    }, "z")
    gsap.to(".min2 a", {
      opacity: 1
    }, "z")


    gsap.to(".min3", {
      left: "52%",
      width: "100px",
      height: "60%",
      // display:"none"
    }, "z")
    gsap.to(".min3 a", {
      opacity: 1
    }, "z")

  })
}
openNav()

function closeNav() {

  close.addEventListener("click", () => {

    gsap.to(".min1", {
      left: "80%",
      width: "20px",
      height: "50%",
      // display:"none"
    }, "z")
    gsap.to(".min1 a", {
      opacity: 0,
      
    }, "z")
    gsap.to(".close", {
      display: "none",
    }, "z")
    gsap.to(".open", {
      display: "block",
    }, "z")

    // min1.style.left = "79%";
    // min1.style.width = "20px";
    // min1.style.height = "40%";
    // min1_a.style.opacity = "0";
    // open.style.display = "block";
    // close.style.display = "none";

    gsap.to(".min2", {
      left: "80.5%",
      width: "20px",
      height: "60%",
      // display:"none"
    }, "z")
    gsap.to(".min2 a", {
      opacity: 0
    }, "z")

    // min2.style.left = "80%";
    // min2.style.width = "20px";
    // min2.style.height = "50%";
    // min2_a.style.opacity = "0";

    gsap.to(".min3", {
      left: "81.5%",
      width: "20px",
      height: "65%",
      // display:"none"
    }, "z")
    gsap.to(".min3 a", {
      opacity: 0
    }, "z")

    // min3.style.left = "81%";
    // min3.style.width = "20px";
    // min3.style.height = "65%";
    // min3_a.style.opacity = "0";

  })
}
closeNav()


// function project() {

//   var pros = document.querySelectorAll(".pro");
//   var page2 = document.querySelector("#page2");
//   var i = document.querySelector("#page2 .pro i");


//   pros.forEach(function (el) {

//     el.addEventListener("mouseenter", function () {
//       // console.log(el.childNodes[1]);
//       // el.childNodes[1].style.opacity = "1"

//       // page2.style.backgroundColor = "#000";
//       //  page2.style.color = "#fff";
//       //  el.i.style.rotate= "45deg";

//       gsap.to(el.childNodes[1], {
//         opacity: 1,
//         scale: 1,
//       })

//     })

//     el.addEventListener("mouseleave", function () {
//       // el.childNodes[1].style.opacity = 0;

//       //  page2.style.backgroundColor = "#fff";
//       //    page2.style.color = "#000"
//       //    el.i.style.rotate= "2deg";

//       gsap.to(el.childNodes[1], {
//         opacity: 0,
//         scale: 0,
//       })

//     })

//     el.addEventListener("mousemove", function (dets) {
//       gsap.to(el.childNodes[1], {
//         x: dets.x - el.getBoundingClientRect().x - 480,
//         y: dets.y - el.getBoundingClientRect().y,
//       })
//     })

//     el.addEventListener("click", ()=>{
//       alert("please wait for a minutes site is loading...")
//     })


//   })
// }
// project()



function bubBtn() {
   var page3 = document.querySelector("#page3 ");
  var aboutbtn = document.querySelector("#page3 #about-can .bub .ab-bub");
  var aboutcan = document.querySelector("#page3 #about-can .bub ");

  aboutcan.addEventListener("mousemove", function (dets) {

    gsap.to("#page3 #about-can .bub .ab-bub", {
      x: dets.x - aboutbtn.getBoundingClientRect().x - 60,
      y: dets.y - aboutbtn.getBoundingClientRect().y - 100,
      scale: 1.1,
    })
    // page3.style.backgroundColor = "#652F51";
   
  })
  aboutcan.addEventListener("mouseenter", function () {
    gsap.to("#page3 #about-can .bub .ab-bub", {
      // x:"50%",
      // y:"50%",

    })
   
  })
  aboutcan.addEventListener("mouseleave", function () {
    gsap.to("#page3 #about-can .bub .ab-bub", {
      x: "0%",
      y: "0%",
      scale: 1,

    })
 
  })

}
bubBtn()


// function bubsubmit() {
//   var aboutbtn = document.querySelector("#page5 #fill .submit .bub .ab-bub");
//   var aboutcan = document.querySelector("#page5 #fill .submit  .bub ");

//   aboutcan.addEventListener("mousemove", function (dets) {

//     gsap.to(" .bub .ab-bub", {
//       x: dets.x - aboutbtn.getBoundingClientRect().x - 60,
//       y: dets.y - aboutbtn.getBoundingClientRect().y - 100,
//       scale: 1.1,
//     })
//   })
//   aboutcan.addEventListener("mouseenter", function () {
//     gsap.to(".bub .ab-bub", {
//       // x:"50%",
//       // y:"50%",

//     })
//   })
//   aboutcan.addEventListener("mouseleave", function () {
//     gsap.to(" .bub .ab-bub", {
//       x: "0%",
//       y: "0%",
//       scale: 1,

//     })
//   })

// }
// bubsubmit()


// -----------------------------------------------------animations


function loader() {

  var tl = gsap.timeline();
  tl.from(".mini1", {
    opacity: 1,
    scale: -1,
    duration: 1.2,
    repeat: 2,
    yoyo: true,

  }, "a")
  tl.to(".mini", {
    opacity: 0,
    scale: 0,
    duration: 1,
    repeat: 2,
    yoyo: true,
    // delay:1,
  }, "a")
  tl.to("#loader", {
    // duration:?,
    ease: "",
    y: "-100% ",
    // delay: 1.1,
  })

  tl.from("#page1 h1", {
  y: 100,
  opacity: 0,
  duration:1,
  },"p1")
  tl.from("#page1 p", {
    y: 100,
    opacity: 0,
    duration:1,
    },"p1")



    tl.to("#page8 .wav", {
      y: 100,
      // opacity: 0,
      // duration: .5,
      scrollTrigger:{
        trigger: "#page8 .wav",
        scroller: "#main",
        // markers: true,
        start: "top 50%",
        end:"top 20%",
        scrub:2,
      }
      })
}
loader()



// function navscroll(){
//   const page1 = document.querySelector("#page1");

//   const navp1 = document.querySelector(".navp1")
//   .addEventListener("click",function(){
//     page1.scrollIntoView({behavior:"smooth"})
//   })
// }



// =====================================================


