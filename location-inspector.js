console.log(window.location);

const array = [
  "href",
  "protocol",
  "hostname",
  "port",
  "pathname",
  "search",
  "hash",
  "origin",
];

const root = document.querySelector("#root");

const html = array.map((element) => {
  return `<div style="border: 2px solid; padding: 5px">
      <h3>Property Name: location.${element}</h3>
      <p>Current Value: ${window.location[element] || null}</p>
    </div>`;
}).join("");

root.innerHTML = html;

console.log(html);
