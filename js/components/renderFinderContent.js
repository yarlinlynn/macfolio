
import { locations } from "../constants/index.js";
import { windowManager } from "../state/WindowManager.js";

/** 
    Renders the desktop Finder interface
    The Finder is data-driven: 
        - the locations object provides the folders/files to display
        - locationState keeps track of which location is currently active

    Whenever the location changes, the Finder is re-rendered so  the UI always reflects the current state
*/
export function renderFinderContent(container, locationState) {
    container.innerHTML = `
        <aside class="sidebar">
            <h3>Favourites</h3>

            <ul class="sidebar-list">
                ${Object.values(locations).map(location => `
                    <li
                        class="${location.id === locationState.activeLocation.id ? "active" : ""}"
                        data-id="${location.id}"
                        data-type="location"
                    >
                        <img src="${location.icon}" alt="${location.name}" loading="lazy"/>
                        <span>${location.name}</span>
                    </li>     
                `).join("")}
            </ul>

            <h3>Projects</h3>

            <ul class="projects-list">
                ${locations.work.children.map(project => `
                    <li data-type="project"
                        data-id="${project.id}"
                        class="${project.id === locationState.activeLocation.id ? "active" : ""}"
                    >
                        <img src="${project.icon}" alt="${project.name}">
                        <span>${project.name}</span>
                    </li>    
                `).join("")}
            </ul>
        </aside>

        <section class="finder-content">
            ${
                locationState.activeLocation.children ? `
                    <ul class="folder-content">
                        ${getFinderChildren(locationState.activeLocation).map( item => `
                            <li class="folder-item" data-id="${item.id}" style="${item.position ?? ""}">
                                <img src="${item.icon}" alt="${item.name}" loading="lazy" />
                                <p>${item.name}</p>
                            </li>
                        `).join("")}
                    </ul>
                ` : ` <p class="finder-empty">No files found.</p>`
            }
        </section>
    `;

    attachClickEvents(container, locationState)
};

/** 
    Adds interaction handlers to Finder items. 
    Finder navigation is state-driven: 
        1. Find the selected item in the data 
        2. Update locationState 
        3. Re-render the Finder 
*/
function attachClickEvents(container, locationState) {

    // Handle clicks on the main Finder sidebar location
    container.querySelectorAll("[data-type='location']").forEach(sidebarItem => {
        sidebarItem.addEventListener("click" , () => {
            // Find the location represented by the clicked DOM element
            const location = Object.values(locations).find(
                location => location.id === Number(sidebarItem.dataset.id)
            );

            locationState.set(location); // Update the active Finder location
            renderFinderContent(container, locationState); // Re-render the interface using the new state
        })
    })

    // Handle direct clicks on projects in the sidebar
    container.querySelectorAll("[data-type='project']").forEach(project => {
        project.addEventListener("click", () => {
            // Find the project represented by the clicked element
            const projectItem = locations.work.children.find(
                p => p.id === Number(project.dataset.id) 
            );

            if (!projectItem) return; // Stop if the project could not be found
            locationState.set(projectItem); // Set the selected project as the active location
            renderFinderContent(container, locationState); // Re-render the Finder with the selected project
        });

    });

    // Handle files and folders inside the current Finder location
    container.querySelectorAll(".folder-item").forEach(folderElement => {
        folderElement.addEventListener("click", () => {
            // Find the data object represented by the clicked item
            const folder = getFinderChildren(locationState.activeLocation).find(
                child => child.id === Number(folderElement.dataset.id)
            )

            if (!folder) return;
            /* 
                Route the selected item to the appropriate action: 
                 - folder navigation, PDF viewer, image viewer, text viewer, or external link. 
            */
            openItem(folder, container, locationState);
        });
    });
}

/** 
    Determines what should happen when a Finder item is opened. 
    Folders update the Finder state, while files are routed to their appropriate application through WindowManager or opened externally when necessary.
*/
function openItem(item, container, locationState) {

    // open folder
    if (item.kind === "folder") {
        locationState.set(item);
        renderFinderContent(container, locationState);

        return;
    }

    // open resume
    if (item.fileType === "pdf") {
        windowManager.open("resume", item);
        return;
    }

    // open external links
    if (item.fileType === "url") {
        if (item.href) {
            window.open(item.href, "_blank");
        }
        return;
    }

    // open image
    if (item.fileType === "img") {
        windowManager.open("imgfile", item);
        return;
    }

    // open text file
    if (item.fileType === "txt") {
        windowManager.open("txtfile", item);
    }
}

// Returns the children of a Finder location eg work = WORK_FOLDER = children: [ ... ]
function getFinderChildren(location) {
    return location.children || [];
}