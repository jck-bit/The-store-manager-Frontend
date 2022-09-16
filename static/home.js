const activepage = window.location.pathname;

const Navlinks = document.querySelectorAll('ul a').forEach(link =>{
    if(link.href.includes(`${activepage}`)){
        link.classList.add('active')
    }
})