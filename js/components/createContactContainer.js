import createMailContainer from "../constants/createMailContainer.js";
import validateForm from "../constants/validateForm.js";

export default function createContactContainer() {

    const container = document.querySelector(".contact-container");

    container.innerHTML = `
    <div class="container hide-on-desktop">
        <div class="desktop">
            <div class="camera-receiver-wrapper">
                <div class="camera"></div>
            </div>
            <div class="screen">
                ${createMailContainer()}
                <div class="menu">
                    <div>
                        ${getCurrentTimeAndDate()}
                    </div>
                    <div>
                        <div>
                            <i class="far fa-envelope"></i>
                        </div>
                        <i class="fas fa-wifi"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="desktop-stand"></div>
        <div class="desktop-stand-bottom"></div>
    </div>`;

    const form = document.querySelector(".desktop form");
    form.addEventListener("submit", (event) =>  validateForm(event, ".desktop form"));
};

function getCurrentTimeAndDate() {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[new Date().getDay()];
    
    const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    const month = months[new Date().getMonth()];

    const date = new Date().getDate();
    const year = new Date().getFullYear();

    const currentDate = `${day} ${date} ${month} ${year}`;

    const hours = new Date().getHours();
    const minutes = String(new Date().getMinutes()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}`;
    
    const currentTimeAndDate = `${currentTime} ${currentDate}`; // currentTimeAndDate example: 10:23 Monday 13 Sep. 2021

    return currentTimeAndDate;
};