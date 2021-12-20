const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");

let currentImageIndex = 0;
const imageWidth = 400;
setInterval(nextPic, 3000);
const arrPic = [
  "sliderimg/pic1.jpeg",
  "sliderimg/pic2.jpeg",
  "sliderimg/pic3.jpeg",
  "sliderimg/pic4.jpeg",
  "sliderimg/pic5.jpeg",
  "https://www.dobovo.com/blog/wp-content/uploads/2017/07/%D0%95%D0%B4%D0%B5%D0%BC-%D0%B2-%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D1%82%D0%BE%D0%BF-10-%D0%BC%D0%B5%D1%81%D1%82-825x510.jpg",
];
for (let index = 0; index < arrPic.length; index++) {
  const img = document.createElement("img");
  img.src = arrPic[index];
  container.appendChild(img);
}
let imageCount = container.children.length;

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
