
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Videos(parent=document.body, key = "videofile") {
    const window = new WindowWrapper(key);
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
    header.prepend(WindowControls(key));

    // CONTENT
    const content = document.createElement("div");
    content.className = "video-content";

    window.renderContent = function (item) {

        // Remove previous variant classes
        windowElement.classList.remove("desktop_demo", "mobile_demo");
        if (item.variant === "mobile") {
            windowElement.classList.add("mobile_demo");
        } else {
            windowElement.classList.add("desktop_demo");
        }

        content.innerHTML = `
            <video 
                src="${item.videoUrl}" 
                id="${item.name}"
                autoplay
                loop
                muted
                playsinline
                preload="metadata"
                ${item.poster ? `poster="${item.poster}"` : ""}
            >
                Your browser does not support the video tag.
            </video>
        `;
    }

    windowElement.append(header, content);
    window.enableDrag();
    return window;
}

// Mobile / inline version (used by Files app)
export function VideoPreview(item) {
    const videoClass = item.variant === "mobile" ? "mobile_demo" : "desktop_demo";

    return `
        <div class="video-preview">
            <div class="video-wrapper ${videoClass}">
                <video 
                    src="${item.videoUrl}" 
                    autoplay
                    loop
                    muted
                    playsinline
                    preload="metadata"
                    ${item.poster ? `poster="${item.poster}"` : ""}
                ></video>
            </div>
        </div>
    `;
}