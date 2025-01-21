document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((item, index) => {
      item.style.setProperty("--delay", index + 1);
    });
  });
  