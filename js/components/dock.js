
import { windowManager } from "../state/WindowManager.js";
import { windowState } from "../state/WindowState.js";

import { dockIcons } from "../constants/index.js";
import { dockAnimation } from "../utils/dockAnimation.js";
import { dockTooltip } from "../utils/tooltip.js";

export function Dock() {
    const dock = document.getElementById('dock');

    dock.innerHTML = `
        <ul class="dock-container">
            ${dockIcons.map( ({id, name, icon, url}) => `
                <li class="dock-item" id="${id}">
                    ${url ?
                        `<a href="${url}" target="_blank">
                            <img src="${icon}" alt="${name}" loading="lazy"/>
                        </a>`
                        :
                        `<img src="${icon}" alt="${name}" loading="lazy"/>`
                    }
                </li>
            `).join("")}
        </ul/>
    `;

    const dockContainer = document.querySelector(".dock-container");
    dockAnimation(dockContainer);
    dockTooltip(dockContainer);

    // click event for each icon with the property canOpen, opening window
    dockIcons.forEach(icon => {
        if(!icon.canOpen) return;

        document.getElementById(icon.id).addEventListener("click", () => {
            const state = windowState.windows[icon.id];

            if (!state) return;
            !state.isOpen ? windowManager.open(icon.id) : windowManager.focus(icon.id);
        })
    })
}