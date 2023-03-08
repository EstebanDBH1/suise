

let pageTran = ()=>{
  
  var tl = gsap.timeline();
  
  tl.to(".page-transition", {
  y: 0,
  ease: Expo.easeInOut, 
  duration: 1,
});

tl.to(".page-transition", {
  opacity: 0, 
  delay: 1,
  duration: 1.5,
});
  
  
  tl.set('.page-transition',{
    y: "100%", 
    opacity: 1
  })
  
}









let mainAnimation = ()=>{
TweenMax.staggerFrom(".container-header > *", 2, {
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut,
 
});

TweenMax.staggerFrom(" .txt-home", 2, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});

} 



delay = (n) => {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(()=> {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();
                pageTran();
                await delay(1000);
                done();
            },

            async enter (data){
                mainAnimation();
            },

            async once(data){
                mainAnimation();
            }
        }
    ]
});