const imageUrls = [
  "foto1.JPG",
  "foto2.JPG",
  "foto3.JPG",
  "foto4.JPG",
  "foto5.JPG",
  "foto6.JPG",
  "foto7.JPG",
  "foto8.JPG",
  "foto9.JPG",
  "foto10.JPG",
  "foto11.JPG",
  "foto12.JPG"
];

const imagesContainer = document.querySelector('.gallery-images');
let currentIndex = imageUrls.length;

function loadImages() {
  imagesContainer.innerHTML = imageUrls.concat(imageUrls, imageUrls).map((url, index) => `<img src="${url}" alt="Gallery image">`).join('');
  imagesContainer.style.transform = `translateX(${-currentIndex * 33.33 - (currentIndex * 10)}%)`;
}

function changeSlide(direction) {
  const totalImages = imageUrls.length;
  currentIndex += direction;

  imagesContainer.style.transition = 'transform 0.5s ease';
  imagesContainer.style.transform = `translateX(${-currentIndex * 33.33 - (currentIndex * 10)}%)`;

  if (currentIndex === 0 || currentIndex === totalImages * 3 - 3) {
    setTimeout(() => {
      imagesContainer.style.transition = 'none';
      currentIndex = currentIndex === 0 ? totalImages : totalImages * 2;
      imagesContainer.style.transform = `translateX(${-currentIndex * 33.33 - (currentIndex * 10)}%)`;
    }, 500);
  }
}

loadImages();
changeSlide(0);
