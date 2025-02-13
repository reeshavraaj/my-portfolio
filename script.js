particlesJS("particles-js", {
  particles: {
      number: { 
          value: 150, 
          density: { enable: true, value_area: 800 } 
      },
      color: { value: "#000000" }, // All particles are black
      shape: { 
          type: "circle", 
          stroke: { width: 1, color: "#000000" } 
      },
      opacity: { 
          value: 0.7, 
          random: true, 
          anim: { 
              enable: true, 
              speed: 2, 
              opacity_min: 0.3, 
              sync: false 
          } 
      },
      size: { 
          value: 4, 
          random: true, 
          anim: { 
              enable: true, 
              speed: 3, 
              size_min: 2, 
              sync: false 
          } 
      },
      line_linked: {
          enable: true,  
          distance: 100,  // Distance threshold for connections
          color: "#000000",
          opacity: 0.5, // Ensures stronger visible connections
          width: 1.5
      },
      move: { 
          enable: true, 
          speed: 2.5, 
          direction: "none", 
          random: false, 
          straight: false, 
          out_mode: "out" 
      }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: { 
              enable: true, 
              mode: "grab"  // FIXED: Directly connects particles to cursor!
          },
          onclick: { 
              enable: true, 
              mode: "push" 
          }
      },
      modes: {
          grab: { 
              distance: 200, // Increased grab distance for better effect
              line_linked: { 
                  opacity: 1  // Ensures particles visibly connect
              }
          },
          push: { 
              particles_nb: 5 
          }
      }
  }
});







