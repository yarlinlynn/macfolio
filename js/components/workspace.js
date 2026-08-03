
import { socials } from "../constants/index.js";

import { windowManager } from "../state/WindowManager.js";

import { draggableNote } from "./stickyNote.js";
import { socialMediaElement } from "./socials.js";

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
                    <p class="sticker-header">To do list</p>
                    <ul class="sticky-list">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/></svg>
                            <span>Update Resume</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/></svg>
                            <span>Commit codewars once a day</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/></svg>
                            <span>Create a mac os/ios inspired portfolio</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
                            <span>Learn GSAP</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
                            <span>Create 2-3 personal projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
                            <span>Create a windows xp inspired portfolio</span>
                        </li>
                    </ul>
                </div>

                <ul class="desktop-icons"></ul>
                
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


    // enable drag to desktop icons
    window.Draggable.create(".desktopIcon-item",{
        bounds:"#workspace",
        inertia:false
    });

}

