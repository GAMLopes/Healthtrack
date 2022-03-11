window.addEventListener('scroll',() =>{
    const header=document.querySelector('.header-principal'); 
    header.classList.toggle('active-scroll', window.scrollY > 80);
})