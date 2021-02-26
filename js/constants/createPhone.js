export default function createPhone(content) {

    return `
    <div class="phone">
        <div class="camera-receiver-wrapper">
            <div class="receiver"></div>
            <div class="camera"></div>
        </div>
        <div class="screen">
            ${content}
        </div>
        <div class="phone-button-wrapper">
            <div class="phone-button"></div>
        </div>
    </div>`;
};