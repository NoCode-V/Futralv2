const imageUrls = [
  "photos/foto1.jpg",
  "photos/foto2.jpg",
  "photos/foto3.jpg",
  "photos/foto4.jpg",
  "photos/foto5.jpg",
  "photos/foto6.jpg",
  "photos/foto7.jpg",
  "photos/foto8.jpg",
  "photos/foto9.jpg",
  "photos/foto10.jpg",
  "photos/foto11.jpg",
  "photos/foto12.jpg"
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
