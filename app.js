document.getElementById('requestPermission').addEventListener('click', function() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      // For non-iOS 13 devices
      window.addEventListener('deviceorientation', handleOrientation);
    }
  });
  
  function handleOrientation(event) {
    console.log("Beta: " + event.beta);
    console.log("Gamma: " + event.gamma);
  
    let x = event.gamma; // In degree in the range [-180,180]
    let y = event.beta;  // In degree in the range [-90,90]
  
    Object.assign(document.documentElement.style, {
      '--move-x': x * -.005 + 'deg',
      '--move-y': y * -.01 + 'deg',
    });
  }
// function updateLayers(x, y) {
//     Object.assign(document.documentElement.style, {
//       '--move-x': x + 'deg',
//       '--move-y': y + 'deg',
//     });
//   }
  
//   // Handle desktop mouse movement
//   document.addEventListener('mousemove', e => {
//     updateLayers((e.clientX - window.innerWidth / 2) * -.005, (e.clientY - window.innerHeight / 2) * -.01);
//   });
  
//   // Handle mobile device orientation
//   if (window.DeviceOrientationEvent) {
//     if (typeof DeviceOrientationEvent.requestPermission === 'function') {
//       // iOS 13+
//       document.addEventListener('touchstart', () => {
//         DeviceOrientationEvent.requestPermission()
//           .then(response => {
//             if (response === 'granted') {
//               window.addEventListener('deviceorientation', e => {
//                 updateLayers(e.gamma * -.005, e.beta * -.01);
//               });
//             }
//           })
//           .catch(console.error);
//       });
//     } else {
//       // non iOS 13+
//       window.addEventListener('deviceorientation', e => {
//         updateLayers(e.gamma * -.005, e.beta * -.01);
//       });
//     }
//   }