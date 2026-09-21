
import WindowWrapper from "../state/WindowWrapper.js";
import { locationState } from "../state/LocationState.js";
import { windowManager } from "../state/WindowManager.js";
import { WindowControls } from "../components/windowControls.js";

import { locations } from "../constants/index.js";

import { renderFinderContent } from "../components/renderFinderContent.js";

export function Finder(parent = document.body) {
    const window = new WindowWrapper("finder");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <i class="ri-search-line"></i>
    `;

    header.prepend(WindowControls("finder"));

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content finder-content";

    windowElement.append(
        header,
        content
    );

    // Render Finder content whenever the window is opened/updated
    window.renderContent = function() {
        renderFinderContent(content, locationState);
    };

    // Initial render
    window.renderContent();

    window.enableDrag();
    return window;
}