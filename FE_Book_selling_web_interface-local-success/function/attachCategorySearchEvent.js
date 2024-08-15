// Hàm gắn sự kiện tìm kiếm danh mục cho một danh mục
function attachCategorySearchEvent(categoryId, categoryName) {
    document.getElementById(categoryId).addEventListener('click', function (event) {
        event.preventDefault();
        const searchUrl = `search-book.html?category=${encodeURIComponent(categoryName)}`;
        window.location.href = searchUrl;
    });
}

// Hàm khởi tạo các sự kiện tìm kiếm danh mục
function initializeCategorySearchEvents() {
    attachCategorySearchEvent('search-kinh-te', 'kinh tế');
    attachCategorySearchEvent('search-ky-nang', 'kỹ năng');
    attachCategorySearchEvent('search-ngoai-ngu', 'ngoại ngữ');
    attachCategorySearchEvent('search-thieu-nhi', 'thiếu nhi');
    attachCategorySearchEvent('search-van-hoc', 'văn học');
    attachCategorySearchEvent('search-khoa-hoc-cong-nghe', 'khoa học - công nghệ');
    attachCategorySearchEvent('search-lich-su', 'lịch sử');
    attachCategorySearchEvent('search-ton-giao', 'tôn giáo');
    attachCategorySearchEvent('search-truyen', 'truyện');
    attachCategorySearchEvent('search-tieu-thuyet', 'tiểu thuyết');
    attachCategorySearchEvent('search-tam-ly-hoc', 'tâm lý học');
}
