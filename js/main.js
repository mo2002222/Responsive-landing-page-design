let links = document.querySelectorAll(".nav-link");
links.forEach(link =>{
    link.onclick = ()=>{
        for(i=0; i<links.length; i++){
            links[i].classList.remove("active")
        }
        link.classList.add("active");
    }
})