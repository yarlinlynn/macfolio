
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";
import { windowManager } from "../state/WindowManager.js";

import { locations } from "../constants/index.js";

import { renderFilesContent } from "../components/renderFilesContent.js";

export function Files(parent = document.body) {
    const window = new WindowWrapper("files");
    const windowElement = window.mount(parent);

    const navigation = [
        {
            name: "Portfolio",
            data: {
                children: Object.values(locations)
            }
        }
    ];

    // HEADER
    const header = document.createElement("div");
    header.className = "files-header";
    header.innerHTML = `

        <h2>Portfolio </h2>
    `;
    header.prepend(WindowControls("files"));

    // CONTENT
    const content = document.createElement("div");
    content.className = "files-content";

    windowElement.append(
        header,
        content
    );

    renderFilesContent({
        header,
        container: content,
        navigation
    });

    // window.enableDrag();
    return window;
}