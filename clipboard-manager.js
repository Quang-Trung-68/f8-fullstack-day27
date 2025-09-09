// get elements
const textCopy = document.getElementById("text-copy");
const textPaste = document.getElementById("text-paste");
const copyBtn = document.querySelector(".copy");
const pasteBtn = document.querySelector(".paste");

// event listener of copy btn
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textCopy.value);
});

// event listener of paste btn
pasteBtn.addEventListener("click", async () => {
  textPaste.value = await navigator.clipboard.readText();
});
