
import { dateAndTime } from "../utils/dateAndTime.js";
import { toggleTheme } from "../utils/ theme.js";

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
            <ul>
                <li class="apple-icon">
                    <img src="/assets/icons/logo.svg" alt="Apple Logo" loading="lazy"/>
                </li>
                <li class="desktop">Yarlin's Desktop</li>
                <li>
                    <ul class="desktop-socials">
                        <li>
                            Skills
                            <ul class="skills-list">
                                <!-- add technologies here -->
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            Contact
                            <ul class="contact-list">
                                <!-- add socials here -->
                                <li></li>
                            </ul>
                        </li>
                        <li>Work</li>
                    </ul>
                </li>
            </ul>
            <ul>
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
}