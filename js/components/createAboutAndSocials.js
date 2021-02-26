import createPhone from "../constants/createPhone.js";
import createMailContainer from "../constants/createMailContainer.js";
import validateForm from "../constants/validateForm.js";

export default function createAboutAndSocials() {

    const aboutContent = `
        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                My name is Victoria. 😊
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I live in Oslo, Norway.
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I create websites. 👩‍💻
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I also like to draw, photo-
                graph stuff and create
                graphic design. 🎨
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I also create graphic design. 🎨
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I study front-end development at Noroff. 👩‍🎓
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                Of course I love tech! 💻 Always have, always will. ♾️
                I started using HTML and CSS when MySpace was still a thing. I never thought it would amount to anything today... 😅
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I have a Bachelor's in IT from NITH (today it's part of Kristiania University College). 🎓
                After graduating I wasn't sure what I wanted to do. We didn't learn anything about front-end actually, I wish I had though, because then I would be a front-end developer ages ago.
                After I did learn about front-end development, however, I knew I had found my calling, and I decided to study front-end at Noroff. 😄
                I love how you can be artistically creative and also code at the same time.
                The sky's the limit! ☁️
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                In my spare time I play video games 🎮, photograph stuff 📷 and sometimes draw ✍️.
                Half-Life: Alyx is really cool. If you haven't played it yet, you should.
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I have two cats. 🐱🐱
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I love coffee a bit too much... ☕
            </div>
        </div>

        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                Did you know that SpaceX's Dragon touchscreen interface is rendered using Chromium and Javascript? 🚀🧑‍🚀 How awesome is that!
            </div>
        </div>`;

    const socialsContent = `
    <a href="https://github.com/machinehug"><i class="fab fa-github-alt"></i></a>
    <a href="https://no.linkedin.com/in/v-p"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.flickr.com/photos/bye_bye_omoide/"><i class="fab fa-flickr"></i></a>`;

    const container = document.querySelector(".about-socials-container");

    container.innerHTML = `
    <div class="container">
        <aside>
            <h1 class="title">about me.</h1>
            ${createPhone(aboutContent)}
        </aside>
        <aside class="socials-container">
            <h2 class="title">find me online.</h2>
            ${createPhone(socialsContent)}
        </aside>
        <aside class="show-on-mobile">
            <h3 class="title">email me.</h3>
            ${createPhone(createMailContainer())}
        </aside>
    </div>`;

    const form = document.querySelector(".phone form");
    form.addEventListener("submit", (event) => validateForm(event, ".phone form"));
};