gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animate Title (Reverted to "Before" Effect)
gsap.from(".title", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from(".subtitle", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out"
});

// Parallax Background
gsap.to(".layer1", {
  y: "-20%",
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true
  }
});

gsap.to(".layer2", {
  y: "-10%",
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true
  }
});

gsap.to(".stars", {
  y: "-5%",
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true
  }
});

// Geometric Elements Animation with Glow
gsap.to(".geometric-circle", {
  x: 50,
  y: 50,
  rotation: 360,
  duration: 5,
  repeat: -1,
  ease: "none",
  onUpdate: function() {
    this.targets().forEach(el => {
      el.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255, 255, 255, 0.5)`;
    });
  }
});

gsap.to(".geometric-square", {
  x: -50,
  y: -50,
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "none",
  onUpdate: function() {
    this.targets().forEach(el => {
      el.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255, 255, 255, 0.5)`;
    });
  }
});

gsap.to(".geometric-triangle", {
  x: 30,
  y: -30,
  rotation: 360,
  duration: 6,
  repeat: -1,
  ease: "none",
  onUpdate: function() {
    this.targets().forEach(el => {
      el.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255, 255, 255, 0.5)`;
    });
  }
});

// Mockup Animation with Glow
gsap.from(".mockup", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 1,
  ease: "elastic.out(1, 0.5)",
  onUpdate: function() {
    this.targets().forEach(el => {
      el.style.boxShadow = `0 0 ${Math.random() * 30 + 20}px rgba(255, 255, 255, 0.7)`;
    });
  }
});

// Gallery Section Animations
gsap.from(".gallery-item", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Animate Gallery Text on Hover
document.querySelectorAll(".gallery-item").forEach(item => {
  const text = item.querySelector(".gallery-text");
  item.addEventListener("mouseenter", () => {
    gsap.to(text, {
      scale: 1.1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      textShadow: "0 0 20px rgba(255, 255, 255, 0.7)"
    });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(text, {
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
    });
  });
});

// Journey Section Animations
gsap.from(".timeline-item", {
  opacity: 0,
  x: (index) => (index % 2 === 0 ? -100 : 100),
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".journey-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Interactive Playground Animations
document.querySelectorAll(".play-word").forEach(word => {
  word.addEventListener("mouseenter", () => {
    gsap.to(word, {
      scale: 1.2,
      rotation: 5,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      textShadow: "0 0 20px rgba(255, 255, 255, 0.7)"
    });
    gsap.to(word, {
      text: { value: word.textContent.split("").reverse().join("") },
      duration: 0.5,
      ease: "power3.out"
    });
  });
  word.addEventListener("mouseleave", () => {
    gsap.to(word, {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      textShadow: "0 0 0 rgba(255, 255, 255, 0)"
    });
    gsap.to(word, {
      text: { value: word.textContent.split("").reverse().join("") },
      duration: 0.5,
      ease: "power3.out"
    });
  });
});

// Feedback Section Animations with Star Rating
gsap.from(".feedback-section .section-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".feedback-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".feedback-section .section-text", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".feedback-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".star", {
  opacity: 0,
  scale: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".feedback-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".form-input, .form-button", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".feedback-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Star Rating Interactivity
const stars = document.querySelectorAll(".star");
stars.forEach(star => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    stars.forEach(s => {
      if (s.getAttribute("data-value") <= value) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    gsap.to(star, {
      scale: 1.5,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)"
    });
  });
});