//options for the instersectionObserver. Adjusting the point of intersection
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
}
//get all the images that have data-src and store them in imagesToLoad
let imagesToLoad = document.querySelectorAll('img[data-src]');

//make a function that replaces the src attribute with the data-src information

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//make the intersectionObserver and conditionally load images if they are in the window.
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}