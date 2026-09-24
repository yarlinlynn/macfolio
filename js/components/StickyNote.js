
import { stickyNote } from "../constants/index.js";

export function StickyNote() {
    return `
        <div class="sticky-note" id="note">
            ${stickyNote.map(({ title, items }) => `
                <section class="sticky-section">
                    <h4 class="sticker-header">${title}:</h4>

                    <ul class="sticky-list">
                        ${items.map(item => `
                            <li>${item}</li>
                        `).join("")}
                    </ul>
                </section>
            `).join("")}
        </div>
    `;
}









