const sidebarToggleBtn = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

sidebarToggleBtn.addEventListener("click", function () {
  //   console.log("click");
  sidebarToggleBtn.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
});
