
import { dockAnimation } from "../utils/dockAnimation.js";
import { dockTooltip } from "../utils/tooltip.js";

const dock = [
    {
        id: "phone",
        name: "Phone",
        icon: "/assets/apps/phone.png",    
        canOpen: true,
    },
    {
        id: "finder",
        name: "Finder",
        icon: "/assets/apps/finder.png",    
        canOpen: true,
    },
    {
        id: "launchpad",
        name: "Launchpad",
        icon: "/assets/apps/launchpad.png",    
        canOpen: false,
    },
    {
        id: "safri",
        name: "Safri",
        icon: "/assets/apps/safri.png",    
        canOpen: false,
    },
    {
        id: "messages",
        name: "Messages",
        icon: "/assets/apps/messages.png",    
        canOpen: false,
    },
    {
        id: "maps",
        name: "Maps",
        icon: "/assets/apps/maps.png",    
        canOpen: false,
    },
    {
        id: "photos",
        name: "Photos",
        icon: "/assets/apps/photos.png",    
        canOpen: false,
    },
    {
        id: "player",
        name: "Player",
        icon: "/assets/apps/player.png",    
        canOpen: false,
    },
    {
        id: "gmail",
        name: "Gmail",
        icon: "/assets/apps/gmail.png",    
        canOpen: true,
    },
    {
        id: "facetime",
        name: "FaceTime",
        icon: "/assets/apps/facetime.png",    
        canOpen: false,
    },
    {
        id: "calendar",
        name: "Calendar",
        icon: "/assets/apps/calendar-dektop.png",    
        canOpen: false,
    },
    {
        id: "reminders",
        name: "Reminders",
        icon: "/assets/apps/reminders.png",    
        canOpen: false,
    },
    {
        id: "preview",
        name: "Preview",
        icon: "/assets/apps/preview.png",    
        canOpen: false,
    },
    {
        id: "notes",
        name: "Notes",
        icon: "/assets/apps/notes.png",    
        canOpen: true,
    },
    {
        id: "appstore",
        name: "App Store",
        icon: "/assets/apps/appstore.png",    
        canOpen: false,
    },
    {
        id: "settings",
        name: "Settings",
        icon: "/assets/apps/settings.png",    
        canOpen: false,
    },
    {
        id: "siri",
        name: "Siri",
        icon: "/assets/apps/siri.png",    
        canOpen: false,
    },
    {
        id: "spotify",
        name: "Spotify",
        icon: "/assets/apps/spotify.png",    
        canOpen: true,
    },
    {
        id: "trash",
        name: "Trash",
        icon: "/assets/apps/trash-full.png",    
        canOpen: false,
    },
];

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