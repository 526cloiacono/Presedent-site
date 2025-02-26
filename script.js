document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("mousedown", () => {
      gsap.to(item, { scale: 0.95, duration: 0.1 });
    });
    item.addEventListener("mouseup", () => {
      gsap.to(item, { scale: 1, duration: 0.1 });
    });
  });