// small site interactions
document.addEventListener('DOMContentLoaded',function(){
  // simple scrolled class on header
  const header = document.querySelector('.site-header');
  const onScroll = ()=>{
    if(window.scrollY>40) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  };
  onScroll(); window.addEventListener('scroll', onScroll);
});
