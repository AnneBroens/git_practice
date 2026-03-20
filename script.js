
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hoi! I'm Anne, originally from the Netherlands. \nIn 2022, I moved to Paris and I'm currently work at Hermès as a trilingual client advisor. I'm transitioning into web development, and I'm learning as much as I can alongside my full-time job. I'm still exploring which areas of development excite me the most, so this journey is full of discovery and experimentation. Follow along to see the projects I build, the skills I develop, and the direction my path takes as I work toward becoming a full-time developer.";

  const terminalEl = document.getElementById("terminal-text");
  const speed = 50;
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