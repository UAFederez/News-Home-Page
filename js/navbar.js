const navOpenBtn = document.querySelector(".nav-hamburger > button");

if (navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        const navList = document.querySelector(".primaryNavigation");
        const navClose = document.querySelector(
            ".primaryNavigation .nav-close"
        );
        const navOverlay = document.querySelector(".dark-bg");

        document.documentElement.classList.add("no-scroll");
        navList.setAttribute("data-visible", "true");
        navOverlay.setAttribute("data-visible", "true");
        navClose.addEventListener("click", () => {
            navList.setAttribute("data-visible", "false");
            navOverlay.setAttribute("data-visible", "false");
            document.documentElement.classList.remove("no-scroll");
        });
    });
}

console.log(navOpenBtn);
