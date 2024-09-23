// navbar
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  // 提取共用的处理函数
  const toggleDropdown = (toggle) => {
    const dropdownMenu = toggle.nextElementSibling;

    if (dropdownMenu.classList.contains("hidden")) {
      // 隐藏所有的下拉菜单
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.add("hidden");
      });

      // 显示当前下拉菜单
      dropdownMenu.classList.remove("hidden");
    } else {
      // 隐藏当前下拉菜单
      dropdownMenu.classList.add("hidden");
    }
  };

  // 给每个 toggle 同时绑定 click 和 mouseenter 事件
  dropdownToggles.forEach((toggle) => {
    ["click", "mouseenter"].forEach((event) => {
      toggle.addEventListener(event, () => toggleDropdown(toggle));
    });
  });

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (!menu.contains(e.target)) {
          menu.classList.add("hidden");
        }
      });
    }
  });

  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenus = document.querySelectorAll(".navigation-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenus.forEach((menu) => {
      menu.classList.toggle("hidden");
    });
  });
});
AOS.init();
