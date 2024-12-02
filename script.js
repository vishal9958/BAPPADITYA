function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
  
    // Check if elements are found
    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    } else {
      console.error("Menu or Hamburger Icon not found in the DOM.");
    }
  }