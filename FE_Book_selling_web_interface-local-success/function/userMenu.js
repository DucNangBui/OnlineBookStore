// Hàm xử lý sự kiện click vào liên kết người dùng
function handleUserLinkClick() {
    const userLink = document.getElementById("userLink");
    const guestMenu = document.getElementById("guestMenu");

    userLink.addEventListener("click", function (event) {
        event.preventDefault();
        guestMenu.style.display = guestMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!userLink.contains(event.target) && !guestMenu.contains(event.target)) {
            guestMenu.style.display = "none";
        }
    });
}
