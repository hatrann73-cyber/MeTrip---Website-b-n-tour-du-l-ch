function changeQty(type, change) {
    const max = 40;
    const el = document.getElementById(type + '-qty');
    let val = parseInt(el.textContent);
    let newVal = val + change;
    const min = type === 'adult' ? 1 : 0;
    if (newVal >= min && newVal <= max) {
        el.textContent = newVal;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Flatpickr
    flatpickr("#start-date", {
        dateFormat: "d/m/Y",
        minDate: "today",
        locale: "vn"
    });

    // Accordion cho lịch trình (chỉ mở 1 item cùng lúc)
    document.querySelectorAll('.schedule-header').forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Đóng tất cả các item khác
            document.querySelectorAll('.schedule-item').forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                    el.querySelector('.schedule-content').classList.remove('active');
                }
            });

            // Toggle item hiện tại
            item.classList.toggle('active');
            const content = item.querySelector('.schedule-content');
            content.classList.toggle('active', !isActive);
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('header-scrolled', window.scrollY > 50);
    });

    // ============ LIGHTBOX CODE ============
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Danh sách ảnh
    const images = [
        'dai-noi-hue-1.jpg',
        'dothicohoian.jpg',
        'banahill.jpg',
        'Nghe-ca-Hue-tren-song-Huong.jpg'
    ];

    const altTexts = [
        'Đại Nội Huế',
        'Đô thị cổ Hội An',
        'Bà Nà Hills',
        'Ca Huế trên sông Hương'
    ];

    let currentImageIndex = 0;

    // Mở lightbox khi click ảnh chính
    const mainImage = document.querySelector('.gallery-main img');
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            showLightbox(currentImageIndex);
        });
    }

    // Mở lightbox khi click thumbnail
    const thumbImages = document.querySelectorAll('.gallery-thumbs img');
    thumbImages.forEach((thumb, index) => {
        thumb.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = parseInt(this.getAttribute('data-index'));
            updateMainImage(currentImageIndex);
            showLightbox(currentImageIndex);
        });
    });

    // Mở lightbox khi click overlay
    const thumbOverlay = document.querySelector('.thumb-overlay');
    if (thumbOverlay) {
        thumbOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = 3; // Ảnh cuối cùng
            updateMainImage(currentImageIndex);
            showLightbox(currentImageIndex);
        });
    }

    // Hàm hiển thị lightbox
    function showLightbox(index) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        lightbox.classList.add('new-image');
        
        setTimeout(() => {
            lightbox.classList.remove('new-image');
        }, 400);
        
        updateLightboxImage(index);
    }

    // Hàm cập nhật ảnh trong lightbox
    function updateLightboxImage(index) {
        lightboxImg.classList.add('loading');
        lightboxImg.src = images[index];
        lightboxImg.alt = altTexts[index];
        
        // Thêm caption vào lightbox
        lightbox.setAttribute('data-caption', altTexts[index]);
        
        // Xóa class loading khi ảnh load xong
        lightboxImg.onload = function() {
            lightboxImg.classList.remove('loading');
        };
    }

    // Hàm cập nhật ảnh chính
    function updateMainImage(index) {
        if (mainImage) {
            mainImage.src = images[index];
            mainImage.alt = altTexts[index];
            mainImage.setAttribute('data-index', index);
        }
        
        // Cập nhật active class cho thumbnail
        thumbImages.forEach(thumb => {
            const thumbIndex = parseInt(thumb.getAttribute('data-index'));
            if (thumbIndex === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        // Cập nhật counter
        updateImageCounter(index);
    }

    // Cập nhật image counter
    const imageCounter = document.querySelector('.image-counter');
    function updateImageCounter(index) {
        if (imageCounter) {
            imageCounter.textContent = `${index + 1}/${images.length}`;
        }
    }

    // Đóng lightbox
    closeBtn.addEventListener('click', closeLightbox);

    // Đóng lightbox khi click bên ngoài ảnh
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === lightboxImg) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Đóng bằng phím ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
        
        // Navigation bằng phím mũi tên
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });

    // Chuyển ảnh trong lightbox
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        prevImage();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        nextImage();
    });

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage(currentImageIndex);
        updateMainImage(currentImageIndex);
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage(currentImageIndex);
        updateMainImage(currentImageIndex);
    }
    // ============ END LIGHTBOX CODE ============
});
// Thêm nút zoom
const zoomBtn = document.querySelector('.zoom-btn');
if (zoomBtn) {
    zoomBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showLightbox(currentImageIndex);
    });
}

// Cũng thêm vào đầu file (ngoài DOMContentLoaded) nếu cần
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightboxImg.src = document.querySelector('.gallery-main img').src;
}