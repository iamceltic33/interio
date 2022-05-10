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

let carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
    let imageContainer = carousel.querySelector(".carousel__image-container"),
        arrowLeft = carousel.querySelector(".arrow-left"),
        arrowRight = carousel.querySelector(".arrow-right"),
        images = carousel.querySelectorAll(".carousel__image"),
        index = 0;
    let counter = 0;
    for (let image of images) {
        image.addEventListener("load", () => {
            counter++;
            if (counter == images.length) {
                initiateCarousel();
            }
        })
    }
    function initiateCarousel() {
        let imageContainerClone = imageContainer.cloneNode(true);
        imageContainerClone.classList.add("clone");
        let containerWidth = parseFloat(getComputedStyle(imageContainer).width);
        imageContainerClone.style.left = -containerWidth + "px";
        imageContainer.style.left = "0px";
        carousel.prepend(imageContainerClone);

        arrowRight.addEventListener("click", function () {
            index++;
            if (index >= images.length) index = 0;
            let scrollAmount = images[index].width != 0 ? images[index].width : 300;
            scrollAmount += 2;
            if (parseFloat(imageContainer.style.left) < -containerWidth + scrollAmount) {
                imageContainer.style.display = "none";
                imageContainer.style.left = (containerWidth + scrollAmount + 2) + "px";
                setTimeout(() => {
                    imageContainer.style.display = "";
                })
            }
            imageContainer.style.left = parseFloat(imageContainer.style.left) - scrollAmount + "px";

            if (parseFloat(imageContainerClone.style.left) < -containerWidth + scrollAmount) {
                imageContainerClone.style.display = "none";
                imageContainerClone.style.left = (containerWidth - scrollAmount) + "px";
                setTimeout(() => {
                    imageContainerClone.style.display = "";
                })
            } else {
                imageContainerClone.style.left = parseFloat(imageContainerClone.style.left) - scrollAmount + "px";
            }
        })

        arrowLeft.addEventListener("click", function () {
            index--;
            if (index < 0) index = images.length - 1;
            let scrollAmount = images[index].width != 0 ? images[index].width + 2 : 302;
            if (parseFloat(imageContainer.style.left) > containerWidth - scrollAmount) {
                imageContainer.style.display = "none";
                imageContainer.style.left = -(containerWidth + scrollAmount) + "px";
                setTimeout(() => {
                    imageContainer.style.display = "";
                })
            }
            imageContainer.style.left = parseFloat(imageContainer.style.left) + scrollAmount + "px";

            if (parseFloat(imageContainerClone.style.left) > containerWidth - scrollAmount - 2) {
                imageContainerClone.style.display = "none";
                imageContainerClone.style.left = -(containerWidth) + "px";
                setTimeout(() => {
                    imageContainerClone.style.display = "";
                })
            } else {
                imageContainerClone.style.left = parseFloat(imageContainerClone.style.left) + scrollAmount + "px";
            }
        })
    }
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