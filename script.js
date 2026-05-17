document.addEventListener("DOMContentLoaded", function () {
  const aboutPieces = document.querySelectorAll("#about .piece");
aboutPieces.forEach(piece => {
  setTimeout(() => {
    piece.classList.add("show");
  }, 100); // small delay before first piece
});


  // =========================
  // SECTION SHOW/HIDE
  // =========================
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  function animateSkills() {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => {
      const percent = skill.getAttribute("data-percent");
      if (!document.body.classList.contains("no-anim")) {
        setTimeout(() => {
          skill.style.width = percent; // animated fill
        }, 50);
      } else {
        skill.style.transition = "none";
        skill.style.width = percent; // instant fill
      }
    });
  }

  function resetSkills() {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => skill.style.width = "0");
  }

  function showSection(id) {
    sections.forEach(section => section.classList.remove("active"));
    const activeSection = document.getElementById(id);
    if (activeSection) activeSection.classList.add("active");

    if (id === "skills") animateSkills();
    else resetSkills();
  }

  // Show About on page load
  showSection("about");

  // Navbar click control
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });


  // =========================
// SETTINGS FIXED VERSION
// =========================

// Dark Mode
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
}

// Font Size
let currentFontSize = 16;

window.increaseFont = function () {
  currentFontSize += 2;
  document.body.style.fontSize = currentFontSize + "px";
};

window.decreaseFont = function () {
  currentFontSize -= 2;
  document.body.style.fontSize = currentFontSize + "px";
};

// Animation Toggle
const animationToggle = document.getElementById("animationToggle");

if (animationToggle) {
  animationToggle.addEventListener("change", function () {
    document.body.classList.toggle("no-anim");

    const skills = document.querySelectorAll(".skill-fill");

    if (document.body.classList.contains("no-anim")) {
      skills.forEach(skill => skill.style.transition = "none");
    } else {
      skills.forEach(skill => skill.style.transition = "width 1s ease-in-out");
    }
  });
}

  // =========================
  // PROJECT ACCORDION
  // =========================
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content.classList.contains('open')) {
        content.classList.remove('open');
      } else {
        document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
        content.classList.add('open');
      }
    });
  });

});
// =========================
// MOBILE NAV TOGGLE FIX
// =========================
const navToggleBtn = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav-links");

if (navToggleBtn) {
  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    content.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
