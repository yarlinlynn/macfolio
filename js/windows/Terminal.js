
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

import { techStack } from "../constants/index.js";

export function Terminal(parent = document.body) {
    const window = new WindowWrapper("terminal");
    const windowElement = window.mount(parent); 

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    const controls = WindowControls("terminal");
    header.prepend(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content terminal-content";
    content.innerHTML = `
        <p class="teach-prompt">
            <span>@yarlin %</span>
            show teach stack
        </p>
        <div class="label">
            <p>Category</p>
            <p>Technologies</p>
        </div>
        <ul class="skills-list">
            ${techStack.map( ({category, items}) => `
                <li class="category">
                    <div class="category-heading">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#00a154"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#00a154"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>

                        <h4>${category}</h4>
                    </div>
                    <ul class="inner-list">
                        <li>
                            ${items.map( (item, index) => `
                                <li>${item}${index < items.length - 1 ? "," : ""}</li>
                            ` ).join("")}
                        </li>
                    </ul>
                </li>
            ` ).join("")}
        </ul>
        <div class="footnote">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true" style="touch-action: none;"><path d="M20 6 9 17l-5-5" style="touch-action: none;"></path></svg>
                5 of 5 stacks loaded successfully (100%)
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag" aria-hidden="true" style="touch-action: none;"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" style="touch-action: none;"></path>
                </svg>
                Render time: 6ms
            </p>

    `;

    windowElement.append(
        header,
        content
    );
    
    window.enableDrag();    
    return window;
}