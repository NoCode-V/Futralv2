const imageUrls = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg",
  "foto10.jpg",
  "foto11.jpg",
  "foto12.jpg"
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
