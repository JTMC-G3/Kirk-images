async function getRandomImage() {
  const response = await fetch('images.json');
  const data = await response.json();
  const images = data.images;
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

getRandomImage().then(img => {
  document.getElementById('randomImage').src = img;
});
