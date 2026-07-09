const pagesLinks = document.querySelectorAll(".page-link");
const blindfoldImg = document.querySelector("#blindfold-img")

blindfoldImg.addEventListener("mouseenter", () => {
    pagesLinks.forEach((link) => {
        link.style.opacity = "1";
    });

    blindfoldImg.style.opacity = "0.2";
});

blindfoldImg.addEventListener("mouseleave", () => {
    pagesLinks.forEach((link) => {
        link.style.opacity = "0";
    });

    blindfoldImg.style.opacity = "1";
});

pagesLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        pagesLinks.forEach((link) => {
            link.style.opacity = "1";
        });

        blindfoldImg.style.opacity = "0.2";
    });

    link.addEventListener("mouseleave", () => {
        pagesLinks.forEach((link) => {
            link.style.opacity = "0";
        });

        blindfoldImg.style.opacity = "1";
    });

});