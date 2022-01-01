function dropdowncart(){
    document.getElementById("subcart").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('#cart')) {
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
