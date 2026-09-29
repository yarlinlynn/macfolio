
import { locations } from "../constants/index.js";
import { locationState } from "../state/LocationState.js";
import { windowManager } from "../state/WindowManager.js";

export function renderDesktopIcons() {

    // Find the container where the desktop icons will be rendered.
    const container = document.querySelector(".desktopIcons"); 
    if (!container) return; // Stop if the desktop icon container doesn't exist.
 
    // Each project will be rendered as a folder icon. 
    const desktopItems = [ ...locations.work.children ];  
    // const desktopItems = locations.work.children;
    // const desktopItems = [ ...locations.work.children, ...locations.resume.children ];

    // Render each project/folder as a desktop icon.
    container.innerHTML = desktopItems.map(item => `
        <li data-id="${item.id}" class=" desktopIcon-item ${item.desktopIconPosition || ""}">
            <img src="${item.icon}"  alt="${item.name}" loading="lazy" />
            <span class="desktopIcon-name"> ${item.name}</span>
        </li>
    `).join("");

    // Find all of the desktop icons that were just rendered. 
    container.querySelectorAll(".desktopIcon-item").forEach(icon => {
        icon.addEventListener("click", () => {
            // Get the item's id from the clicked desktop icon.
            const itemId = Number(icon.dataset.id); // dataset values are strings, so convert the id back to a number.
            const item = desktopItems.find(item => item.id === itemId); // Find the original item from our desktop data.
            if (!item) return; // Stop if the item cannot be found.
            
            const projectId = Number(icon.dataset.id); 
            const project = desktopItems.find(item => item.id === projectId); // Find the original project object from the Work location.
            if (!project) return; // Stop if the project cannot be found. 
            locationState.set(project); // Set the selected project as the current Finder location.
            windowManager.open("finder", { activeSidebar: icon });
            console.log("Finder clicked:", locationState.activeLocation.name);

        });
    });
    return container;
}
