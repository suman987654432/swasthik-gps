function animateCount(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let increment = end > start ? 1 : -1;
    let timer = setInterval(() => {
      current += increment;
      element.innerText = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  // Triggering the count animation on window load
  window.onload = function () {
    animateCount("clients-count", 0, 250, 2000);
    animateCount("projects-count", 0, 2, 2000);
    animateCount("support-count", 0, 25, 2000);
    animateCount("workers-count", 0, 10, 2000);
  };
  