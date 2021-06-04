window.addEventListener('load',() =>{
    const images = document.querySelectorAll("[data-src]");
    console.log(pictures);
});

function preloadImages(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 20px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersection) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserver(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observer(image);
});