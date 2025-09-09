// get elements from body
const buttons = document.querySelectorAll("button[data-page]");
const content = document.querySelector("#content");
const historyInfo = document.getElementById("historyInfo");

// function render new content
function render(page) {
  if (page === "home") {
    content.textContent =
      "Chào mừng đến với trang chủ! Đây là nội dung của trang Home.";
  } else if (page === "about") {
    content.textContent =
      "Thông tin về chúng tôi. Chúng tôi là công ty chuyên về công nghệ web.";
  } else if (page === "services") {
    content.textContent =
      "Các dịch vụ của chúng tôi: Thiết kế web, Lập trình ứng dụng, Tư vấn công nghệ.";
  } else {
    content.textContent =
      "Liên hệ với chúng tôi: Email: contact@example.com, Phone: 0123456789";
  }
  historyInfo.textContent = "History Length: " + history.length;
}

// adding event listener when clicking button
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const page = btn.dataset.page;
    history.pushState({ page }, "", `?page=${page}`);
    render(page);
  });
});

// when back/forward
window.addEventListener("popstate", (event) => {
  if (event.state?.page) {
    render(event.state.page);
  } else {
    const params = new URLSearchParams(location.search);
    const page = params.get("page") || "home";
    render(page);
  }
});

// reload page or first load
const params = new URLSearchParams(location.search);
const page = params.get("page") || "home";
render(page);
