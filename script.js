function locomotivescrolltrigger() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#mainbody"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#mainbody" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#mainbody", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#mainbody").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}locomotivescrolltrigger()

    
function vplaybtncleaner(){
gsap.to(`#vplaybtn`,{
    scale:0,
    scrollTrigger:{
        trigger:`#video`,
        scroller:`#mainbody`,
        start:`bottom 20%`,
        end:`bottom 20%`,
        scrub:true
    }
})
gsap.to(`#vplaybtn`,{
    scale:0,
    scrollTrigger:{
        trigger:`#video`,
        scroller:`#mainbody`,
        start:`top 80%`,
        end:`top 80%`,
        scrub:true
    }
})
};vplaybtncleaner();


function videobtn(){
let playbtn = document.querySelector(`#vplaybtn`);
let video = document.querySelector(`#video`);

video.addEventListener("mouseenter",function (dets) {
    gsap.to(playbtn,{
        scale:1,
        left:dets.x-55,
        top:dets.y-60,
        duration:0
    })
})
video.addEventListener("mouseleave",function () {
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
video.addEventListener("mousemove",function (dets) {
    gsap.to(playbtn,{
        scale:1,
        left:dets.x-55,
        top:dets.y-60,
        opacity:0.8
    })
})
}videobtn()


function navscroll() {
    gsap.to(`#navsvg`,{
        y:`-56%`,
        scrollTrigger:{
            trigger:`#video`,
            scroller:`#mainbody`,
            start:`top 70%`,
            end:`bottom 165%`,
            scrub:0
        }
    });
    gsap.to(`#nav2-in1`,{
        y:`-56%`,
        opacity:`0`,
        scrollTrigger:{
            trigger:`#video`,
            scroller:`#mainbody`,
            start:`top 70%`,
            end:`bottom 165%`,
            scrub:0
        }
    })
    gsap.to(`#nav2-in1`,{
        display:`none`,
        scrollTrigger:{
            trigger:`#video`,
            scroller:`#mainbody`,
            start:`top center`,
            end:`bottom 165%`,
            scrub:true
        }
    })
}navscroll()


function loadinganimation(){
    gsap.from(`nav`,{
        y:`-100`,
        opacity:0,
        duration:0.5
    })

    gsap.from("#p1heading1",{
        y:`400%`,
        opacity:0,
        duration:0.5,
        delay:0.4
    })
    gsap.from("#p1heading2",{
        y:`200%`,
        duration:0.5,
        opacity:0,
        delay:0.8
    })
    gsap.from("#p1heading3",{
        y:`200%`,
        duration:0.5,
        opacity:0,
        delay:1.2
    })
    gsap.from("#videoin",{
        scale:1.2,
        opacity:0,
        duration:0.5,
        delay:1.6
    })
}loadinganimation()


function setupAnimations() {
  gsap.from(".page2elem", {
    scale: 1.1,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2",
      scroller:"#mainbody",
      start: "top 50%",
      end: "bottom 50%",
    },
  });
}setupAnimations();


function page3animation() {
    gsap.from(`#page3-s2-1`,{
        y:`50%`,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:'#page3-s2',
            scroller:`#mainbody`,
            start:`top 60%`,
            end:`bottom 40%`
        }
    });
    gsap.from(`#page3-s2-img2`,{
        y:`50%`,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:'#page3-s2',
            scroller:`#mainbody`,
            start:`top 60%`,
            end:`bottom 40%`
        }
    });
    gsap.from(`#page3-s2-img3`,{
        y:`50%`,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:'#page3-s2-2',
            scroller:`#mainbody`,
            start:`top 60%`,
            end:`bottom 40%`
        }
    });
    gsap.from(`#page3-s2-img4`,{
        y:`50%`,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:'#page3-s2-2',
            scroller:`#mainbody`,
            start:`top 60%`,
            end:`bottom 40%`
        }
    });
    gsap.from(`#page3-s2-img5`,{
        y:`50%`,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:'#page3-s2-3',
            scroller:`#mainbody`,
            start:`top 60%`,
            end:`bottom 40%`
        }
    });
    gsap.from(`#page3-s2-img6`,{
        y:`50%`,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:'#page3-s2-3',
            scroller:`#mainbody`,
            start:`top 60%`,
            end:`bottom 40%`
        }
    });
}page3animation()


function page3cursor() {
    let c1=document.querySelector(`#page3-s2`);
    let c2=document.querySelector(`#page3follower`);

    c1.addEventListener(`mouseenter`,function(dets){
    gsap.to(c2,{
        scale:1,
        left:dets.x-85,
        top:dets.y-85
    })
    })
    c1.addEventListener(`mouseleave`,function(){
    gsap.to(c2,{
        scale:0,
        opacity:0
    })
    })
    c1.addEventListener(`mousemove`,function(dets){
    gsap.to(c2,{
        scale:1,
        left:dets.x-85,
        top:dets.y-85,
        opacity:0.3
    })
    })
}page3cursor()


function pg3cursorcleaner() {
    gsap.to(`#page3follower`,{
        scale:0,
        scrollTrigger:{
            trigger:`#page3-s2`,
            scroller:`#mainbody`,
            start:`top 70%`,
            end:`top 70%`,
            scrub:true
        }
    })
    gsap.to(`#page3follower`,{
        scale:0,
        scrollTrigger:{
            trigger:`#page3-s2`,
            scroller:`#mainbody`,
            start:`bottom 20%`,
            end:`bottom 20%`,
            scrub:true
        }
    })
}pg3cursorcleaner() 

function footersvg() {
    gsap.to(`.footersvg`,{
        scale:1,
        opacity:1,
        scrollTrigger:{
            trigger:`#footerelem1-2`,
            scroller:`#mainbody`,
            start:`top 65%`,
            end:`top 100%`,
            scrub:1
        }
    });
    gsap.to(`#navsvg`,{
        scale:0,
        scrollTrigger:{
            trigger:`#footerelem1-2`,
            scroller:`#mainbody`,
            start:`top 65%`,
            end:`top 100%`,
            scrub:0
        }
    });
    gsap.to(`#footernavsvg`,{
        scale:1,
        scrollTrigger:{
            trigger:`#footerelem1-2`,
            scroller:`#mainbody`,
            start:`top 65%`,
            end:`top 100%`,
            scrub:0
        }
    });
}footersvg()

function hamburger() {
    const hamburger=document.querySelector(`#hamburger`);
    const computedStyle = window.getComputedStyle(hamburger);
    const displayValue = computedStyle.getPropertyValue('display');
    if (displayValue===`none`) {
        gsap.to(`#nav2-in1`,{
            display:`none`,
            duration:0
        })
        gsap.to(`#nav2-inn2`,{
            transform:`rotate(90deg)`
        })
        gsap.to(`#hamburger`,{
            display:`flex`,
            duration:0
        })
        gsap.to(`#hamburger`,{
            y:0,
        })
        gsap.to(`#nav2-in2`,{
            backgroundColor:`gray`
        })
    } else {
        gsap.to(`#nav2-in1`,{
            display:`flex`,
            duration:0.3
        })
        gsap.to(`#nav2-inn2`,{
            transform:`rotate(0deg)`
        })
        gsap.to(`#hamburger`,{
            y:`-100%`,
            display:`none`
        })
        gsap.to(`#nav2-in2`,{
            backgroundColor:`#f7f7f7c3`
        })
    }
}
function addtocart() {
    const addtocart=document.querySelector(`#addtocart`);
    const computedStyle = window.getComputedStyle(addtocart);
    const displayValue = computedStyle.getPropertyValue('display');
    if (displayValue===`none`) {
        gsap.to(`#addtocart`,{
            display:`flex`,
            transform:`translate(0px,0%)`
        })
        gsap.to(`#nav2-in2`,{
            backgroundColor:`gray`
        })
    } 
    else {
        gsap.to(`#addtocart`,{
            display:`none`,
            transform:`translate(0px,-100%)`
        })   
        gsap.to(`#nav2-in2`,{
            backgroundColor:`#f7f7f7c3`
        })
    }
}