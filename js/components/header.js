
import { dateAndTime } from "../utils/dateAndTime.js";
import { toggleTheme } from "../utils/ theme.js";

import { techStack, socials } from "../constants/index.js";

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
                        <li class="openFinder">Work</li>
                        <li class="openResume">Resume</li>
                        <li class="openResume">Profile</li>
                        <li class="openInfo">Info</li>
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
                                    <li>
                                `).join("")}
                            </ul>
                        </li>
                        <li class="socials-menu">Socials
                            <i class="ri-arrow-down-s-line"></i>
                            <ul class="socials-dropdown"></ul>
                        </li>
                        <li class="openEmail">Contact</li>
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
    }

    toggleTheme();
    dateAndTime();

    // skills menu dropdown
    const skillsMenu = document.querySelector(".skills-menu");

    skillsMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        skillsMenu.classList.toggle("active");
    });
    document.addEventListener("click", () => {
        skillsMenu.classList.remove("active");
    });
}