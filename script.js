document.addEventListener("DOMContentLoaded", () => {
  // -------------------
  // Terminal typing
  // -------------------
  const text = "Hoi! I'm Anne, originally from the Netherlands. \nIn 2022, I moved to Paris and I'm currently work at Hermès as a trilingual client advisor. \nI'm transitioning into web development, and I'm learning as much as I can alongside my full-time job. I'm still exploring which areas of development excite me the most, so this journey is full of discovery and experimentation. Follow along to see the projects I build, the skills I develop, and the direction my path takes as I work toward becoming a full-time developer.";

  const terminalEl = document.getElementById("terminal-text");
  const speed = 30;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      if (text[i] === "\n") {
        terminalEl.innerHTML += "<br>";
      } else {
        terminalEl.innerHTML += text[i];
      }
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});


// Select the button
const downloadBtn = document.getElementById("download-cv");

// Add click event
downloadBtn.addEventListener("click", function() {
  // Create an invisible <a> tag
  const link = document.createElement("a");
  link.href = "Anne_Broens_CV.pdf"; // path to your CV
  link.download = "Anne_Broens_CV.pdf";   // default filename
  document.body.appendChild(link);
  link.click();                           // simulate click
  document.body.removeChild(link);        // remove it
});