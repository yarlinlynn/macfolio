
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Gmail(parent = document.body) {
    const window = new WindowWrapper("gmail");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    const controls = WindowControls("gmail");
    header.append(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `

        <p>Add email template here...</p>

    `;
    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}