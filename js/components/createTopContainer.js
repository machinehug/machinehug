import createPhone from "../constants/createPhone.js";
import createArrow from "../constants/createArrow.js";

export default function createTopContainer() {

    const phoneContent = `
        <div class="speech-bubble-colored-wrapper">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble speech-bubble-colored-text-center">
                How are you doing today?
            </div>
        </div>
    
        <div class="hover speech-bubble speech-bubble-grey" data-id="1">
            I'm great!
        </div>
        <div class="hidden speech-bubble-colored-wrapper" data-id="1">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                That's good! 😊 Thanks for taking the time to visit my website! Feel free to look around. 👍
            </div>
        </div>
        
        <div class="hover speech-bubble speech-bubble-grey" data-id="2">
            Wait, who are you...?? 🤔
        </div>
        <div class="hidden speech-bubble-colored-wrapper" data-id="2">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                My name is Victoria. 👋 I'm a front-end developer student based in Oslo. <br /> <br />
                You're looking at my portfolio website right now. Thanks for visiting! 😁
            </div>
        </div>

        <div class="hover speech-bubble speech-bubble-grey" data-id="3">
            I love  cats.
        </div>
        <div class="hidden speech-bubble-colored-wrapper" data-id="3">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                Me too! 🐈
            </div>
        </div>

        <div class="hover speech-bubble speech-bubble-grey" data-id="4">
            Tell me something random.
        </div>
        <div class="hidden speech-bubble-colored-wrapper" data-id="4">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble speech-bubble-random-answer">
                ${getRandomAnswer()}
            </div>
        </div>

        <div class="hover speech-bubble speech-bubble-grey" data-id="5">
            I'm having a bad day... 😟
        </div>
        <div class="hidden speech-bubble-colored-wrapper" data-id="5">
            <div class="speech-bubble-piece-left"></div>
            <div class="speech-bubble">
                I'm sorry to hear that... 😟 Hope this brings a smile to your face: <br /> <br />
                Squirrels plant thousands of trees each year by forgetting where they put their acorns.
            </div>
        </div>`;

    const container = document.querySelector(".top-container");

    container.innerHTML = `
    <div class="container">
        <aside>
            <h1 class="title">hi,<br />hello</h1>
            ${createArrow("#portfolio")}
        </aside>
        <aside>
            ${createPhone(phoneContent)}
        </aside>
    </div>`;

    const questionSpeechBubbles = document.querySelectorAll(".speech-bubble-grey");
    questionSpeechBubbles.forEach(speechBubble => speechBubble.addEventListener("click", (event) => showAnswerOnClick(event)));
};

function showAnswerOnClick(event) {

    const speechBubbleQuestionId = event.target.dataset.id;
    const speechBubbleAnswers = document.querySelectorAll(".speech-bubble-colored-wrapper");

    speechBubbleAnswers.forEach(speechBubble =>  {

       const speechBubbleAnswerId = speechBubble.dataset.id;

       if (speechBubbleAnswerId == speechBubbleQuestionId) {
        speechBubble.classList.toggle("hidden");
       };
    });
};

function getRandomAnswer() {

    fetch("json/random.json")
    .then((response) => { return response.json() })
    .then(findAnswer)
    .catch(() => {
        // standard answer if an error occurs
        const container = document.querySelector(".speech-bubble-random-answer");
        container.innerHTML = "When the millionaire, Ben Rea, died in 1988, he refused to recognise his family in his will, and instead gave £7 million to his cat Blackie.";
    });

    function findAnswer(json) {

        const arr = Object.values(json);
        const randomAnswer = arr[Math.floor(Math.random() * arr.length)];
    
        const container = document.querySelector(".speech-bubble-random-answer");
        container.innerHTML = randomAnswer;
    };
};

