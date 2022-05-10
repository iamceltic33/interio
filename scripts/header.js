let menu = document.querySelector(".header__menu"),
    menuContainer = document.querySelector(".header__menu-list"),
    menuBtn = document.querySelector(".header__menu-icon")

menu.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target != menuBtn) menuContainer.classList.remove("hidden");
})

let searchBar = document.querySelector('.header__search-container');
const groups = {
    "Античность": [
        { title: "Классицизм", image: "assets/antic/classicism.jpg", link: "#" },
        { title: "Ампир", image: "assets/antic/ampir.jpg", link: "#" },
        { title: "Бидермейер", image: "assets/antic/bidermeier.jpg", link: "#" },
        { title: "Греческий и Римский", image: "assets/antic/greek-and-rome.jpg", link: "#" },
        { title: "Рококо", image: "assets/antic/rokoko.jpg", link: "#" },
        { title: "Барокко", image: "assets/antic/barokko.jpg", link: "#" },
        { title: "Ренессанс", image: "assets/antic/renessans.jpg", link: "#" }
    ],
    "Ближний Восток и Африка": [
        { title: "Египетский", image: "assets/east-and-africa/egypt.jpg", link: "posts/egyptian.html" },
        { title: "Африканский", image: "assets/east-and-africa/africa.jpg", link: "#" },
        { title: "Арабский", image: "assets/east-and-africa/arabic.jpg", link: "#" },
        { title: "Персидский", image: "assets/east-and-africa/persia.jpg", link: "#" },
        { title: "Османский", image: "assets/east-and-africa/osman.jpg", link: "#" },
        { title: "Индийский", image: "assets/east-and-africa/india.jpg", link: "#" }
    ],
    "Восточная Азия": [
        { title: "Шинуазри", image: "assets/asia/shinuazi.jpg", link: "#" },
        { title: "Японский ", image: "assets/asia/japan.jpg", link: "#" },
        { title: "Китайский", image: "assets/asia/china.jpg", link: "#" },
        { title: "Бали", image: "assets/asia/bali.jpg", link: "#" },
    ],
    "Модернизм чистых форм": [
        { title: "Mid-centry mod", image: "assets/modern-clean/mid-centry.jpg", link: "#" },
        { title: "Био-тек", image: "assets/modern-clean/bio-tech.jpg", link: "#" },
        { title: "Функционализм", image: "assets/modern-clean/function.jpg", link: "#" },
        { title: "Неопластицизм", image: "assets/modern-clean/neoplasticism.jpg", link: "#" },
        { title: "Конструктивизм", image: "assets/modern-clean/constructivism.jpg", link: "#" },
        { title: "Хай-тек", image: "assets/modern-clean/high-tech.jpg", link: "#" },
        { title: "Индустриальный", image: "assets/modern-clean/industrial.jpg", link: "#" },
        { title: "Минимализм", image: "assets/modern-clean/minimal.jpg", link: "#" },
    ],
    "Декоративный модернизм": [
        { title: "Ар-нуво", image: "assets/decor-modern/ar-nuvo.jpg", link: "#" },
        { title: "Кубизм", image: "assets/decor-modern/cubism.jpg", link: "#" },
        { title: "Ар-деко", image: "assets/decor-modern/ar-deko.jpg", link: "#" },
        { title: "Постмодернизм", image: "assets/decor-modern/postmodern.jpg", link: "#" },
    ],
    "Европейская этника": [
        { title: "Рустик", image: "assets/europe/rustik.jpg", link: "#" },
        { title: "Романика", image: "assets/europe/romanika.jpg", link: "#" },
        { title: "Русский", image: "assets/europe/russian.jpg", link: "#" },
        { title: "Аrts & Сrafts", image: "assets/europe/arts-and-crafts.jpg", link: "#" },
        { title: "Византийский", image: "assets/europe/visantia.jpg", link: "#" },
        { title: "Готический", image: "assets/europe/gothic.jpg", link: "#" },
        { title: "Викторианский", image: "assets/europe/victorian.jpg", link: "#" },
    ]
}
searchBar.addEventListener("click", event => {
    event.stopPropagation();
    searchBar.firstElementChild.classList.add("header__search_open");
})

document.body.addEventListener("click", function (event) {
    if (event.target != menu) menuContainer.classList.add("hidden");
    if (event.target != searchBar) {
        searchBar.firstElementChild.classList.remove("header__search_open");
        searchResultsBox.classList.add("hidden");
    }
})

let searchInput = document.querySelector(".header__search-input"),
    searchResultsBox = document.querySelector(".header__search-results"),
    searchLoader = document.querySelector(".header__search-loader"),
    searchList = document.querySelector(".header__results-list")

if (searchInput != null) {
    searchInput.addEventListener("input", function () {
        searchList.innerHTML = "";
        if (searchInput.value.length >= 2) {
            searchLoader.classList.remove("hidden");
            searchResultsBox.classList.remove("hidden");
            let searchResults = [];
            for (let property in groups) {
                groups[property].forEach(post => {
                    if (post.title.toLowerCase().includes(searchInput.value.toLowerCase())) {
                        searchResults.push(post)
                    }
                })
            }
            searchResults.sort((a, b) =>
                searchResultsSort(a.title, b.title, searchInput.value))
            searchLoader.classList.add("hidden");
            if (searchResults.length == 0) {
                searchList.textContent = "По вашему запросу ничего не найдено"
            } else {
                searchResults.forEach(post => {
                    searchList.insertAdjacentHTML("beforeend", `
                        <a class="header__results-list-item" href="${post.link}">
                            ${post.title}
                        </a>
                    `)
                })
            }

        } else {
            searchResultsBox.classList.add("hidden");
        }
    })
}

function searchResultsSort(nextPost, prevPost, searchText) {
    nextPost = nextPost.toLowerCase();
    prevPost = prevPost.toLowerCase();
    searchText = searchText.toLowerCase();
    if (
        nextPost.slice(0, searchText.length) == searchText && prevPost.slice(0, searchText.length) == searchText ||
        nextPost.slice(0, searchText.length) != searchText && prevPost.slice(0, searchText.length) != searchText
    ) {
        if (nextPost > prevPost) return 1;
        else if (nextPost < prevPost) return -1;
        else return 0;
    }
    else if (nextPost.slice(0, searchText.length) == searchText && prevPost.slice(0, searchText.length) != searchText) return -1
    else if (nextPost.slice(0, searchText.length) != searchText && prevPost.slice(0, searchText.length) == searchText) return 1
    else return 0;
}