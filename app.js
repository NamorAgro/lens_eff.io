document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement,{
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY- window.innerHeight / 2) * -.01}deg;
        
        `
    })
})


function updateLayers(x, y) {
    Object.assign(document.documentElement, {
      style: `
        --move-x: ${x * -.005}deg;
        --move-y: ${y * -.01}deg;
      `
    });
  }
  
  // Handle desktop mouse movement
  document.addEventListener('mousemove', e => {
    updateLayers(e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2);
  });
  
  // Handle mobile device orientation
  window.addEventListener('deviceorientation', e => {
    // beta: rotation around the X-axis
    // gamma: rotation around the Y-axis
    updateLayers(e.gamma, e.beta);
  });


  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', e => {
      updateLayers(e.gamma, e.beta);
    });
  } else {
    console.log("Sorry, your device doesn't support Device Orientation");
  }