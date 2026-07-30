
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
                locationState.activeLocation.children
                ? `
                    <ul class="folder-content">
                        ${locationState.activeLocation.children.map(item => `
                            <li class="folder-item" data-id="${item.id}" style="${item.position}">
                                <img src="${item.icon}" alt="${item.name}">
                                <p>${item.name}</p>
                            </li>
                        `).join("")}
                    </ul>
                `
                : `
                    <p class="finder-empty">
                        No files found.
                    </p>
                `
            }
        </section>
    `;

    attachClickEvents(container, locationState)
};

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

        folderElement.addEventListener("dblclick", () => {

            const folder = locationState.activeLocation.children.find(
                child => child.id === Number(folderElement.dataset.id)
            );

            openItem(folder, container, locationState);

        });

    });
}

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