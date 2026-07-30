
import WindowWrapper from "../state/WindowWrapper.js";
import { LocationState } from "../state/LocationState.js";
import { windowManager } from "../state/WindowManager.js";
import { WindowControls } from "../components/windowControls.js";

import { locations } from "../constants/index.js";

import { renderFinderContent } from "../components/renderFinderContent.js";

export function Finder(parent = document.body) {
    const window = new WindowWrapper("finder");
    const windowElement = window.mount(parent);

    const locationState = new LocationState();

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

    renderFinderContent(content, locationState);

    window.enableDrag();
    return window;
}