const canvas = document.getElementById("videoCanvas");
const ctx = canvas.getContext("2d");


const video = document.createElement("video");
video.src = "media/home/smoke.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
  if (video.readyState >= 2) {
    ctx.globalAlpha = 0.4; 
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;
  }

  requestAnimationFrame(render);
}
render();