
import { windowManager } from "../state/WindowManager.js";

import { dateAndTime } from "../utils/dateAndTime.js";
import { toggleTheme } from "../utils/ theme.js";

import { techStack, socials, locations } from "../constants/index.js";

export function Header() {
    const width = window.innerWidth;
    const header = document.getElementById('top-bar');

    if (width < 900) {
        header.innerHTML = `
            <div class="status-bar">
                <img src="/assets/icons/bars.svg" alt="Cell Service" loading="lazy"/>
                <span>Cell C</span>
                <img src="/assets/icons/wifi.svg" alt="Wifi" loading="lazy"/>
            </div>

            <span class="time"></span>

            <div class="battery-life">
                95%
                <img src="/assets/icons/battery.svg" alt="Battery" loading="lazy"/>
            </div>
        `;
    } else {
        header.innerHTML = `
            <ul class="left-side-header">
                <li class="apple-icon">
                    <img src="/assets/icons/logo.svg" alt="Apple Logo" loading="lazy"/>
                </li>
                <li class="desktop">Yarlin's Desktop</li>
                <li>
                    <ul class="desktop-menu">
                        <li data-window="finder">Work</li>
                        <li  data-window="resume">Resume</li>
                        <li data-window="aboutme">Profile</li>
                        <li data-window="notes">FAQ</li>
                        <li class="skills-menu">Skills
                            <i class="ri-arrow-down-s-line"></i>
                            <ul class="skills-dropdown">
                                ${techStack.map( ({category, items}) => `
                                    <li class="skills-list-item">
                                        ${category}
                                        <i class="ri-arrow-right-s-line"></i>

                                        <ul class="submenu">
                                            ${items.map(item => `<li class="submenu-item">${item}</li>`).join("")}
                                        </ul>
                                    </li>
                                `).join("")}
                            </ul>
                        </li>
                        <li class="socials-menu">Socials
                            <i class="ri-arrow-down-s-line"></i>
                            <ul class="socials-dropdown">
                                ${socials.map( ({id, name, icon, url}) => `
                                    <a href="${url}" id="${name}" target="_blank">
                                        <li class="social-list-item" data-social="${id}">
                                            <span>${name}</span>
                                            <i class="${icon}"></i>
                                        </li>
                                    </a>
                                `).join("")}
                                
                            </ul>
                        </li>
                        <li data-window="gmail">Contact</li>
                    </ul>
                </li>
            </ul>
            <ul class="right-side-header">
                <li>
                    <ul class="desktop-icons">
                        <li>
                            <img class="battery" src="/assets/icons/battery.svg" alt="Battery" loading="lazy"/>
                        </li>
                        <li>
                            <img src="/assets/icons/wifi.svg" alt="Wifi" loading="lazy"/>
                        </li>
                        <li>
                            <img src="/assets/icons/search.svg" alt="Search" loading="lazy"/>
                        </li>
                        <li>
                            <button class="toggle-theme" aria-label="Toggle light and dark mode">
                                <img src="/assets/icons/mode.svg" alt="Light/Dark Toggle " loading="lazy"/>
                            </button>
                        </li>
                        <li>
                            <img class="siri" src="/assets/icons/siri.png" alt="Siri" loading="lazy"/>
                        </li>
                    </ul>
                </li>
                <li class="date-time">
                    <span class="day"></span>
                    <span class="time"></span>
                </li>
            </ul>
                    
        `;

        // skills menu dropdown
        const skillsMenu = document.querySelector(".skills-menu");

        skillsMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            skillsMenu.classList.toggle("active");
        });
        document.addEventListener("click", () => {
            skillsMenu.classList.remove("active");
        });

        // socials menu dropdown
        const socialsMenu = document.querySelector(".socials-menu");
        socialsMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            socialsMenu.classList.toggle("active");
        });
        document.addEventListener("click", () => {
            socialsMenu.classList.remove("active");
        });

        const desktopMenu = document.querySelector(".desktop-menu");
        desktopMenu.addEventListener("click", (e) => {
            const menuItem = e.target.closest("[data-window]");

            if (!menuItem) return;
            e.stopPropagation();
            const windowKey = menuItem.dataset.window;

            switch(windowKey) {
                case "finder":
                windowManager.open("finder", { activeSidebar: menuItem});
                break;

                case "resume":
                windowManager.open("resume", getResumeFile());
                break;

                case "aboutme":
                const aboutFolder = Object.values(locations).flatMap(location => location.children ?? []).find(item => item.name === "About me");
                windowManager.open("aboutme", aboutFolder);
                break;

                case "notes":
                windowManager.open("notes");
                break;

                case "gmail":
                windowManager.open("gmail");
                break;

                default:
                console.warn(`Unknown window: ${windowKey}`);
            }
        })

        // helper function to get resume to display pdf
        function getResumeFile() {
            return Object.values(locations).flatMap(location => location.children ?? []).find(item => item.fileType === "pdf");
        }

    }

    toggleTheme();
    dateAndTime();
    
}
