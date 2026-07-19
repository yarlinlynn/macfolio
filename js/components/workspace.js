
import { draggableNote } from "./stickyNote.js";

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
                    <li class="app-item">
                        <ul class="social-links">
                            <li class="social-item">
                                <img src="/assets/apps/gmail.png" alt="Gmail" loading="lazy"/>
                                <span>Gmail</span>
                            </li>
                            <li class="social-item">
                                <img src="/assets/apps/github.png" alt="GitHub" loading="lazy"/>
                                <span>GitHub</span>
                            </li>
                            <li class="social-item">
                                <img src="/assets/apps/linkedin.png" alt="LinkedIn" loading="lazy"/>
                                <span>LinkedIn</span>
                            </li>

                            <li class="social-item">
                                <img src="/assets/apps/instagram.png" alt="Instagram" loading="lazy"/>
                                <span>Instagram</span>
                            </li>
                            <li class="social-item">
                                <img src="/assets/apps/twitter.png" alt="X" loading="lazy"/>
                                <span>X</span>
                            </li>
                            <li class="social-item">
                                <img src="/assets/apps/discord.png" alt="Discord" loading="lazy"/>
                                <span>Discord</span>
                            </li>

                            <li class="social-item">
                                <img src="/assets/apps/tiktok.png" alt="TikTok" loading="lazy"/>
                                <span>TikTok</span>
                            </li>
                            <li class="social-item">
                                <img src="/assets/apps/youtube.png" alt="YouTube" loading="lazy"/>
                                <span>YouTube</span>
                            </li>
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
                    <li class="app-item">
                        <img src="/assets/apps/notes.png" alt="Notes" loading="lazy"/>
                        <span>Notes</span>
                    </li>
                    <li class="app-item">
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
                <ul class="icons">
                    <li class="icon-item">
                        <!-- project 1 -->
                        <img src="/assets/docs/folder.png" alt="" loading="lazy"/>
                        <span>project 1</span>
                    </li>
                    <li class="icon-item">
                        <!-- project 2 -->
                        <img src="/assets/docs/folder.png" alt="" loading="lazy"/>
                        <span>project 2</span>
                    </li>
                    <li class="icon-item">
                        <!-- project 3 -->
                        <img src="/assets/docs/folder.png" alt="" loading="lazy"/>
                        <span>project 3</span>
                    </li>

                    <li class="icon-item">
                        <!-- resume -->
                        <img src="/assets/docs/pdf.png" alt="" loading="lazy"/>
                        <span>resume.pdf</span>
                    </li>

                    <li class="icon-item">
                        <!-- about me -->
                        <img src="/assets/docs/folder.png" alt="" loading="lazy"/>
                        <span>about me</span>
                    </li>

                    <li class="icon-item">
                        <!-- project info -->
                        <img src="/assets/apps/mac.png" alt="Project Info" loading="lazy"/>
                        <span></span>
                    </li>
                </ul>
            </section>
        `;
    }

    draggableNote();
}

