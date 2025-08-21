// Dark mode toggle
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("dark-mode-btn");
  
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    btn.textContent = "Dark Mode On";
  } else {
    btn.textContent = "Dark Mode Off";
  }
}

// Show current date and time in footer
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleString();
}

// Update time every second
setInterval(updateTime, 1000);
window.onload = updateTime;
