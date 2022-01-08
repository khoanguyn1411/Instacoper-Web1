function dropdowncart(){
    document.getElementById("subcart").classList.toggle("show");
  }

  window.onclick = function(event) {

    const isSubcart = event.target.match('#subcart')

    if (isSubcart){
     return;
    } 
    if(!event.target.closest('#subcart')){
      var dropdowns = document.getElementsByClassName('subcart');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // const $menu = $('.subcart');

  // $(document).mouseup(e => {
  //    if (!$menu.is(e.target) // if the target of the click isn't the container...
  //    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
  //    {
  //      $menu.removeClass('show');
  //   }
  //  });
  
  // $('#cart').on('click', () => {
  //   $menu.toggleClass('show');
  // });
  



// document.addEventListener('click', Event =>{
//   const isToggleIcon = Event.target.matches("[data-toggle-cart-icon]")
//   if(!isToggleIcon && Event.target.closest('[data-toggle-cart]') !=null) return
  
//   let currentToggle
//   if(isToggleIcon){
//     currentToggle = e.target.closest('[data-toggle-cart-icon]')
//     currentToggle.classList.toggle('actived')
//   }
//   document.querySelectorAll("[data-toggle-cart].actived").forEach(isToggleIcon => {
//      if(isToggleIcon === currentToggle) return
//      isToggleIcon.classList.remove('actived')
//   })
// })