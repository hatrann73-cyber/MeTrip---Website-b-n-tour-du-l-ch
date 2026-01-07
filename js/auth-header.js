document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const authButtons = document.getElementById("authButtons");
  const userAvatarDropdown = document.getElementById("userAvatarDropdown");
  const avatarTrigger = document.getElementById("avatarTrigger");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownUserName = document.getElementById("dropdownUserName");
  const dropdownUserEmail = document.getElementById("dropdownUserEmail");
  const logoutBtn = document.getElementById("logoutBtn");

  // ===== HIỂN THỊ HEADER =====
  if (isLoggedIn) {
    authButtons && (authButtons.style.display = "none");
    userAvatarDropdown && (userAvatarDropdown.style.display = "flex");

    dropdownUserName && (dropdownUserName.textContent =
      localStorage.getItem("userName") || "Người dùng");

    dropdownUserEmail && (dropdownUserEmail.textContent =
      localStorage.getItem("userEmail") || "");
  } else {
    authButtons && (authButtons.style.display = "flex");
    userAvatarDropdown && (userAvatarDropdown.style.display = "none");
  }

  // ===== DROPDOWN AVATAR =====
  if (avatarTrigger && dropdownMenu) {
    avatarTrigger.addEventListener("click", e => {
      e.stopPropagation();
      dropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      dropdownMenu.classList.remove("active");
    });

    dropdownMenu.addEventListener("click", e => {
      e.stopPropagation();
    });
  }

  // ===== LOGOUT =====
  if (logoutBtn) {
    logoutBtn.addEventListener("click", e => {
      e.preventDefault();
      localStorage.clear();
      location.reload();
    });
  }
});
