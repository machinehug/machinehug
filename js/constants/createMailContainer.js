export default function createMailContainer() {

    return `
    <div class="mail-container">    
        <h1 class="subhead">Feel free to email me.</h1>
        <p>Sending an email using this form will open your email application.</p>
        <form>
            <div>
                <span aria-label="Email subject."><i class="far fa-smile contact-icon" aria-hidden="true" title="email subject"></i></span>
                <div>
                    <input type="text" name="subject" id="subject" placeholder="Email subject...">
                    <div class="error hidden">Please enter an email subject</div>
                </div>
            </div>
            <div>
                <span aria-label="Email message. 10 to 1000 characters."><i class="far fa-envelope" aria-hidden="true" title="message"></i></span>
                <div>
                    <textarea placeholder="Message (10-1000 characters)..." name="message" id="message" rows="8"></textarea>
                    <div class="error hidden">Please add a message (10-1000 characters)</div>
                    <button type="submit">SEND EMAIL</button>
                    <div class="submit-message hidden">An error occurred. Please try again later or contact me via <a href="https://www.linkedin.com/in/v-p/">LinkedIn</a>.</div>
                </div>
            </div>
        </form>
    </div>`;
};