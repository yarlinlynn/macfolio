
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
        // height: `${rect.height}px`,
        transform: "none"
    });

    document.body.appendChild(socialPreview);

    const mobile = window.matchMedia("(max-width: 599px)").matches;
    requestAnimationFrame( () => {
        if(mobile) {
            gsap.to(socialPreview, {
                left: "50%",
                top: "40%",
                xPercent: -50,
                yPercent: -50,
                width: "80vw",
                // height: "45dvh",
                duration: 0.35,
                ease: "power3.out"
            })
        } else {
            gsap.to(socialPreview, {
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
                width: "50vw",
                // height: "520px",
                duration: 0.35,
                ease: "power3.out"
            })
        }
    })
}

function closeSocialPreview() {

    if (!socialPreview) return;

    document.body.classList.remove("blurred");

    gsap.to(socialPreview, {

        left: originalRect.left,
        top: originalRect.top,
        width: originalRect.width,
        height: originalRect.height,

        xPercent: 0,
        yPercent: 0,

        duration: .25,

        ease: "power2.in",

        onComplete: () => {

            socialPreview.remove();

            socialPreview = null;

            originalRect = null;

        }

    });

}
