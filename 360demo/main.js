const html = document.documentElement; //Gets html document

const canvas = document.querySelector(".scrolling");
const context = canvas.getContext("2d");

const currentFrame = (index) =>
  //`./360degreeframes/file${index.toString().padStart(5, '0')}.png`
  //`./360demo/360degreeframes/filename0000${index}.png`
  `360degreeframes/filename${index.toString().padStart(4, "0")}.png`;

const frameCount = 140; //MAX FRAME COUNT
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvasWidth = canvas.width;
canvasHeight = canvas.height;
const img = new Image();
img.src = currentFrame(1);
img.onload = function () {
  context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame;
  }
};
