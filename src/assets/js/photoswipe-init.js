// PhotoSwipe initialization
// This file is included via the main.js

document.addEventListener('DOMContentLoaded', function() {
  // Check if PhotoSwipe is loaded
  if (typeof PhotoSwipe === 'undefined' || typeof PhotoSwipeLightbox === 'undefined') {
    console.error('PhotoSwipe not loaded');
    return;
  }

  const lightbox = new PhotoSwipeLightbox({
    gallery: '.gallery',
    children: 'a',
    pswpModule: PhotoSwipe
  });
  
  lightbox.init();
});