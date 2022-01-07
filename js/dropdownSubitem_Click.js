function dropdowncart(){
    document.getElementById("subcart").classList.toggle("show");
  }

  window.onclick = function(event) {

    const isSubcart = event.target.closest('#cart')

    if (isSubcart && event.target.matches("#subcart")!=null ){
     return;
    } 
    if(!event.target.matches('#subcart')){
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
