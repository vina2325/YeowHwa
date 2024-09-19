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

  // 给每个 toggle 同时绑定 click 和 mouseover 事件
  dropdownToggles.forEach((toggle) => {
    ["click", "mouseover"].forEach((event) => {
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
  const mobileMenu = document.querySelector(".navigation-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});
// 輪播

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
