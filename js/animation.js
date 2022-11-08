const lineBlue = document.querySelector('.line-blue')
const lineGreen = document.querySelector('.line-green')
const lineRed = document.querySelector('.line-red')
const lineYellow = document.querySelector('.line-yellow')
const logo = document.querySelector(".logo")
const slack = document.getElementById("slack")

const dropBlue = document.getElementById("drop-blue")
const dropGreen = document.getElementById("drop-green")
const dropRed = document.getElementById("drop-red")
const dropYellow = document.getElementById("drop-yellow")


function endAnimation(){
  const logoTl = gsap.timeline();

  logoTl.to(logo, 0.5, {
    scale: 1.3
  })
  .to(logo, 0.5,{
    scale: 1,
   
  })
  .to(logo, 1,{
    y: "-106px"
  })
  .to(document.body, 0.8, {
    background: "#4A154B"
  }).then(() => {
    gsap.fromTo(slack, {
      opacity: 0
    }, {
      opacity: 1,
      y: "30px"
    })
  })
}


function rotateAnimation(){
  const logoTl = gsap.timeline({ defaults: {duration: 1, ease: "none"} })
  logoTl.to(logo, {
    rotate: "+=180deg",
    onStart: () => {
      gsap.to('body', {
        background: "#BDE8F5"
      })
    }
  })
  .to(logo, {
    rotate: "+=180deg",
    onStart: () => {
      gsap.to('body', {
        background: "#F1E1BD"
      })
    }
  })
  .to(logo, {
    rotate: "+=180deg",
    onStart: () => {
      gsap.to('body', {
        background: "#D0F4E5"
      })
    }
    
  })
  .to(logo, 2,{
    rotate: "+=180deg",
    ease: "power1.out",
    onStart: () => {
      gsap.to('body', {
        background: "#FE97B7"
      })
    }
  }).then(() => {
    endAnimation()
  })
}

function dropsAnimation(){
  const dropTl = gsap.timeline({ defaults: {duration: 1, ease: "bounce.out"} });

  dropTl.add("start")
  .fromTo(dropBlue, {
    opacity: 0,
    y: -10,
  }, {
    opacity: 1,
    y: 0
  }, "start")
  .fromTo(dropGreen, {
    opacity: 0,
    x: 10
  }, {
    opacity: 1,
    x: 0
  }, "start")
  .fromTo(dropRed, {
    opacity: 0,
    x: -10
  }, {
    opacity: 1,
    x: 0
  }, "start")
  .fromTo(dropYellow, {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0
  }, "start").then(() => {
    rotateAnimation()
  })

}


function sizeAnimation(){

  const lineTl = gsap.timeline({ defaults: {duration: 1.3, ease: "none"} })
  lineTl.add("start")
  .to(lineBlue,{
    width: "60px",
  }, "start")
  
  .to(lineGreen,{
    height: "60px",
  }, "start")
  
  .to(lineRed,{
    height: "60px",
  }, "start")
  
  .to(lineYellow,{
    width: "60px",
  }, "start").then(() => {
    dropsAnimation()
  })

}


function runAnimation(){
  const translateTl = gsap.timeline({ defaults: {duration: 1.3, ease: "none"} });
  translateTl.add("start")
  .to(lineBlue, {
    x: 0
  }, "start")
  
  .to(lineGreen,{
    y: 0
  }, "start+=0.4")
  
  .to(lineRed,{
    y: 0
  }, "start+=0.6")
  
  .to(lineYellow,{
    x: 0
  }, "start+=0.3").then(() => {
    sizeAnimation()
  })
}


runAnimation()
