
import { socials } from "../constants/index.js";

let socialPreview = null;
let originalRect = null;

export function socialMediaElement() {
    const socialMediaEl = document.getElementById("socialsContainer");
    if (!socialMediaEl) return;


    // opens social media component
    socialMediaEl.addEventListener("click", openSocialPreview);

    // closes social media component
    document.addEventListener("click", (event) => {

        if (!socialPreview) return;

        const clickedPreview = event.target.closest(".social-preview");
        const clickedLauncher = event.target.closest("#socialsContainer");


        if (!clickedPreview && !clickedLauncher) {
            closeSocialPreview();
        }

    });
    
}

function openSocialPreview() {
    if(socialPreview) return;

    // blur bacground
    document.body.classList.add("blurred");

    const rect = document.getElementById("socialsContainer").getBoundingClientRect();
    originalRect = rect;

    socialPreview = document.createElement("div");
    socialPreview.className = "social-preview";
    socialPreview.innerHTML = `
        <h4>Socials</h4>
        <ul class="social-preview-grid">
            ${socials.map(social => `
                <li class="social-preview-item" id="${social.id}">
                    <a href="${social.url}" target="_blank" rel="noopener noreferrer">
                        <img src="${social.img}" alt="${social.name}" loading="lazy" />
                        <span>${social.name}</span>
                    </a>
                </li>
            `).join("")}
        </ul>
    `;

    // start from original location
    Object.assign(socialPreview.style, {
        position: "fixed",
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
    });

    document.body.appendChild(socialPreview);


    // animate outward
    requestAnimationFrame(() => {
        socialPreview.classList.add("expanded");
    });
}

function closeSocialPreview() {

    if (!socialPreview) return;

    document.body.classList.remove("blurred");

    socialPreview.remove("expanded");

    socialPreview = null;
    originalRect = null;
}
