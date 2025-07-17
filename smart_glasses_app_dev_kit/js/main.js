document.addEventListener("DOMContentLoaded", () => {
  const apps = [
    { name: "Clock", file: "clock.html", icon: "clock.png" },
    { name: "Weather", file: "weather.html", icon: "weather.png" }
  ];

  const launcher = document.getElementById("launcher");
  apps.forEach(app => {
    const icon = document.createElement("div");
    icon.className = "app-icon";
    icon.innerHTML = `<img src="icons/${app.icon}" /><p>${app.name}</p>`;
    icon.onclick = () => window.location.href = `apps/${app.file}`;
    launcher.appendChild(icon);
  });
});
