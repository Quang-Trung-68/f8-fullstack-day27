// get elements
const startBtn = document.querySelector(".start-camera");
const stopBtn = document.querySelector(".stop-camera");
const downloadBtn = document.querySelector(".download");
const video = document.querySelector(".video");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const captureBtn = document.querySelector(".capture-camera");
const link = document.createElement("a");
const img = document.querySelector("img");

// initialize variables to use for stream video and capture data
let stream;
let captureData;

// add event for start camera: use async and await
startBtn.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.log("Can not open camera");
  }
});

// add event for stop camera
stopBtn.addEventListener("click", () => {
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
    stream = null;
});

// add event for capture camera
captureBtn.addEventListener("click", () => {
  // if camera is not ready, return
  if (!video.videoWidth || !video.videoHeight) {
    alert("Camera is not ready");
    return;
  }
  // set size of canvas follow size of video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  // draw the image
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  captureData = canvas.toDataURL();
  // set data to src prop of img tag
  img.src = captureData;
});

// add event for download
downloadBtn.addEventListener("click", () => {
  // if do not have capture data, not allow for download
  if (!captureData) {
    alert("You must take a picture first!");
    return;
  }
  // set name, href and autodownload
  link.download = "photo.png";
  link.href = canvas.toDataURL();
  link.click();
});
