const faqData = {
    popular: [
        { q: "Làm thế nào để đặt tour tại MeTrip?", a: "Quý khách có thể đặt tour thông qua 4 cách thuận tiện:\n• Website: Đặt trực tiếp trên hệ thống đặt tour của chúng tôi với giao diện trực quan, dễ sử dụng.\n• Hotline: Gọi đến số 1900 580 801 để được tư vấn và đặt tour trực tiếp với chuyên viên.\n• Chi nhánh: Đến trực tiếp các chi nhánh của chúng tôi trên toàn quốc.\n• Đối tác: Đặt thông qua các đối tác du lịch cao cấp của chúng tôi.\nSau khi đặt tour, nhân viên của chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ và gửi hướng dẫn chi tiết cho hành trình của bạn." },
        { q: "Tôi có cần đăng ký tài khoản không?", a: "Quý khách không bắt buộc phải đăng ký tài khoản để đặt tour. Tuy nhiên, khi có tài khoản, bạn có thể dễ dàng quản lý lịch trình, xem lại các chuyến đã đặt và nhận các ưu đãi thành viên đặc biệt." },
        { q: "MeTrip có hỗ trợ tour khách đoàn không?", a: "Có, chúng tôi nhận thiết kế tour riêng cho đoàn từ 10 người trở lên, với mức giá ưu đãi và dịch vụ tiện nghi. Vui lòng liên hệ hotline hoặc email để nhận tư vấn riêng." },
        { q: "Làm sao biết tour đặt thành công?", a: "Sau khi hoàn tất đặt tour và thanh toán, hệ thống sẽ gửi email xác nhận kèm mã tour và các chi tiết liên quan. Bạn cũng sẽ nhận được SMS nếu cung cấp số điện thoại." },
        { q: "Số hotline hỗ trợ khẩn cấp là gì?", a: "Bạn có thể gọi 1900 580 801 bất cứ lúc nào (24/7) để được hỗ trợ ngay các vấn đề phát sinh trong chuyến đi." }
    ],
    booking: [
        { q: "Các hình thức thanh toán?", a: "MeTrip chấp nhận nhiều hình thức thanh toán linh hoạt để phục vụ quý khách bao gồm thẻ Visa/Master, chuyển khoản ngân hàng, ví điện tử như MoMo và ZaloPay. Mỗi lựa chọn đều được bảo mật SSL tối ưu." },
        { q: "Đã bao gồm bảo hiểm chưa?", a: "Tất cả tour của MeTrip đều đã bao gồm bảo hiểm du lịch với mức bồi thường cao nhất theo quy định, giúp bạn yên tâm tận hưởng chuyến đi." },
        { q: "Thanh toán có an toàn không?", a: "Hệ thống thanh toán trực tuyến của chúng tôi được bảo mật bằng chuẩn mã hóa SSL và hợp tác với các cổng thanh toán được cấp phép, đảm bảo an toàn tuyệt đối." },
        { q: "Có thanh toán tại văn phòng không?", a: "Quý khách có thể thanh toán trực tiếp tại văn phòng của MeTrip nếu không muốn thanh toán online. Tuy nhiên ưu tiên thanh toán online để giữ chỗ nhanh nhất." },
        { q: "Làm thế nào để lấy hóa đơn VAT?", a: "Quý khách chọn mục 'Xuất hóa đơn' khi thanh toán trực tuyến hoặc liên hệ tổng đài để được hướng dẫn chi tiết và nhận hóa đơn chính thức." }
    ],
    exclusive: [
        { q: "Local Buddy là gì?", a: "Local Buddy là dịch vụ hướng dẫn viên bản địa giàu kinh nghiệm, đồng hành cùng bạn khám phá các điểm đến ít người biết đến và hiểu sâu văn hóa địa phương." },
        { q: "Có thợ ảnh đi cùng không?", a: "Có, gói dịch vụ ảnh chuyên nghiệp cung cấp thợ ảnh đi cùng toàn tour để ghi lại những khoảnh khắc đáng nhớ của bạn." },
        { q: "Quyền lợi thành viên VIP?", a: "Thành viên VIP được ưu tiên đặt chỗ trước, giảm giá 10% cho tour, quà tặng đặc biệt và dịch vụ tận tâm hơn trong suốt hành trình." },
        { q: "Tùy chỉnh lịch trình được không?", a: "Hoàn toàn được! Dịch vụ Private Tour của chúng tôi cho phép tùy chỉnh lịch trình theo nhu cầu riêng của bạn, từ điểm đến đến các hoạt động trong ngày." },
        { q: "Dịch vụ đưa đón tận nhà áp dụng ở đâu?", a: "Hiện dịch vụ đưa đón tận nhà áp dụng tại khu vực nội thành Hà Nội và TP.HCM cho các tour cao cấp. Vui lòng liên hệ để biết thêm khu vực hỗ trợ." }
    ],
    cancel: [
        { q: "Chính sách hoàn tiền khi hủy tour?", a: "MeTrip áp dụng chính sách hoàn tiền linh hoạt:\n• Hoàn 100% nếu hủy trước 7 ngày khởi hành.\n• Hoàn 50% nếu hủy trong khoảng 3-5 ngày.\n• Không hoàn tiền nếu hủy trong 48 giờ trước khởi hành.\nVui lòng kiểm tra điều khoản chi tiết trong email xác nhận." },
        { q: "Có đổi được ngày khởi hành không?", a: "Quý khách có thể đổi ngày khởi hành miễn phí một lần nếu thông báo trước ít nhất 5 ngày so với ngày dự kiến. Việc thay đổi phụ thuộc vào tình trạng chỗ và điều kiện tour." },
        { q: "Thời tiết xấu có hủy tour không?", a: "Nếu có cảnh báo thời tiết xấu như bão hoặc lũ lụt, chúng tôi sẽ chủ động dời lịch hoặc hoàn 100% chi phí để đảm bảo an toàn cho khách hàng." },
        { q: "Làm sao gửi yêu cầu hủy?", a: "Để gửi yêu cầu hủy hoặc đổi lịch, bạn có thể đăng nhập vào mục 'Lịch sử đặt chỗ' trên website hoặc liên hệ trực tiếp tổng đài để được hướng dẫn." },
        { q: "Bao lâu nhận lại tiền hoàn?", a: "Tiền hoàn được chuyển về tài khoản của bạn trong vòng 3-7 ngày làm việc tùy vào ngân hàng hoặc phương thức thanh toán đã sử dụng." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Render FAQ từ faqData
    Object.keys(faqData).forEach(cat => {
        const container = document.getElementById(`list-${cat}`);
        if (container) {
            faqData[cat].forEach(item => {
                const card = document.createElement("div");
                card.classList.add("faq-card");
                card.innerHTML = `
                    <div class="faq-question">
                        <span>${item.q}</span>
                        <i class="fa-solid fa-chevron-down arrow-icon"></i>
                    </div>
                    <div class="faq-answer">${item.a.replace(/\n/g, "<br>")}</div>
                `;
                container.appendChild(card);
            });
        }
    });

    // Accordion interaction (mỗi section chỉ mở 1)
    document.querySelectorAll('.faq-container').forEach(container => {
        container.addEventListener('click', e => {
            const clickedCard = e.target.closest('.faq-card');
            if (!clickedCard) return;

            // Toggle open/close từng card
            const currentlyOpen = container.querySelector('.faq-card.open');

            // Nếu đang mở 1 câu hỏi khác, đóng nó
            if (currentlyOpen && currentlyOpen !== clickedCard) {
                currentlyOpen.classList.remove('open');
            }
            // Mở hoặc đóng chính câu được click
            clickedCard.classList.toggle('open');
        });
    });

    // Category switching: đóng hết inner FAQ khi đổi tab
    const asideBtns = document.querySelectorAll('.category-item');
    asideBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // CẬP NHẬT Active class
            document.querySelector('.category-item.active').classList.remove('active');
            btn.classList.add('active');

            // ẨN tất cả section
            document.querySelectorAll('.faq-section').forEach(s => s.classList.remove('active'));

            // Bật section được chọn
            const target = btn.dataset.target;
            document.getElementById(target).classList.add('active');

            // Reset tất cả FAQ về đóng
            document.querySelectorAll('.faq-card.open').forEach(card => {
                card.classList.remove('open');
            });
        });
    });
    
    // Thêm chức năng tìm kiếm đơn giản
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) return;
        
        // Mở tất cả sections
        document.querySelectorAll('.faq-section').forEach(section => {
            section.classList.add('active');
        });
        
        // Tìm và highlight kết quả
        let found = false;
        document.querySelectorAll('.faq-card').forEach(card => {
            const question = card.querySelector('.faq-question span').textContent.toLowerCase();
            const answer = card.querySelector('.faq-answer').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.borderColor = 'var(--secondary)';
                card.style.boxShadow = '0 5px 15px rgba(217, 165, 54, 0.2)';
                found = true;
                
                // Mở card nếu có kết quả
                card.classList.add('open');
            } else {
                card.style.display = 'none';
            }
        });
        
        if (!found) {
            alert('Không tìm thấy kết quả nào phù hợp với từ khóa: ' + searchTerm);
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});
