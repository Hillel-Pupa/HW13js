const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
let imageCount = container.children.length;
let currentImageIndex = 0;
const imageWidth = 400;
setInterval(nextPic, 3000);

btnNext.addEventListener("click", nextPic);

btnPrev.addEventListener("click", prevPic);

function nextPic() {
  currentImageIndex++;
  if (currentImageIndex === imageCount) {
    currentImageIndex = 0;
  }
  wrapper.scrollLeft = currentImageIndex * imageWidth;
}

function prevPic() {
  currentImageIndex--;
  if (currentImageIndex === -1) {
    currentImageIndex = imageCount - 1;
  }
  wrapper.scrollLeft = currentImageIndex * imageWidth;
}
