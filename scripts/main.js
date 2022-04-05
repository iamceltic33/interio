// main-page
let arrowUpButton = document.querySelector('.arrow-up'),
    expantionList = document.querySelector('.main__content-list-expantion'),
    expand = document.querySelector('.main__list-expand'),
    sortLinkGroup = document.querySelector('.sort-group'),
    sortLinkList = document.querySelector('.sort-list'),
    listContainer = document.querySelector('.main__list-container'),
    groupContainer = document.querySelector('.main__content-groups'),
    categories = document.querySelectorAll('.category-choice-item'),
    postsEl = document.querySelector('.main__posts'),
    postContainer = document.querySelector('.main__posts-container'),
    categoriesContainer = document.querySelector('.main__categories'),
    backLink = document.querySelector('.breadcrumbs-back'),
    currentGroup = document.querySelector('.current'),
    arrowLeft = document.querySelector(".arrow-left"),
    arrowRight = document.querySelector(".arrow-right");

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
        { title: "Египетский", image: "assets/east-and-africa/egypt.jpg", link: "#" },
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

expand.addEventListener("click", () => {
    expantionList.classList.remove("hidden")
})

arrowUpButton.addEventListener("click", () => {
    expantionList.classList.add("hidden");
})

sortLinkGroup.addEventListener("click", (event) => {
    event.preventDefault();
    listContainer.classList.add("hidden");
    groupContainer.classList.remove("hidden");
    sortLinkGroup.classList.add("main__sort-link_active");
    sortLinkList.classList.remove("main__sort-link_active");
})

sortLinkList.addEventListener("click", (event) => {
    event.preventDefault();
    listContainer.classList.remove("hidden");
    groupContainer.classList.add("hidden");
    sortLinkGroup.classList.remove("main__sort-link_active");
    sortLinkList.classList.add("main__sort-link_active");
})

categories.forEach(item => {
    item.addEventListener("click", () => {
        let cat = item.dataset.category;
        currentGroup.textContent = cat;
        let posts = groups[cat];
        postContainer.innerHTML = '';
        if (posts.length > 6) {
            arrowRight.classList.remove("hidden")
            arrowLeft.classList.remove("hidden")
        }
        posts.forEach((post, index) => {
            postContainer.insertAdjacentHTML('beforeend',
                `
                    <div class="post-item${index == 0 && posts.length > 6 ? ' post-item_first' : ''}" >
                                <div class="post-image-container">
                                    <a class="post-link-image" href="${post.link}">
                                        <img alt="post image" src="${post.image}" class="category-image">
                                    </a>
                                </div>
                                <div class="category-title">
                                    <a class="post-link" href="${post.link}">
                                        ${post.title}
                                    </a>
                                </div>
                            </div>
                `
            )
        })
        postsEl.classList.remove("hidden");
        categoriesContainer.classList.add("hidden");
    })
})

backLink.addEventListener("click", event => {
    event.preventDefault();
    categoriesContainer.classList.remove("hidden");
    postsEl.classList.add("hidden");
    postContainer.innerHTML = "";
    arrowRight.classList.add("hidden")
    arrowLeft.classList.add("hidden")
})

let amountScroll = 500;
arrowRight.addEventListener("click", function () {
    postContainer.scrollBy({
        top: 0, left: amountScroll, behavior: "smooth"
    })
})
arrowLeft.addEventListener("click", function () {
    postContainer.scrollBy({
        top: 0, left: -amountScroll, behavior: "smooth"
    })
})