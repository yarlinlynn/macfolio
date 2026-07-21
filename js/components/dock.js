
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
}