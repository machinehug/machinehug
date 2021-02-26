export default function createDesktop(content) {

    return `
    <div class="desktop">
        <div class="camera-receiver-wrapper">
            <div class="camera"></div>
        </div>
        <div class="screen">
            ${content};
        </div>
    </div>
    <div class="desktop-stand"></div>
    <div class="desktop-stand-bottom"></div>`;
};