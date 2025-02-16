const imageUrls = [
  "https://plus.unsplash.com/premium_photo-1682855223699-edb85ffa57b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445375011782-2384686778a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605340406960-f5b496c38b3d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682600420019-bf44716aa917?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682855223699-edb85ffa57b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445375011782-2384686778a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605340406960-f5b496c38b3d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682600420019-bf44716aa917?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

// Initialize the gallery display
loadImages();
changeSlide(0);
