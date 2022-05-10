let headings = document.querySelectorAll(".accordeon__heading");

headings.forEach(heading => {
    heading.addEventListener("click", () => {
        heading.parentElement.classList.toggle("accordeon__item_open");
    })
})

let collapseAllButton = document.querySelector(".accordeon__button-collapse-all"),
    accordeonItems = document.querySelectorAll(".accordeon__item");

collapseAllButton.addEventListener("click", () => {
    accordeonItems.forEach(item => {
        item.classList.add("accordeon__item_open")
    })
})