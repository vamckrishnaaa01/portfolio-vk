const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.12});document.querySelectorAll(".section,.tap-section,.publication,.project-feature,.skill-card,.statement,.contact").forEach(el=>{el.classList.add("reveal");reveal.observe(el)});
const skills=document.querySelector(".skill-tree");
if(skills){
  [...skills.querySelectorAll(".skill-card")].forEach(card=>{
    card.addEventListener("pointermove",e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-0.5;
      const y=(e.clientY-r.top)/r.height-0.5;
      card.style.transform="translateY(-5px) perspective(700px) rotateX("+(-y*5)+"deg) rotateY("+(x*7)+"deg)";
    });
    card.addEventListener("pointerleave",()=>card.style.transform="");
  });
}
