document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".sony-homepage-header");
      const isNavbarHidden = localStorage.getItem("navbarHidden");
    
      if (isNavbarHidden === "true") {
        navbar.style.display = "none";
      }
    
      window.addEventListener("beforeunload", function () {
        localStorage.setItem("navbarHidden", navbar.style.display === "none");
      });
    });
    