// Hàm thêm sách vào DOM
function addBooksToDOM(bookList, books, emptyMessage) {
    if (books.length > 0) {
        books.forEach(book => {
            const bookHtml = `
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                        <div class="iq-card-body p-0">
                            <div class="d-flex align-items-center">
                                <div class="col-6 p-0 position-relative image-overlap-shadow">
                                    <a href="javascript:void();"><img class="img-fluid rounded w-100" src="http://localhost:8080${book.photo}" alt="Book Image"></a>
                                    <div class="view-book">
                                      <a href="sign-in.html" class="btn btn-sm btn-white">Mua Ngay</a>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-2">
                                        <h6 class="mb-1">${book.bookName}</h6>
                                        <p class="font-size-13 line-height mb-1">${book.author}</p>
                                        <div class="d-block line-height">
                                            <span class="font-size-11 text-warning">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>                                             
                                        </div>
                                    </div>
                                    <div class="price d-flex align-items-center">
                                        <h6><b>${book.price} đ</b></h6>
                                    </div>
                                    <div class="iq-product-action">
                                        <a href="sign-in.html"><i class="ri-shopping-cart-2-fill text-primary"></i></a>
                                        <a href="sign-in.html" class="ml-2"><i class="ri-heart-fill text-danger"></i></a>
                                    </div>                                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            bookList.insertAdjacentHTML('beforeend', bookHtml);
        });
    } else {
        bookList.insertAdjacentHTML('beforeend', emptyMessage);
    }
}
