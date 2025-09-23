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
    } catch (err) {
      console.error(`Failed to load ${file}:`, err);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPart("header", "header.html");
  loadPart("footer", "footer.html");
});
