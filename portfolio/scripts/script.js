 // JavaScript for typewriter animation
 const developerRoleElement = document.getElementById('developerRole');
 const roles = ['WEB DEVELOPER', 'FULL STACK DEVELOPER', 'UI/UX DESIGNER']; // Array of roles to cycle through
 let roleIndex = 0;
 let charIndex = 0;
 const typingSpeed = 100; // Typing speed in milliseconds

 function typeWriter() {
     if (charIndex < roles[roleIndex].length) {
         developerRoleElement.textContent += roles[roleIndex].charAt(charIndex);
         charIndex++;
         setTimeout(typeWriter, typingSpeed);
     } else {
         // Move to next role in the array
         setTimeout(eraseText, 2000); // Wait for 2 seconds before erasing text
     }
 }

 function eraseText() {
     if (charIndex >= 0) {
         const currentText = roles[roleIndex].substring(0, charIndex);
         developerRoleElement.textContent = currentText;
         charIndex--;
         setTimeout(eraseText, 50); // Erasing speed
     } else {
         // Move to the next role in the array
         roleIndex = (roleIndex + 1) % roles.length;
         setTimeout(typeWriter, 1000); // Wait for 1 second before typing the next role
     }
 }

 // Start the typewriter animation
 typeWriter();