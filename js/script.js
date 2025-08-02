// Professional subtitles relevant to NurMohammad Sarder
const subtitles = [
  "Project Manager & Data Specialist",
  "AI-Driven Solutions Expert",
  "E-commerce Operations Professional",
  "CRM & ERP System Specialist",
  "Team Coordination Expert",
  "Content Management Professional",
  "Lead Generation Specialist",
  "Backend Operations Manager",
  "Quality Assurance Professional",
  "Remote Work Specialist",
];

// Enhanced typing effect for name
function typeWriterName() {
  const nameElement = document.getElementById("nameElement");
  const nameText = "NURMOHAMMAD SARDER";
  let i = 0;

  nameElement.innerHTML = "";
  nameElement.classList.add("typing-name");

  function type() {
    if (i < nameText.length) {
      nameElement.innerHTML += nameText.charAt(i);
      i++;
      setTimeout(type, 80); // Slightly faster typing for name
    } else {
      // Remove cursor after name is complete
      setTimeout(() => {
        nameElement.classList.remove("typing-name");
        // Start subtitle typing after name is complete
        setTimeout(startSubtitleTyping, 300);
      }, 1000);
    }
  }

  type();
}

// Enhanced typing effect for rotating subtitles
function startSubtitleTyping() {
  const subtitleElement = document.getElementById("subtitleElement");
  let currentSubtitleIndex = 0;

  function typeSubtitle() {
    const currentText = subtitles[currentSubtitleIndex];
    let charIndex = 0;

    subtitleElement.innerHTML = "";
    subtitleElement.classList.add("typing-subtitle");

    function typeChar() {
      if (charIndex < currentText.length) {
        subtitleElement.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 100); // Typing speed
      } else {
        // Wait before erasing
        setTimeout(eraseSubtitle, 2500);
      }
    }

    function eraseSubtitle() {
      if (charIndex > 0) {
        subtitleElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseSubtitle, 50); // Erasing speed
      } else {
        subtitleElement.classList.remove("typing-subtitle");
        currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length;
        setTimeout(typeSubtitle, 500); // Pause before next subtitle
      }
    }

    typeChar();
  }

  typeSubtitle();
}

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// JavaScript to trigger download
function downloadResume() {
  const resumePath = "files/NurMohammad Sarder-Resume.pdf";
  const a = document.createElement("a");
  a.href = resumePath;
  a.download = "NurMohammadSarder_Resume.pdf";
  a.click();
}

// Toggle section visibility
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  const header = event.target;

  if (section.style.display === "none") {
    section.style.display = "block";
    section.style.animation = "slideInUp 0.5s ease-out";
    header.style.color = "#667eea";
  } else {
    section.style.display = "none";
    header.style.color = "#000";
  }
}

// Highlight job entry
function highlightJob(element) {
  document.querySelectorAll(".job-entry").forEach((job) => {
    job.style.border = "none";
    job.style.background = "";
  });

  element.style.border = "2px solid #667eea";
  element.style.background =
    "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))";
  element.style.animation = "pulse 0.5s ease-in-out";

  setTimeout(() => {
    element.style.border = "none";
    element.style.background = "";
  }, 3000);
}

// Highlight education entry
function highlightEducation(element) {
  document.querySelectorAll(".education-entry").forEach((edu) => {
    edu.style.border = "none";
    edu.style.background = "";
  });

  element.style.border = "2px solid #764ba2";
  element.style.background =
    "linear-gradient(135deg, rgba(118, 75, 162, 0.1), rgba(102, 126, 234, 0.1))";
  element.style.animation = "pulse 0.5s ease-in-out";

  setTimeout(() => {
    element.style.border = "none";
    element.style.background = "";
  }, 3000);
}

// Animate skill
function animateSkill(element) {
  element.style.animation = "pulse 0.5s ease-in-out";
  element.style.background =
    "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))";
  element.style.transform = "scale(1.05)";

  setTimeout(() => {
    element.style.background = "";
    element.style.transform = "";
  }, 500);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Start the name typing effect immediately
  typeWriterName();

  // Observe elements for scroll animations
  document
    .querySelectorAll(".job-entry, .education-entry, .skill-item")
    .forEach((el) => {
      observer.observe(el);
    });
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "t" || e.key === "T") {
    scrollToTop();
  }

  if (e.key === "p" || e.key === "P") {
    e.preventDefault();
    window.print();
  }

  if (e.key === "d" || e.key === "D") {
    document.body.classList.toggle("dark-mode");
  }
});

// Mouse trail effect
let mouseTrail = [];
document.addEventListener("mousemove", (e) => {
  mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

  if (mouseTrail.length > 20) {
    mouseTrail.shift();
  }

  mouseTrail.forEach((point, index) => {
    if (Date.now() - point.time < 1000) {
      const trail = document.createElement("div");
      trail.style.position = "fixed";
      trail.style.left = point.x + "px";
      trail.style.top = point.y + "px";
      trail.style.width = "4px";
      trail.style.height = "4px";
      trail.style.background = `rgba(102, 126, 234, ${
        0.1 * (index / mouseTrail.length)
      })`;
      trail.style.borderRadius = "50%";
      trail.style.pointerEvents = "none";
      trail.style.zIndex = "999";
      document.body.appendChild(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 100);
    }
  });
});

// Ripple effect for interactive elements
document
  .querySelectorAll(
    ".job-entry, .education-entry, .skill-item, .section-header"
  )
  .forEach((element) => {
    element.addEventListener("click", (e) => {
      const ripple = document.createElement("div");
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.position = "absolute";
      ripple.style.background = "rgba(102, 126, 234, 0.3)";
      ripple.style.borderRadius = "50%";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "ripple 0.6s ease-out";

      element.style.position = "relative";
      element.style.overflow = "hidden";
      element.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    });
  });

// CSS for ripple animation and accessibility
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
document.head.appendChild(style);

// Performance monitoring
let lastScrollTime = 0;
window.addEventListener("scroll", () => {
  const now = Date.now();
  if (now - lastScrollTime > 10) {
    lastScrollTime = now;
  }
});

// Initialize tooltips
document.querySelectorAll(".tooltip").forEach((tooltip) => {
  tooltip.addEventListener("mouseenter", () => {
    tooltip.style.animation = "pulse 0.3s ease-in-out";
  });
});
