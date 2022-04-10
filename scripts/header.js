let menu = document.querySelector(".header__menu"),
    menuContainer = document.querySelector(".header__menu-list"),
    menuBtn = document.querySelector(".header__menu-icon")

menu.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target != menuBtn) menuContainer.classList.remove("hidden");
})

let searchBar = document.querySelector('.header__search');

searchBar.addEventListener("click", event => {
    event.stopPropagation();
    searchBar.classList.add("header__search_open");
})



document.body.addEventListener("click", function (event) {
    if (event.target != menu) menuContainer.classList.add("hidden");
    if (event.target != searchBar) searchBar.classList.remove("header__search_open");
})