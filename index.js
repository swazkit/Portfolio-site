function classToggle() {
    const navs = document.querySelectorAll('.links')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  $('.Navbar__Link-toggle').click(classToggle); 