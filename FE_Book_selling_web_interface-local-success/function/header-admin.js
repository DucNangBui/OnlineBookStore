
    const Auth = {
        // Lấy token từ localStorage
        getToken: () => localStorage.getItem('jwtToken'),

        // Giải mã token để lấy thông tin người dùng
        decodeToken: (token) => {
            if (!token) return null;
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                //console.log('Decoded Payload:', payload); // In toàn bộ payload sau khi giải mã
                return payload;
            } catch (e) {
                console.error('Error decoding token:', e);
                return null;
            }
        },

        // Kiểm tra xem token đã hết hạn chưa
        isTokenExpired: (token) => {
            const decoded = Auth.decodeToken(token);
            if (!decoded || !decoded.exp) return true;

            const now = Date.now() / 1000; // Chuyển đổi thời gian hiện tại sang giây
            return decoded.exp < now;
        },

        // Lấy userId từ mã JWT
        getUserIdFromToken: () => {
            const token = Auth.getToken();
            if (!token || Auth.isTokenExpired(token)) return null;

            const decoded = Auth.decodeToken(token);
            //console.log('User ID là :', decoded ? decoded.id : null); // In ra userId sau khi giải mã
            return decoded ? decoded.id : null;
        },

        // Lấy thông tin người dùng từ localStorage
        getUser: () => JSON.parse(localStorage.getItem('user')),

        // Kiểm tra xem người dùng đã đăng nhập chưa
        isLoggedIn: () => {
            const token = Auth.getToken();
            return !!token && !Auth.isTokenExpired(token) && !!Auth.getUser();
        },

        // Đăng xuất người dùng
        logout: () => {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        }
    };

    // ui.js
    const UI = {
        // Cập nhật trạng thái đăng nhập trên giao diện
        updateLoginStatus: () => {
            const loggedInUser = document.getElementById("loggedInUser");
            const guestUser = document.getElementById("guestUser");
            const userName = document.getElementById("userName");
            const userName2 = document.getElementById("userName2");

            if (Auth.isLoggedIn()) {
                loggedInUser.style.display = "block";
                // guestUser.style.display = "none";
                userName.innerText = Auth.getUser().username;
                userName2.innerText = Auth.getUser().username;
            } else {
                loggedInUser.style.display = "none";
                guestUser.style.display = "block";
            }
        },
    };

    // events.js
    const Events = {
        // Khởi tạo các sự kiện
        init: () => {
            document.addEventListener('DOMContentLoaded', () => {
                UI.updateLoginStatus();
                Events.attachLogoutEvent();
            });
        },

        // Gắn sự kiện đăng xuất
        attachLogoutEvent: () => {
            const logoutButton = document.getElementById("logoutButton");
            if (logoutButton) {
                logoutButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    Auth.logout();
                    UI.updateLoginStatus();
                });
            }
        },

        // Gắn sự kiện 
        
    };

    // Khởi tạo ứng dụng
    Events.init();
