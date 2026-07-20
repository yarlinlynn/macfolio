
import { dockAnimation } from "../utils/dockAnimation.js";
import { dockTooltip } from "../utils/tooltip.js";

export function Dock() {
    const dock = document.getElementById('dock');

    dock.innerHTML = `
        <ul class="dock-container">
            <li class="dock-item" id="phone">
                <img src="/assets/apps/phone.png" alt="Phone" loading="lazy"/>
            </li>

            <!-- desktop icon -->
            <li class="dock-item" id="finder">
                <img src="/assets/apps/finder.png" alt="Finder" loading="lazy"/>
            </li>
            <li class="dock-item" id="launchpad">
                <img src="/assets/apps/launchpad.png" alt="Launchpad" loading="lazy"/>
            </li>
            <!-- desktop icon -->

            <li class="dock-item" id="safri">
                <img src="/assets/apps/safri.png" alt="Safri" loading="lazy"/>
            </li>
            <li class="dock-item" id="messages">
                <img src="/assets/apps/messages.png" alt="Messages" loading="lazy"/>
            </li>

            <!-- desktop icon -->
            <li class="dock-item" id="maps">
                <img src="/assets/apps/maps.png" alt="Maps" loading="lazy"/>
            </li>
            <li class="dock-item" id="photos">
                <img src="/assets/apps/photos.png" alt="Photos" loading="lazy"/>
            </li>
            <li class="dock-item" id="player">
                <img src="/assets/apps/player.png" alt="Player" loading="lazy"/>
            </li>
            <li class="dock-item" id="gmail">
                <img src="/assets/apps/gmail.png" alt="Gmail" loading="lazy"/>
            </li>
            <li class="dock-item" id="facetime">
                <img src="/assets/apps/facetime.png" alt="FaceTime" loading="lazy"/>
            </li>
            <li class="dock-item" id="calendar">
                <img src="/assets/apps/calendar-dektop.png" alt="Calendar" loading="lazy"/>
            </li>
            <li class="dock-item" id="reminders">
                <img src="/assets/apps/reminders.png" alt="Reminders" loading="lazy"/>
            </li>
            <li class="dock-item" id="preview">
                <img src="/assets/apps/preview.png" alt="Preview" loading="lazy"/>
            </li>
            <li class="dock-item" id="notes">
                <img src="/assets/apps/notes.png" alt="Notes" loading="lazy"/>
            </li>
            <li class="dock-item" id="appstore">
                <img src="/assets/apps/appstore.png" alt="App Store" loading="lazy"/>
            </li>
            <li class="dock-item" id="settings">
                <img src="/assets/apps/settings.png" alt="Settings" loading="lazy"/>
            </li>
            <li class="dock-item" id="siri">
                <img src="/assets/apps/siri.png" alt="Siri" loading="lazy"/>
            </li>
            <!-- desktop icon -->

            <li class="dock-item" id="spotify">
                <img src="/assets/apps/spotify.png" alt="Spotify" loading="lazy"/>
            </li>

            <!-- desktop icon -->
            <li class="dock-item" id="trash">
                <img src="/assets/apps/trash-full.png" alt="Trash" loading="lazy"/>
            </li>
            <!-- desktop icon -->
        </ul/>
    `;

    const dockContainer = document.querySelector(".dock-container");
    dockAnimation(dockContainer);
    dockTooltip(dockContainer);
}