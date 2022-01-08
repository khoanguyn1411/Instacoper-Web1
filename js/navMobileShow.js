const btnShowNav = document.getElementById("btnShowNav");
const btnCloseNav = document.getElementById("btnCloseNav");
const nav = document.getElementById("navMenu");

if(btnShowNav){
    btnShowNav.addEventListener('click', () =>{
        nav.classList.add('active');
    })

 
}

if(btnCloseNav){
    btnCloseNav.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
    
}


const btnShowLeftMenu = document.getElementById("btnShowLeftMenu");
const btnCloseLeftMenu = document.getElementById("btnCloseLeftMenu");
const leftMenu = document.getElementById("leftMenu");

if(btnShowLeftMenu){
    btnShowLeftMenu.addEventListener('click', () =>{
        leftMenu.classList.add('active');
    })

 
}

if(btnCloseLeftMenu){
    btnCloseLeftMenu.addEventListener('click', () =>{
        leftMenu.classList.remove('active');
    })
    
}






