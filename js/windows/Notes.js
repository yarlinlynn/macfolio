
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
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen icon" aria-hidden="true"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon" aria-hidden="true"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search icon" aria-hidden="true" style="touch-action: none;"><path d="m21 21-4.34-4.34" style="touch-action: none;"></path><circle cx="11" cy="11" r="8" style="touch-action: none;"></circle></svg>
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