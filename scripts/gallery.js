let galleries = document.querySelectorAll(".gallery");

if (galleries.length > 0) {
    galleries.forEach(gallery => {
        let slides = gallery.querySelectorAll(".gallery__slide"),
            buttonBack = gallery.querySelector(".gallery__arrow-left"),
            buttonForward = gallery.querySelector(".gallery__arrow-right"),
            indexSpan = gallery.querySelector(".gallery__current-index"),
            totalSpan = gallery.querySelector(".gallery__total");
        let total = slides.length, index = 0;
        totalSpan.textContent = total;

        buttonForward.addEventListener("click", () => {
            slides[index].classList.remove("gallery__slide_active")
            index = index + 1 >= total ? 0 : index + 1;
            console.log(index);
            slides[index].classList.add("gallery__slide_active")
            indexSpan.textContent = index + 1;
        })

        buttonBack.addEventListener("click", () => {
            slides[index].classList.remove("gallery__slide_active")
            index = index - 1 < 0 ? total - 1 : index - 1;
            slides[index].classList.add("gallery__slide_active")
            indexSpan.textContent = index + 1;
        })
    })
}
