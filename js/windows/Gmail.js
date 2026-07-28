
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Gmail(parent = document.body) {
    const window = new WindowWrapper("gmail");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <p>New Message</p>

        <div class="mobile-header-actions">
            <i class="ri-attachment-line"></i>
            <button class="sendEmail mobile-send">
                <i class="ri-send-plane-fill"></i>
            </button>
            <i class="ri-more-line"></i>
        </div>
    `;
    const controls = WindowControls("gmail");
    header.append(controls);
    

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `

        <div class="grid-row">
            <label>To</label>
            <input type="email" id="to-input" value="yarlinlynn@gmail.com" readonly/>
        </div>
        <div class="grid-row">
            <label>From</label>
            <input type="email" id="from-input"/>
        </div>
        <div class="grid-row">
            <label>Subject</label>
            <input type="text" id="subject-input" />
        </div>

        <div class="message-container">
            <textarea id="message" placeholder="Compose email"></textarea>
        </div>

        <div class="emailWindowFooter">
            <button class="sendEmail desktop-send">
                Send
                <i class="ri-arrow-down-s-fill"></i>
            </button>
            <div class="email-icons">
                <i class="ri-font-size"></i>
                <i class="ri-attachment-line"></i>
                <i class="ri-link"></i>
                <i class="ri-emotion-line"></i>
                <i class="ri-drive-line"></i>
                <i class="ri-image-fill"></i>
                <i class="ri-ball-pen-fill"></i>
                <i class="ri-more-2-line"></i>
                <i class="ri-delete-bin-6-line"></i>
            </div>
        </div>
        

    `;
    windowElement.append(
        header,
        content
    );

    window.enableDrag();

    return window;
}