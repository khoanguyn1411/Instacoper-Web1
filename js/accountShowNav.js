const btnShowNavAccount = document.getElementById("btnOpenAccountNav");
const navAccount = document.getElementById("left_side");

if(btnShowNavAccount){
    btnShowNavAccount.addEventListener('click', () =>{
        navAccount.style.left = 0;
    })
}



window.addEventListener('resize', ()=>{
    let width = screen.width;
    if(width>1006){
        navAccount.style.left = 0;
    }
 
});

