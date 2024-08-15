// Hàm xử lý sự kiện nhấn phím Enter trong ô tìm kiếm
document.querySelector('.search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Ngăn chặn form gửi yêu cầu mặc định

        const query = event.target.value;
        if (query.trim()) {
            // Điều hướng đến URL tìm kiếm
            window.location.href = `search-book.html?query=${encodeURIComponent(query)}`;
        } else {
            alert('Vui lòng nhập từ khóa tìm kiếm.');
        }
    }
});
