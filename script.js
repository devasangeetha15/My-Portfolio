function toggleMenu(){
const menu=document.getElementById('mobileMenu');
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

const faders=document.querySelectorAll('.fade');
const appearOptions={threshold:0.2};
const appearOnScroll=new IntersectionObserver(function(entries,appearOnScroll){
entries.forEach(entry=>{
if(!entry.isIntersecting){return}
else{entry.target.classList.add('show');appearOnScroll.unobserve(entry.target)}
})},appearOptions);
faders.forEach(fader=>{appearOnScroll.observe(fader)});
