let imageSliders = document.querySelectorAll(".slider");
const minWidth = 35;
const maxWidth = 580 - 35;
imageSliders.forEach(slider => {
    let buttonLeft = slider.querySelector(".slider__btn-left"),
        buttonRight = slider.querySelector(".slider__btn-right"),
        buttonDrag = slider.querySelector(".slider__btn-drag"),
        sliderFront = slider.querySelector(".slider__front"),
        sliderContainer = slider.querySelector(".slider__container"),
        resizeActive = false;

    buttonLeft.addEventListener("click", () => {
        sliderFront.style.width = minWidth + "px";
    })
    buttonRight.addEventListener("click", () => {
        sliderFront.style.width = maxWidth + "px";
    })

    buttonDrag.addEventListener("mousedown", (event) => {
        if (event.button == 0) {
            resizeActive = true;
        }
    })
    document.addEventListener("mouseup", (event) => {
        if (event.button == 0) {
            resizeActive = false;
        }
    })
    document.addEventListener("mouseleave", () => {
        resizeActive = false;
    })
    document.addEventListener("mousemove", (event) => {
        let width = event.clientX - sliderContainer.offsetLeft;
        if (resizeActive && width >= minWidth && width <= maxWidth) {
            sliderFront.style.width = width + "px";
        }
    })
})

let carouselContainer = document.querySelector(".carousel__image-container"),
    arrowLeft = document.querySelector(".carousel__arrow.arrow-left"),
    arrowRight = document.querySelector(".carousel__arrow.arrow-right"),
    images = document.getElementsByClassName("carousel__image");

const imageWidth = 300, imageOffset = 2;
const scrollAmount = imageWidth + imageOffset;

for (let i = 0; i < images.length - 1; i++) {
    images[i].style.left = scrollAmount * i + "px";
}
images[images.length - 1].style.left = -scrollAmount + "px";
let index = 0;
let isAnimating = false;
arrowLeft.addEventListener("click", () => {
    if (isAnimating) return false;
    isAnimating = true;
    for (let image of images) {
        let initialLeft = parseInt(image.style.left.slice(0, -2));
        console.log(initialLeft, scrollAmount * (images.length - 1));
        if (initialLeft < scrollAmount * (images.length - 2)) {
            image.style.left = (initialLeft + scrollAmount) + "px";
        } else {
            image.style.zIndex = -1;
            image.style.left = -scrollAmount + "px"
            setTimeout(() => { image.style.zIndex = 0 }, 700)
        }
    }
    setTimeout(() => isAnimating = false, 700)
})

arrowRight.addEventListener("click", () => {
    if (isAnimating) return false;
    isAnimating = true;
    for (let image of images) {
        let initialLeft = parseInt(image.style.left.slice(0, -2));
        if (initialLeft > -scrollAmount) {
            image.style.left = (initialLeft - scrollAmount) + "px";
        } else {
            image.style.zIndex = -1;
            image.style.left = scrollAmount * (images.length - 2) + "px"
            setTimeout(() => { image.style.zIndex = 0 }, 700)
        }
    }
    setTimeout(() => isAnimating = false, 700)
})

// coloristic
let coloredDivs = document.querySelectorAll(".colors-box__color");

coloredDivs.forEach(coloredDiv => {
    coloredDiv.style.width = coloredDiv.dataset.width + "px";
    coloredDiv.style.backgroundColor = coloredDiv.firstElementChild.textContent;
    coloredDiv.addEventListener("click", () => {
        navigator.clipboard.writeText(coloredDiv.textContent.trim());
        console.log("copied");
    })
})