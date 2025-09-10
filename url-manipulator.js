// get elements from body
const protocol = document.querySelector("#protocol");
const hostname = document.querySelector("#hostname");
const port = document.querySelector("#port");
const pathname = document.querySelector("#pathname");
const searchQuery = document.querySelector("#search-query");
const hash = document.querySelector("#hash");
const form = document.querySelector(".form");
const urlPreview = document.querySelector(".url-result");

// form to action
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // create standard URL from inputs
  let urlString = protocol.value + "//" + hostname.value;

  if (port.value) urlString += ":" + port.value;
  if (pathname.value)
    urlString += pathname.value.startsWith("/")
      ? pathname.value
      : "/" + pathname.value;
  if (searchQuery.value)
    urlString += searchQuery.value.startsWith("?")
      ? searchQuery.value
      : "?" + searchQuery.value;
  if (hash.value)
    urlString += hash.value.startsWith("#") ? hash.value : "#" + hash.value;

  const button = e.submitter;
  if (button.value === "navigate") {
    location.assign(urlString);
  } else if (button.value === "replace") {
    location.replace(urlString);
  } else if (button.value === "preview") {
    urlPreview.textContent = urlString;
  } else {
    location.reload();
  }
});
