
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Finder(parent = document.body) {
    const window = new WindowWrapper("finder");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    const controls = WindowControls("finder");
    header.append(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `

        <div class="sidebar">
            <ul class=""sidebar-icons></ul>
        </div>
        <div class="finder-content">
            <p>Finder items goes here ...</p>
        </div>

    `;
    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}