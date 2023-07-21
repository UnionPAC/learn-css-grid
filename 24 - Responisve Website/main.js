const menuBtn = document.querySelector("button[aria-expanded]");

function toggleMenu(e) {
  const isExpanded = e.target.getAttribute("aria-expanded") === "true" || false;
  menuBtn.setAttribute("aria-expanded", !isExpanded);
}

menuBtn.addEventListener("click", toggleMenu);
