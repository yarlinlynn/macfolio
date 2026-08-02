
import { socials } from "../constants/index.js";

import { windowManager } from "../state/WindowManager.js";

import { draggableNote } from "./stickyNote.js";
import { socialMediaElement } from "./socials.js";

import { WORK_FOLDER, ABOUT_FOLDER, RESUME_FOLDER } from "../constants/index.js";

const desktopFolders = [
    WORK_FOLDER,
    ABOUT_FOLDER,
    RESUME_FOLDER
];

const desktopIcons = desktopFolders.flatMap(folder =>
    folder.children.map(child => ({
        ...child,
        parent: folder.type
    }))
);

export function Workspace() {
    const width = window.innerWidth;
    const workspace = document.getElementById('workspace');

    if (width < 899) {
        workspace.innerHTML = `
            <section id="mobile-apps">
                <ul class="apps">
                    <li class="app-item">
                        <img src="/assets/apps/calendar-mobile.png" alt="Calendar" loading="lazy"/>
                        <span>Calendar</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/google-photos.png" alt="Google Photos" loading="lazy"/>
                        <span>Google Photos</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/photos.png" alt="Photos" loading="lazy"/>
                        <span>Photos</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/camera.png" alt="Camera" loading="lazy"/>
                        <span>Camera</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/facetime.png" alt="FaceTime" loading="lazy"/>
                        <span>FaceTime</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/clock.png" alt="Clock" loading="lazy"/>
                        <span>Clock</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/weather.png" alt="Weather" loading="lazy"/>
                        <span>Weather</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/settings.png" alt="Settings" loading="lazy"/>
                        <span>Settings</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/appstore.png" alt="App Store" loading="lazy"/>
                        <span>App Store</span>
                    </li>
                    <li class="app-item" id="socialsContainer">
                        <ul class="social-links">
                            ${socials.map(social => `
                                <li class="social-item" ${social.id}>
                                    <img src="${social.img}" alt="${social.name}" loading="lazy"/>
                                </li>
                            `).join("")}
                        </ul>
                        <span>Socials</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/translate.png" alt="Translate" loading="lazy"/>
                        <span>Translate</span>
                    </li>
                    <li class="app-item">
                        <img src="/assets/apps/calculator.png" alt="Calculator" loading="lazy"/>
                        <span>Calculator</span>
                    </li>
                    <li class="app-item" id="notes-mobile">
                        <img src="/assets/apps/notes.png" alt="Notes" loading="lazy"/>
                        <span>Notes</span>
                    </li>
                    <li class="app-item" id="files-mobile">
                        <img src="/assets/apps/files.png" alt="Finder" loading="lazy"/>
                        <span>Finder</span>
                    </li>
                </ul>
                <div id="pages">
                    <i class="ri-circle-fill page-icon"></i>
                    <i class="ri-circle-fill page-icon"></i>
                </div>
            </section>
        `;
    } else {
        workspace.innerHTML = `
            <section id="desktop-apps">
                <div class="sticky-note" id="note">
                    <textarea placeholder="To do list"></textarea>
                </div>

                <ul class="desktop-icons">
                    ${desktopIcons.map(icon => `
                        <li class="desktopIcon-item" data-parent="${icon.parent}" data-kind="${icon.kind}" data-id="${icon.id}" style="${icon.windowPosition ?? ""}">
                            <img src="${icon.icon}" alt="${icon.name}" loading="lazy"/>
                            <span>${icon.name}</span>
                        </li>    
                    `).join("")}
                </ul>
                
            </section>
        `;
    }

    draggableNote();
    socialMediaElement();

    const notesMobileWindow = document.getElementById("notes-mobile");
    if(notesMobileWindow) {
            notesMobileWindow.addEventListener("click", () => {
            windowManager.open("notes");
        });
    }

    const filesWindow = document.getElementById("files-mobile");
    if(filesWindow) {
            filesWindow.addEventListener("click", () => {
            windowManager.open("files");
        });
    }

    // click events for desktop icons to open folders
    desktopIcons.forEach(item => {
        const element = document.querySelector(
            `[data-id="${item.id}"]`
        );

        element.addEventListener("click",()=>{
            if(item.kind === "folder"){
                windowManager.open("files",item);
            }
            if(item.fileType === "pdf"){
                window.open(item.pdfUrl);
            }
        });
    });


    // enable drag to desktop icons
    window.Draggable.create(".desktopIcon-item",{
        bounds:"#workspace",
        inertia:false
    });

}

