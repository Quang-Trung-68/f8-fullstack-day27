// get elements from body
const protocol = document.querySelector("#protocol");
const hostname = document.querySelector("#hostname");
const port = document.querySelector("#port");
const pathname = document.querySelector("#pathname");
const searchQuery = document.querySelector("#search-query");
const hash = document.querySelector("#hash");
const form = document.querySelector(".form");

// form to action
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if checking validation of form is false, report and return
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  // create url string from data input that entering from user
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
  // check what action to perform is navigate, replace or reload
  if (button.value === "navigate") {
    location.assign(urlString);
  } else if (button.value === "replace") {
    location.replace(urlString);
  } else {
    location.reload(urlString);
  }
});
