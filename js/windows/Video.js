
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Videos(parent=document.body, key = "videofile") {
    const window = new WindowWrapper(key);
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.prepend(WindowControls(key));

    // We’ll inject the GitHub / Live links dynamically in renderContent
    const linksContainer = document.createElement("div");
    linksContainer.className = "window-header-links";   // style this later
    header.append(linksContainer);

    const content = document.createElement("div");
    content.className = "video-content";
    window.renderContent = function(item) {

        // Clear previous links
        linksContainer.innerHTML = "";
        // Add GitHub + Live site icons if the item has the links
        if (item.githubLink || item.liveWebsite) {
            linksContainer.innerHTML = `
                ${item.liveWebsite ? `
                    <a href="${item.liveWebsite}" target="_blank" rel="noopener" title="Live Website">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z">
                            </path>
                        </svg>
                    </a>
                ` : ""}
                
                ${item.githubLink ? `
                    <a href="${item.githubLink}" target="_blank" rel="noopener" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z">
                            </path>
                        </svg>
                    </a>
                ` : ""}
            `;
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
    };

    windowElement.append(header, content);
    window.enableDrag();
    return window;
}

// Mobile / inline version (used by Files app)
export function VideoPreview(item) {
    return `
        <div class="video-preview">
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
    `;
}