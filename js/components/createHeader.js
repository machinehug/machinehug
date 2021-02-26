export default function createHeader() {
    
    const header = document.querySelector("header");

    header.innerHTML = `
    <div class="container">
        <div class="logo-hamburger-container">
            <div class="logo">
                <a class="logo-desktop" href="https://machinehug.com/">machinehug / front-end developer</a>
                <a class="logo-mobile" href="https://machinehug.com/">machinehug</a>
            </div>
            <div class="hamburger" title="open menu">
                <div class="hamburger-inner">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#contact">contact</a></li>
                <li>
                    <a href="https://github.com/machinehug"><i class="icon nav-icon fab fa-github-alt"></i> GitHub</a>
                </li>
                <li><a href="https://www.linkedin.com/in/v-p/"><i class="icon nav-icon fab fa-linkedin"></i> LinkedIn</a></li>
            </ul>
        </nav>
    </div>`;

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", openNav);

    const navListItems = document.querySelectorAll("nav ul li a");

    // hide nav (on mobile) when clicking on nav li
    for (let i = 0; i < navListItems.length; i++) {

        navListItems[i].addEventListener("click", () => {

            const nav = document.querySelector("nav");
            nav.classList.remove("nav-mobile-open");

            const body = document.querySelector("body");
            body.classList.remove("overflow-hidden");

            const hamburgerLines = document.querySelectorAll(".line");

            for (let y = 0; y < hamburgerLines.length; y++) {

                hamburgerLines[y].classList.toggle("hamburger-close-animation");
                hamburgerLines[y].classList.toggle("line" + [y]);
            };
        });
    };
};

function openNav() {

    const nav = document.querySelector("nav");
    nav.classList.toggle("nav-mobile-open");

    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden"); // stop body from scrolling when nav is open

    const hamburgerLines = document.querySelectorAll(".line");

    for (let i = 0; i < hamburgerLines.length; i++) {

        hamburgerLines[i].classList.toggle("hamburger-close-animation");
        hamburgerLines[i].classList.toggle("line" + [i]);
    };
};

window.addEventListener("scroll", changeHeaderBgOnScroll);

function changeHeaderBgOnScroll() {

    const header = document.querySelector("header");

    if (document.documentElement.scrollTop) {
        header.classList.remove("header-transparent-bg");
        header.classList.add("header-bg-scroll");
    } else {
        header.classList.add("header-transparent-bg");
        header.classList.remove("header-bg-scroll");
    };
};