
import { windowManager } from "../state/WindowManager.js";

export function WindowControls(target) {
    const controls = document.createElement("div");
    controls.className = "window-controls";

    controls.innerHTML = `
        <!-- Mobile -->
        <button class="window-back close">
            <div>
                <i class="ri-arrow-left-s-line"></i>
                <span>Go Back</span>
            </div>
        </button>

        <!-- Desktop -->
        <div class="window-buttons">
            <button class="window-btn close">
                <i class="ri-close-line"></i>
            </button>

            <button class="window-btn minimize">
                <i class="ri-subtract-line"></i>
            </button>

            <button class="window-btn maximize">
                <i class="ri-contract-left-right-fill rotate"></i>
            </button>
        </div>
    `;

    controls.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", () => {
            windowManager.close(target);
        });
    });


    return controls;
}