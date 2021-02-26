import createTablet from "../constants/createTablet.js";
import createPhone from "../constants/createPhone.js";

export default function createPortfolioContainer() {

    fetch("json/portfolio-imgs.json")
    .then((response) => { return response.json() })
    .then(getImgs)
    .catch((error) => console.log("Error code: " + error));

    let html = "";
    let htmlMobile = "";

    function getImgs(json) {

        for (let i = 0; i < json.length; i++) {

            html += `
            <div class="screen portfolio-pic hidden" style="background: url('${json[i].img}') center no-repeat;">
                    <div class="speech-bubble-colored-wrapper">
                        <div class="speech-bubble-piece-left"></div>
                        <div class="speech-bubble">
                            <div>
                                <a href="${json[i].url}"><i class="fas fa-heart"></i> View website</a>
                            </div>
                            <div>
                                <a href="${json[i].code}"><i class="icon nav-icon fab fa-github-alt"></i> Code on GitHub</a>
                            </div>
                        </div>
                    </div>
            </div>`;

            htmlMobile += `
            <div class="screen portfolio-pic hidden" style="background: url('${json[i].imgmobile}') no-repeat center;">
                    <div class="speech-bubble-colored-wrapper">
                        <div class="speech-bubble-piece-left"></div>
                        <div class="speech-bubble">
                            <div>
                                <a href="${json[i].url}"><i class="fas fa-heart"></i> View website</a>
                            </div>
                            <div>
                                <a href="${json[i].code}"><i class="icon nav-icon fab fa-github-alt"></i> View code</a>
                            </div>
                        </div>
                    </div>
            </div>`;
        };

        const arrows = `
        <div class="portfolio-arrows-pics-container">
            <div class="next"></div>
            <div class="prev"></div>
        </div>`;

        // tablet/desktop
        const tabletContainer = document.querySelector(".tablet-portfolio");
        tabletContainer.innerHTML = `
        <div class="portfolio-device-container">
            ${createTablet(html)}
            <div class="portfolio-device-phone">
                ${createPhone(arrows)}
            </div>
        </div>`;

        const portfolioTabletPics = document.querySelectorAll(".tablet-portfolio .portfolio-pic");
        portfolioTabletPics[0].classList.remove("hidden");

        // phone
        const phoneContainer = document.querySelector(".phone-portfolio");
        phoneContainer.innerHTML = `
        <div class="portfolio-device-container">
            ${createPhone(htmlMobile)}
            ${arrows}
        </div>`;

        const portfolioPhonePics = document.querySelectorAll(".phone-portfolio .portfolio-pic");
        portfolioPhonePics[0].classList.remove("hidden");

        // next and prev arrows for both phone and tablet/desktop
        const next = document.querySelectorAll(".next");
        next.forEach(arrow => arrow.addEventListener("click", (event) => changePic(event, portfolioTabletPics, portfolioPhonePics)));
    
        const prev = document.querySelectorAll(".prev");
        prev.forEach(arrow => arrow.addEventListener("click", (event) => changePic(event, portfolioTabletPics, portfolioPhonePics)));
    };
};

let nextPortfolioPic = 0;

function changePic(event, portfolioTabletPics, portfolioPhonePics) {

    portfolioTabletPics.forEach(pic => pic.classList.add("hidden"));
    portfolioPhonePics.forEach(pic => pic.classList.add("hidden"));

    // same length for phone and tablet/desktop
    const allPics = portfolioTabletPics.length;

    const arrow = event.target.classList.value;

    if (arrow === "prev") {

        if (nextPortfolioPic <= allPics) {
            nextPortfolioPic--;
        };
    
        if (nextPortfolioPic < 0) {
            nextPortfolioPic = allPics - 1;
        };
    };

    if (arrow === "next") {

        if (nextPortfolioPic <= allPics) {
            nextPortfolioPic++;
        };
    
        if (nextPortfolioPic >= allPics) {
            nextPortfolioPic = 0;
        };        
    };

    portfolioTabletPics[nextPortfolioPic].classList.remove("hidden");
    portfolioPhonePics[nextPortfolioPic].classList.remove("hidden");
};