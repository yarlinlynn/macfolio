
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

import { socials } from "../constants/index.js";

export function SocialLinks(parent = document.body) {
    const window = new WindowWrapper("socialmedia");
    const windowElement = window.mount(parent); 

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    const controls = WindowControls("socialmedia");
    header.prepend(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content social_media-content";
    content.innerHTML = `
        <h3>Let's connect on social media</h3>
        <p>
            Feel free to contact me on any of the below social media platforms or check out my GitHub
        </p>

        <ul class="socials-list">
            ${socials.filter(item => item.id !== "gmail").map(item => `
                <li class="cursor-pointer">
                    <a href="${item.url}" id="${item.id}" target="_blank">
                        <i class="${item.icon}"></i>
                        <span>${item.name}</span>
                    </a>
                </li>  
            `).join("")}
        </ul>
    `;

    windowElement.append(
        header,
        content
    );
    
    window.enableDrag();    
    return window;
}

