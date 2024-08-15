// Hàm lấy dữ liệu sách mới và thêm vào DOM
async function fetchNewBooks(page = 0, size = 4) {
    try {
        const response = await axios.get('http://localhost:8080/api/guest/page', {
            params: {
                page: page,
                size: size
            }
        });

        const books = response.data.content.map((book, index) => ({
            ...book,
            index: page * size + index + 1
        }));

        return {
            books: books,
            totalRecords: response.data.totalElements
        };
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sách mới:', error);
        return {
            books: [],
            totalRecords: 0
        };
    }
}
