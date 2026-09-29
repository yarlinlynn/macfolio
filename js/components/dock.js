
import { windowManager } from "../state/WindowManager.js"; // Window manager controls opening, focusing, and managing application windows.
import { windowState } from "../state/WindowState.js"; // Contains current state of all windows, whether a window is currently open.
import { locationState } from "../state/LocationState.js"; // Stores the currently selected Finder location.

import { dockIcons, locations } from "../constants/index.js"; // Dynamic data for each Dock icon.
import { dockAnimation } from "../utils/dockAnimation.js"; // Handles the animation behavior of the Dock.
import { dockTooltip } from "../utils/tooltip.js"; // Handles the tooltip that appears when hovering over Dock icons.

export function Dock() {
    // Find the main Dock element in the HTML. 
    // Everything we render below will be placed inside this element.
    const dock = document.getElementById('dock');

    // Build the Dock HTML dynamically from the dockIcons data. 
    // Instead of manually creating every Dock icon in HTML, we loop through dockIcons and generate the appropriate 
    // <li> and <img> elements for each icon.
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

    // Find the <ul> containing all of the Dock icons. 
    // We pass this element to the animation and tooltip utilities so they can add their behavior to the entire Dock.
    const dockContainer = document.querySelector(".dock-container");
    dockAnimation(dockContainer); // Enable the Dock's hover/magnification animation.
    dockTooltip(dockContainer); // Enable the tooltip that displays an icon's name on hover.

    // Add click behavior to Dock icons that are allowed to open windows. 
    // Each icon in dockIcons has a "canOpen" property. 
    // If canOpen is false, we skip the icon and don't attach a window-opening click handler.
    dockIcons.forEach(icon => {
        if (!icon.canOpen) return;
        const dockItem = document.getElementById(icon.id);

        dockItem.addEventListener("click", () => {

            // Finder always opens at the Work location
            // when its Dock icon is clicked.
            if (icon.id === "finder") {
                locationState.set(locations.work); 
                console.log("Finder clicked:", locationState.activeLocation.name); 
                windowManager.open("finder", { activeSidebar: dockItem });
                return;
            }

            // Trash is a special case. 
            // Trash does not have its own application window.
            //  Instead, clicking Trash should open Finder and make the Trash location the active Finder location.
            if (icon.id === "trash") {
                locationState.set(locations.trash); // Tell the location state that Trash is now the currently selected Finder location.
                console.log("Trash clicked:", locationState.activeLocation.name); // Open Finder and pass the clicked Dock element as activeSidebar.
                windowManager.open("finder", { activeSidebar: dockItem });
                return;
            }

            // For normal applications, get the window's current state.
            // icon.id is used as the key because the Dock icon and the application window share the same id.
            const state = windowState.windows[icon.id];
            if (!state) return; // If there is no window state for this icon, there is nothing for the Dock to open or focus.

            // If the application window is not currently open, open it.
            // If it is already open, focus it instead.
            // This prevents multiple copies of the same window from being opened when the Dock icon is clicked.
            !state.isOpen ? windowManager.open(icon.id) : windowManager.focus(icon.id);
        });
    });
}