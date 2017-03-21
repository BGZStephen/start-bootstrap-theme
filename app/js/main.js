var navToggle = document.getElementsByClassName(`navbar__toggle`)[0];
var navList = document.getElementsByClassName(`navbar__list`)[0];
var lightbox = document.getElementsByClassName(`lightbox-container`)[0];
var lightboxImage = document.getElementsByClassName(`lightbox-image`)[0];
var overlay = document.getElementsByClassName(`portfolio-overlay`);

navToggle.addEventListener(`click`, function() {
  console.log(`working`);
  if(navList.style.opacity == 0) {
    navList.style.opacity = 1;
  } else {
    navList.style.opacity = 0;
  }
})

function showLightbox() {
  var image = document.createElement(`img`)
  image.src = this.nextElementSibling.src.replace(`thumbnails`, `fullsize`);
  console.log(image);
  lightboxImage.appendChild(image)
  if(lightbox.style.display = "none") {
    lightbox.style.display = "flex";
  }
}

function hideLightbox() {
  lightbox.style.display = "none";
  lightboxImage.innerHTML = ""
}

for (let i = 0; i < overlay.length; i++) {
  overlay[i].addEventListener(`click`, showLightbox)
}

lightbox.addEventListener(`click`, hideLightbox)
