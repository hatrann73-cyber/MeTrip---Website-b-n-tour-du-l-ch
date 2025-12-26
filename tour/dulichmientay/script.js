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

    // Lightbox
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const galleryImages = [
        'image/tour-mientay1.jpg',
        'image/tour-mientay2.jpg',
        'image/tour-mientay3.jpg',
        'image/tour-mientay4.jpg'
    ];
    let currentIndex = 0;

    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            currentIndex = parseInt(img.dataset.index || 0);
            lightboxImg.src = galleryImages[currentIndex];
            lightbox.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex];
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex];
    });
});
