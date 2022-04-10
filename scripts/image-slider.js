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