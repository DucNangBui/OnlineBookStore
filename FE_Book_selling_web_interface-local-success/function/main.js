// Hàm khởi tạo khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function () {
    handleUserLinkClick();

    // Lấy và thêm sách vào DOM
    fetchBooks().then(result => {
        const bookList = document.getElementById('bookList');
        addBooksToDOM(bookList, result.books, `<div class="col-12"><p>No books found.</p></div>`);
    }).catch(error => {
        console.error('Lỗi khi lấy dữ liệu sách:', error);
    });

    // Lấy và thêm sách mới vào DOM
    fetchNewBooks().then(result => {
        const newBookList = document.getElementById('newBookList');
        addBooksToDOM(newBookList, result.books, `<div class="col-12"><p>No new books found.</p></div>`);
    }).catch(error => {
        console.error('Lỗi khi lấy dữ liệu sách mới:', error);
    });

    // Lấy và thêm sách bán chạy nhất vào DOM
    fetchBestSeller().then(book => {
        if (book) {
            const bestSellerBook = document.getElementById('bestSellerBook');
            const bestSellerHtml = `
                <div class="col-sm-5 pr-0">
                    <a href="javascript:void();"><img class="img-fluid rounded w-100" src="http://localhost:8080${book.photo}" alt="Best Seller Book Image"></a>
                </div>
                <div class="col-sm-7 mt-3 mt-sm-0">
                    <h4 class="mb-2">${book.bookName}</h4>
                    <p class="mb-2">Tác Giả : ${book.author}</p>
                    <div class="mb-2 d-block">
                        <span class="font-size-12 text-warning">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                    </div>
                    <span class="text-dark mb-3 d-block">Giảm giá 20%</span>
                    <button type="submit" class="btn btn-primary learn-more">Xem thêm</button>
                </div>
            `;
            bestSellerBook.innerHTML = bestSellerHtml;
        }
    }).catch(error => {
        console.error('Lỗi khi lấy dữ liệu sách bán chạy nhất:', error);
    });

    // Khởi tạo các sự kiện tìm kiếm danh mục
    initializeCategorySearchEvents();
});
