const dropDownList = $(".dropdown");
const dropDownItemList = $(".dropdown-list > .item");
const leftArrow = document.querySelector(".img").children[0];
const rightArrow = document.querySelector(".img").children[2];
const img = document.querySelector(".img").children[1];

function onDropDownClick() {
    const isOpened = $(this).data("isOpened");
    const list = $(this).find(".dropdown-list");

    if (isOpened === undefined || isOpened === false) {
        $(list).css({
            display: "block"
        });
        $(this).data("isOpened", true);
    } else {
        $(list).css({
            display: "none"
        });
        $(this).data("isOpened", false);
    }
}

function onItemClick() {
    const head = $(this).parent().parent().find(".dropdown-head");
    head.text(this.textContent);
}

dropDownList.on("click", onDropDownClick);
dropDownItemList.on("click", onItemClick);

const arr = ["img/first.jpg", "img/1.jfif", "img/2.jfif", "img/3.jfif", "img/4.jfif"]
let i = 0;
leftArrow.addEventListener("click", function () {
    if (i <= 0) {
        i = 1;
    }
    i -= 1;
    img.src = arr[i];

})

rightArrow.addEventListener("click", function () {
    if (i >= arr.length - 1) {
        i = arr.length - 2;
    }
    i += 1;
    img.src = arr[i];
})
