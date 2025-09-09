const textCopy = document.getElementById("text-copy");
const textPaste = document.getElementById("text-paste");
const copyBtn = document.querySelector(".copy");
const pasteBtn = document.querySelector(".paste");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textCopy.value);
});

pasteBtn.addEventListener("click", async () => {
  textPaste.value = await navigator.clipboard.readText();
});
