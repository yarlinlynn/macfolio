
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Text(parent=document.body) {
    const window = new WindowWrapper("txtfile");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";

    header.prepend(WindowControls("txtfile"));

    // CONTENT
    const content = document.createElement("div");
    content.className="text-content";
    window.renderContent = function(item) {
        content.innerHTML = `
            ${item.imageUrl ? `
                <img src="${item.imageUrl}" alt="${item.name}" loading="lazy"/>
            ` : ""}

            <div class="text">
                ${(item.description ?? [])
                    .map(text => `<p>${text}</p>`)
                    .join("")}
            </div>
        `;
    };

    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}

// render text content
export function TextPreview(item) {
    return `
        <div  class="text-preview">
            ${item.imageUrl ? `<img class="text-preview-image" src="${item.imageUrl}" alt="${item.name}" loading="lazy" />` : ""}

            <div class="text-content">
                ${item.description.map(text => `<p>${text}</p>`).join("")}
            </div>
        </div>
    `;
}