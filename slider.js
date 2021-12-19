const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
let imageCount = container.children.length;
let currentImageIndex = 0;
const imageWidth = 400;
btnNext.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex === imageCount - 1) {
    btnNext.hidden = true;
  }
  if (currentImageIndex > 0) {
    btnPrev.hidden = false;
  }
  wrapper.scrollLeft = currentImageIndex * imageWidth;
});

btnPrev.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex !== imageCount - 1) {
    btnNext.hidden = false;
  }
  if (currentImageIndex === 0) {
    btnPrev.hidden = true;
  }
  wrapper.scrollLeft = currentImageIndex * imageWidth;
});
