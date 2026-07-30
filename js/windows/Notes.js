
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";
import { faq } from "../constants/index.js";

import { renderFAQ } from "../components/renderFAQ.js";
import { initAccordion } from "../utils/accordion.js";

export function Notes(parent = document.body) {
    const window = new WindowWrapper("notes");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <div class="header-icons">
            <i class="ri-side-bar-line"></i>
            <i class="ri-function-line"></i>
            <i class="ri-delete-bin-line"></i>
        </div>
        <div class="header-icons">
            <i class="ri-font-size"></i>
            <i class="ri-list-radio"></i>
            <i class="ri-table-3"></i>
            <i class="ri-voiceprint-line"></i>
            <i class="ri-multi-image-fill"></i>
        </div>
        <div class="header-icons">
            <i class="ri-arrow-up-long-line"></i>
            <i class="ri-search-line"></i>
        </div>
    `;
    const controls = WindowControls("notes");
    header.prepend(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `
        <p class="welcome-text">
            Welcome to questions and answers where you can find out more about me. Enjoy!
        <p>

        ${renderFAQ(faq)}
    `;

    windowElement.append(
        header,
        content
    );

    window.enableDrag();

    // render accordion logic
    initAccordion(content);

    return window;
}