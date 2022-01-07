// function dropdownSPnav() {
//     document.getElementById("subnavSp").classList.toggle("showsubnavSP");
//   }

  function dropdownSPnavBrand() {
    document.getElementById("BranchSP").classList.toggle("showBrandSP");
  }
  function dropdownSPPhuKien(){
    document.getElementById("PhuKienSP").classList.toggle("showPhuKienSP");
  }
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    const isDropdownContent = e.target.matches('[data-dropdownn-content]')
    if(!isDropdownButton && isDropdownContent!=null ) return

    let currentDropdown
    if(isDropdownButton){
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('showSubnav')
    }  

    document.querySelectorAll("[data-dropdown].showSubnav").forEach(dropdown => {
      if(dropdown === currentDropdown) return
      dropdown.classList.remove('showSubnav');
    })
  })





