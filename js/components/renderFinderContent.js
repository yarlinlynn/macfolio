
import { locations } from "../constants/index.js";
import { windowManager } from "../state/WindowManager.js";

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

// add click events
function attachClickEvents(container, locationState) {

    // open sidebar
    container.querySelectorAll("[data-type='location']").forEach(sidebarItem => {
        sidebarItem.addEventListener("click" , () => {
            const location = Object.values(locations).find(
                location => location.id === Number(sidebarItem.dataset.id)
            );

            locationState.set(location);
            renderFinderContent(container, locationState);
        })
    })

    // open projects
    container.querySelectorAll("[data-type='project']").forEach(project => {
        project.addEventListener("click", () => {

            const projectItem = locations.work.children.find(
                p => p.id === Number(project.dataset.id)
            );

            if (!projectItem) return;
            locationState.set(projectItem);
            renderFinderContent(container, locationState);
        });

    });

    // change folder content
    container.querySelectorAll(".folder-item").forEach(folderElement => {

        folderElement.addEventListener("click", () => {

            // const folder = locationState.activeLocation.children.find(
            //     child => child.id === Number(folderElement.dataset.id)
            // );
            const folder = getFinderChildren(locationState.activeLocation).find(
                child => child.id === Number(folderElement.dataset.id)
            )

            if (!folder) return;
            openItem(folder, container, locationState);

        });

    });
}

// open different content from different doc files
function openItem(item, container, locationState) {

    // about me folder doesn't redner inner folder files
    if (item.name === "About me" && item.children) {
        return;
    }

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

// don't render about me folder files
// function getFinderChildren(location) {
//     return (location.children || []).filter(
//         item => !item.finderHidden
//     );
// }

function getFinderChildren(location) {
    return location.children || [];
}