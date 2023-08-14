document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
      `
    });
  });
report_box = document.getElementById('report_box')

// let sensor = new Gyroscope();
// let x, y, z, report;
// sensor.start();

// sensor.onreading = () => {
//     report = 'x-axis Angle Velocity: ' + sensor.x + "<br>";
//     report += 'y-axis Angle Velocity: ' + sensor.y + "<br>";
//     report += 'z-axis Angle Velocity: ' + sensor.z + "<br>";
//     report_box.innerHTML = report;
//     x = sensor.x * 100;
//     y = sensor.y * 100;
//     z = sensor.z * -33;

//     sensor.onerror = errorHandler;
//     function errorHandler(event){
//         console.log(event.error.name, event.error.message);
//     }
// };

// function handleOrientation(event) {
//     var beta = event.beta; // In degree in the range [-180,180]
//     var gamma = event.gamma; // In degree in the range [-90,90]
  
//     // Update the content of the div with the orientation data
//     document.getElementById('orientationData').innerHTML = 'Beta: ' + beta + '<br>Gamma: ' + gamma;
//   }
  
//   // Add event listener for device orientation
//   if (window.DeviceOrientationEvent) {
//     window.addEventListener('deviceorientation', handleOrientation);
//   } else {
//     document.getElementById('orientationData').innerHTML = 'Sorry, your browser doesn\'t support Device Orientation';
//   }


