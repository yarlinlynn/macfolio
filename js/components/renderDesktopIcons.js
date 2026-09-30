
import { locations } from "../constants/index.js";
import { locationState } from "../state/LocationState.js";
import { windowManager } from "../state/WindowManager.js";

export function renderDesktopIcons() {

    // Find the container where the desktop icons will be rendered.
    const container = document.querySelector(".desktopIcons"); 
    if (!container) return; // Stop if the desktop icon container doesn't exist.
 
    // Each project will be rendered as a folder icon. 
    const desktopItems = [ ...locations.work.children, locations.resume.children[0], locations.about];  

    // Render each project/folder as a desktop icon.
    container.innerHTML = desktopItems.map((item, index) => `
        <li data-index="${index}" data-type="${item.type || item.kind}"
            class="desktopIcon-item" style="${item.desktopIconPosition}"
        >
            <img src="${item.desktopIcon || item.icon}" alt="${item.name}" loading="lazy" />
            <span class="desktopIcon-name"> ${item.name}</span>
        </li>
    `).join("");

    // Find all of the desktop icons that were just rendered. 
    container.querySelectorAll(".desktopIcon-item").forEach(icon => {
        icon.addEventListener("click", () => {
            // Get the index stored on the clicked icon.
            const itemIndex = Number(icon.dataset.index); // convert the index back to a number.
            // Use the index to retrieve the original item from the desktopItems array.
            const item = desktopItems[itemIndex];
            // Stop if the clicked icon doesn't correspond to a valid item in the desktopItems array.
            if (!item) {
                console.log("Desktop item not found");
                return;
            }

            // If the clicked desktop item is a PDF file, open it using the dedicated Resume window.
            if (item.fileType === "pdf") {
                // Pass the Resume file object to the Resume window so it can use the item's pdfUrl to render the PDF.
                windowManager.open("resume", item);
                return; // Stop here so the Resume file isn't treated like a normal Finder folder.
            }

            // Check whether the clicked desktop item is the About Me folder.
            if (item.type === "about") {
                locationState.set(locations.about); // Set About Me as the current Finder location.
                // Open the Finder window and make the clicked About Me desktop icon the active sidebar item.
                windowManager.open("finder", { activeSidebar: icon });
                console.log("Profile clicked:", locationState.activeLocation.name);  // Confirm that the About Me location was opened.
                return; // Stop here so About Me doesn't fall through to the normal project-folder behavior below.
            }

            // If the item isn't Resume or About Me, treat it as a normal Work/project folder.
            // Set the clicked project as the current Finder location.
            locationState.set(item);
            // Open Finder and make the clicked desktop icon the active sidebar item.
            windowManager.open("finder", { activeSidebar: icon });
            console.log( "Finder clicked:", locationState.activeLocation.name ); // Confirm which Finder location was opened.
        });
    });
    return container;
}
