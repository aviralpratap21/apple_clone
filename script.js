window.addEventListener("scroll", function () {
    const video = document.getElementById("vid");
    let scrollPosition = window.scrollY;

    // Adjust scale for zoom-out effect
    let scale = 1 - scrollPosition / 2000; // Slower zoom out (adjusted value)

    if (scale < 0.9) { // Control minimum zoom level
        scale = 0.9;
    }

    // Adjust border-radius based on scroll position
    let borderRadius = scrollPosition / 10; // Increase border radius as you scroll

    if (borderRadius > 100) { // Maximum border radius
        borderRadius = 100;
    }

    video.style.transform = `scale(${scale})`;
    video.style.borderBottomLeftRadius = `${borderRadius}px`;
    video.style.borderBottomRightRadius = `${borderRadius}px`;
});
const gallery = document.getElementById('gallery');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Scroll amount can be adjusted as needed
const scrollAmount = 400;

leftArrow.addEventListener('click', () => {
    gallery.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
const igallery = document.getElementById('igallery');
const ileftArrow = document.getElementById('ileftArrow');
const irightArrow = document.getElementById('irightArrow');

// Scroll amount can be adjusted as needed
const iscrollAmount = 400;

ileftArrow.addEventListener('click', () => {
    igallery.scrollBy({
        left: -iscrollAmount,
        behavior: 'smooth'
    });
});

irightArrow.addEventListener('click', () => {
    igallery.scrollBy({
        left: iscrollAmount,
        behavior: 'smooth'
    });
});
const whygallery = document.getElementById('whygallery');
const whyleftArrow = document.getElementById('whyleftArrow');
const whyrightArrow = document.getElementById('whyrightArrow');

// Scroll amount can be adjusted as needed
const whyscrollAmount = 400;

whyleftArrow.addEventListener('click', () => {
    whygallery.scrollBy({
        left: -whyscrollAmount,
        behavior: 'smooth'
    });
});

whyrightArrow.addEventListener('click', () => {
    whygallery.scrollBy({
        left: whyscrollAmount,
        behavior: 'smooth'
    });
});