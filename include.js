async function loadPart(id, file) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const res = await fetch(file);
      el.innerHTML = await res.text();

      // Highlight active nav link
      const links = el.querySelectorAll("nav a");
      links.forEach(link => {
        if (link.getAttribute("href") === window.location.pathname.split("/").pop()) {
          link.classList.add("active");
        }
      });

      // If we just loaded the header, attach hamburger listener
      if (id === "header") attachHamburger();
      
    } catch (err) {
      console.error(`Failed to load ${file}:`, err);
    }
  }
}

// Hamburger toggle function
function attachHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open"); // optional: for animated X
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPart("header", "header.html");
  loadPart("footer", "footer.html");
});
