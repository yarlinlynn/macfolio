
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

// renders image window component
export function Images(parent=document.body) {
    const window = new WindowWrapper("imgfile");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <div class="image-window-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen icon" aria-hidden="true"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus icon" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon" aria-hidden="true"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
        </div>
    `;

    header.prepend(WindowControls("imgfile"));

    const content = document.createElement("div");
    content.className="image-content";
    window.renderContent = function(item){
        content.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" />
        `;
    };

    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}

// image content, renders actual image
export function ImagePreview(item) {
    return `
        <div class="image-preview">
            <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" />
        </div>
    `
}