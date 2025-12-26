// js/header.js - Logic chung cho tất cả các trang

document.addEventListener("DOMContentLoaded", function () {
    updateHeaderForLoginState();
    setupDropdown();
    setupLogout();
    setupScrollHeader();
});

function updateHeaderForLoginState() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");
    const authButtons = document.getElementById("authButtons");
    const userAvatarDropdown = document.getElementById("userAvatarDropdown");
    const dropdownUserName = document.getElementById("dropdownUserName");
    const dropdownUserEmail = document.getElementById("dropdownUserEmail");
    const userAvatar = document.getElementById("userAvatar");

    // Nếu đã đăng nhập
    if (isLoggedIn && userEmail) {
        // Ẩn nút đăng ký/đăng nhập
        if (authButtons) authButtons.style.display = "none";
        
        // Hiển thị avatar dropdown
        if (userAvatarDropdown) {
            userAvatarDropdown.style.display = "flex";
        }
        
        // Cập nhật thông tin người dùng
        if (dropdownUserName && userName) {
            dropdownUserName.textContent = userName;
        }
        
        if (dropdownUserEmail && userEmail) {
            dropdownUserEmail.textContent = userEmail;
        }
        
        // Cập nhật avatar (nếu có)
        const userAvatarFromStorage = localStorage.getItem("userAvatar");
        if (userAvatar && userAvatarFromStorage) {
            userAvatar.src = userAvatarFromStorage;
        }
    } else {
        // Nếu chưa đăng nhập, đảm bảo hiển thị nút đăng nhập
        if (authButtons) authButtons.style.display = "flex";
        if (userAvatarDropdown) userAvatarDropdown.style.display = "none";
    }
}

function setupDropdown() {
    const avatarTrigger = document.getElementById("avatarTrigger");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (avatarTrigger && dropdownMenu) {
        avatarTrigger.addEventListener("click", function (e) {
            e.stopPropagation();
            avatarTrigger.classList.toggle("active");
            dropdownMenu.classList.toggle("active");
        });

        // Đóng dropdown khi click ra ngoài
        document.addEventListener("click", function (e) {
            if (!avatarTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
                avatarTrigger.classList.remove("active");
                dropdownMenu.classList.remove("active");
            }
        });
    }
}

function setupLogout() {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Xác nhận đăng xuất
            if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
                // Xóa thông tin đăng nhập
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userName");
                localStorage.removeItem("userRole");
                localStorage.removeItem("userAvatar");
                
                // Hiển thị thông báo
                alert("Đã đăng xuất thành công!");
                
                // Reload trang để cập nhật header
                window.location.reload();
            }
        });
    }
}

function setupScrollHeader() {
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        });
    }
}