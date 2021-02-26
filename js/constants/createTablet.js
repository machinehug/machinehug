export default function createTablet(content) {

    return `
    <div class="tablet">
        <div class="camera-wrapper">
            <div class="camera"></div>
        </div>
        <div class="screen">
            ${content}
        </div>
        <div class="button-wrapper">
            <div class="button"></div>
        </div>
    </div>`;
};