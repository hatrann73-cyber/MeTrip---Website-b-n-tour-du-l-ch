
// Kiểm tra trạng thái đăng nhập và cập nhật header
// Xử lý avatar dropdown
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded - jschung.js");
    // ===== 1. XỬ LÝ ĐĂNG NHẬP/ĐĂNG XUẤT =====
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");
    const authButtons = document.getElementById("authButtons");
    const userAvatarDropdown = document.getElementById("userAvatarDropdown");
    const avatarTrigger = document.getElementById("avatarTrigger");
    const dropdownMenu = document.getElementById("dropdownMenu");
    
    console.log("Login status:", isLoggedIn, "Email:", userEmail);
    
    // Kiểm tra trạng thái đăng nhập
    if (isLoggedIn && userEmail) {
        // Ẩn nút đăng nhập/đăng ký
        if (authButtons) {
            console.log("Hiding auth buttons");
            authButtons.style.display = "none";
        }
        
        // Hiển thị avatar dropdown
        if (userAvatarDropdown) {
            console.log("Showing avatar dropdown");
            userAvatarDropdown.style.display = "flex";
            
            // Cập nhật thông tin người dùng
            const dropdownUserName = document.getElementById("dropdownUserName");
            const dropdownUserEmail = document.getElementById("dropdownUserEmail");
            const userAvatar = document.getElementById("userAvatar");
            const dropdownAvatar = document.querySelector(".dropdown-avatar");
            const userAvatarFromStorage = localStorage.getItem("userAvatar");
            
            if (dropdownUserName && userName) {
                dropdownUserName.textContent = userName;
            }
            
            if (dropdownUserEmail) {
                dropdownUserEmail.textContent = userEmail;
            }
            
            if (userAvatar && userAvatarFromStorage) {
                userAvatar.src = userAvatarFromStorage;
            }
            if (dropdownAvatar && userAvatarFromStorage) {
                dropdownAvatar.src = userAvatarFromStorage;
            }
            
            // Thêm sự kiện click cho avatar
            if (avatarTrigger) {
                avatarTrigger.addEventListener("click", function (e) {
                    e.stopPropagation();
                    console.log("Avatar clicked");
                    
                    // Toggle dropdown
                    this.classList.toggle("active");
                    dropdownMenu.classList.toggle("active");
                });
            }
            
            // Đóng dropdown khi click ra ngoài
            document.addEventListener("click", function (e) {
                if (!avatarTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    avatarTrigger.classList.remove("active");
                    dropdownMenu.classList.remove("active");
                }
            });
            
            // Đóng dropdown khi click vào menu item
            const dropdownItems = document.querySelectorAll(".dropdown-item");
            dropdownItems.forEach(item => {
                item.addEventListener("click", function() {
                    avatarTrigger.classList.remove("active");
                    dropdownMenu.classList.remove("active");
                });
            });
        }
    } else {
        console.log("User not logged in, showing auth buttons");
        if (authButtons) {
            authButtons.style.display = "flex";
        }
        if (userAvatarDropdown) {
            userAvatarDropdown.style.display = "none";
        }
    }
    
    // Xử lý đăng xuất
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("Logout clicked");
            
            // Xóa thông tin đăng nhập
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userName");
            localStorage.removeItem("userRole");
            localStorage.removeItem("userAvatar");
            
            // Hiển thị thông báo
            if (window.showNotification) {
                showNotification("Thành công", "Đã đăng xuất thành công!");
            } else {
                alert("Đã đăng xuất thành công!");
            }
            
            // Tải lại trang sau 1 giây
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }
    
    // Xử lý scroll cho header
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
    
    
    // ===== 2. CẬP NHẬT GIỎ HÀNG (BADGE) =====
    updateCartBadge();
});

/* ===============================
   CART SYSTEM - MeTrip (Clean)
================================ */

// ====== LẤY CART ======
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ====== LƯU CART ======
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  // Cập nhật badge mỗi khi lưu giỏ hàng
  updateCartBadge();
}

// ====== ADD TO CART (DÙNG Ở TRANG TOUR) ======
function addToCart(tour) {
  let cart = getCart();

  const index = cart.findIndex(item => item.id === tour.id);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      id: tour.id,
      name: tour.name,
      price: Number(tour.price),
      img: tour.img || "image/default-tour.jpg",
      type: tour.type || "",
      quantity: 1
    });
  }

  saveCart(cart);
  
  // Hiển thị thông báo
  if (window.showNotification) {
    showNotification("Thành công", "Đã thêm tour vào giỏ hàng!");
  } else {
    alert("Đã thêm tour vào giỏ hàng ✅");
  }
}

// ====== RENDER CART (CHO TRANG CART.HTML) ======
function renderCart() {
  const cart = getCart();
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("cart-total");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        
        <div class="cart-info">
          <h3>${item.name}</h3>
          <p class="cart-date">📅 Khởi hành: ${item.date || "Liên hệ sau"}</p>
          <p class="tag">${item.type}</p>
          <p class="price">${formatPrice(item.price)}</p>

          <div class="quantity-control">
            <button onclick="changeQuantity('${item.id}', -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity('${item.id}', 1)">+</button>
          </div>

          <button class="remove" onclick="removeItem('${item.id}')">
            Xóa
          </button>
        </div>
      </div>
    `;
  });

  if (totalPriceEl) {
    totalPriceEl.innerText = formatPrice(total);
  }
}

// ====== TĂNG / GIẢM ======
function changeQuantity(id, delta) {
  let cart = getCart();

  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity += delta;
      if (item.quantity < 1) item.quantity = 1;
    }
    return item;
  });

  saveCart(cart);
  renderCart();
}

// ====== XÓA ITEM ======
function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

// ====== FORMAT GIÁ ======
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

// ====== UPDATE CART BADGE ======
function updateCartBadge() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.textContent = totalQty;
        badge.style.display = totalQty > 0 ? "flex" : "none";
    });
}

// ====== TỰ ĐỘNG RENDER CART KHI VÀO TRANG CART.HTML ======
// Kiểm tra nếu đang ở trang cart.html thì render
if (window.location.pathname.includes('cart.html')) {
    document.addEventListener("DOMContentLoaded", renderCart);
}