const startBtn = document.querySelector(".start-camera");
const stopBtn = document.querySelector(".stop-camera");
const downloadBtn = document.querySelector(".download");
const video = document.querySelector(".video");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const captureBtn = document.querySelector(".capture-camera");
const link = document.createElement("a");
const img = document.querySelector("img");

let stream;
let captureData;

startBtn.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.log(error);
  }
});

stopBtn.addEventListener("click", async () => {
  try {
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
    stream = null;
  } catch (error) {
    console.log(error);
  }
});

captureBtn.addEventListener("click", () => {
  if (!video.videoWidth || !video.videoHeight) {
    alert("Camera is not ready");
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  captureData = canvas.toDataURL();
  img.src = captureData;
});

downloadBtn.addEventListener("click", () => {
  if (!captureData) {
    alert("You are not shot a picture");
    return;
  }
  link.download = "photo.png";
  // Chuyển canvas thành data URL để tạo link download
  link.href = canvas.toDataURL();
  // Tự động click để trigger download
  link.click();
});
