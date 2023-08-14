function updateRotation(e) {
    let x, y;
  
    if (e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
  
    Object.assign(document.documentElement, {
      style: `
        --move-x: ${(x - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(y - window.innerHeight / 2) * -.01}deg;
      `
    });
  }
  
  document.addEventListener('mousemove', updateRotation);
  document.addEventListener('touchmove', updateRotation);



