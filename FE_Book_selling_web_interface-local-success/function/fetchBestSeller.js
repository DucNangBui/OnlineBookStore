// Hàm lấy dữ liệu sách bán chạy nhất và thêm vào DOM
async function fetchBestSeller() {
    try {
        const response = await axios.get('http://localhost:8080/api/guest/search/ngày đòi nợ');
        const book = response.data[0]; // Giả định rằng kết quả trả về là một mảng sách và bạn muốn lấy sách đầu tiên
        return book;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sách bán chạy nhất:', error);
        return null;
    }
}
