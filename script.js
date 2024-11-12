const images = [
    '/images/gujiya.jpeg?height=400&width=600',
    '/images/gulab_jamun.jpeg?height=400&width=600&text=Image+2',
    '/images/kaju katli.jpeg?height=400&width=600&text=Image+3',
    '/images/ras malai.jpeg?height=400&width=600&text=Image+4',
    '/images/rasmalai.avif?height=400&width=600&text=Image+5'
];

let currentIndex = 0;
const mainImage = document.getElementById('mainImage');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateMainImage() {
    mainImage.src = images[currentIndex];
    updateThumbnails();
    updateNavButtons();
}

function updateThumbnails() {
    thumbnailsContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage();
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function updateNavButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMainImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateMainImage();
    }
});

// Initialize the gallery
updateMainImage();
