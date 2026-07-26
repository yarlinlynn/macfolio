
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Files(parent = document.body) {
    const window = new WindowWrapper("files");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    const controls = WindowControls("files");
    header.append(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `
        <p>Files gallery items shown here ..</p>
    `;

    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}