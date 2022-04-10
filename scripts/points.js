let points = document.querySelectorAll(".points__point");

points.forEach(point => {
    let x = point.dataset.x;
    let y = point.dataset.y;
    point.style.left = x + "px";
    point.style.top = y + "px";

    let pointInfo = point.nextElementSibling;
    if (pointInfo?.classList.contains("points__info-box")) {
        pointInfo.style.top = y + "px";
    }
})