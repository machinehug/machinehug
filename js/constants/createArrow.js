export default function createArrow(link) {

    if (!link) {
        link = "";
    };
    
    return `
    <div class="arrow-wrapper">
        <a href="${link}">
            <div class="arrow-inner-wrapper">
                <div class="rectangle"></div>
                <div class="arrow"></div>
            </div>
        </a>
    </div>`;
};