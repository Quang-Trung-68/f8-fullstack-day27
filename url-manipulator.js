// 1.2. URL Manipulation Tool
// File: url-manipulator.html
// Yêu cầu:
// 1. Tạo form với các input cho phép user tạo URL mới:
// Protocol (dropdown với options: http:, https:)
// Hostname (text input - ví dụ: google.com)
// Port (number input - ví dụ: 3000, có thể để trống)
// Pathname (text input - ví dụ: /products/detail)
// Search/Query (text input - ví dụ: ?id=123&name=abc)
// Hash (text input - ví dụ: #section1)
// 2. Có button "Navigate" sử dụng location.assign() để chuyển tới URL được tạo từ form
// 3. Có button "Replace" sử dụng location.replace() để thay thế URL hiện tại
// 4. Có button "Reload" sử dụng location.reload() để tải lại trang

const protocol = document.querySelector("#protocol");
const hostname = document.querySelector("#hostname");
const port = document.querySelector("#port");
const pathname = document.querySelector("#pathname");
const searchQuery = document.querySelector("#search-query");
const hash = document.querySelector("#hash");

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const urlString =
    protocol.value +
    "//" +
    hostname.value +
    ":" +
    port.value +
    pathname.value +
    searchQuery.value +
    hash.value;
  const button = e.submitter;

  if (button.value === "navigate") {
    console.log(urlString, "navigate");
    location.assign(urlString);
  } else if (button.value === "replace") {
    console.log(urlString, "replace");

    location.replace(urlString);
  } else {
    console.log(urlString, "reload");
    location.reload(urlString);
  }
});
