
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

// export function Notes(parent = document.body) {
//     const wrapper = new WindowWrapper("notes");
//     const window = wrapper.mount(parent);

//     // Header
//     const header = document.createElement("div");
//     header.className = "notes-header";
//     const controls = WindowControls("notes");
//     header.appendChild(controls);
//     header.innerHTML += `
//         <div class="notes-title">
//             <span>
//                 Notes
//             </span>
//         </div>
//         <button class="new-note">
//             New Note
//         </button>
//     `;

//     // Content
//     const content = document.createElement("div");
//     content.className = "notes-content";
//     content.innerHTML = `
//         <textarea placeholder="Write something..."></textarea>
//     `;

//     window.append(
//         header,
//         content
//     );


//     return wrapper;
// }

export function Notes(parent = document.body) {
    const window = new WindowWrapper("notes");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    const controls = WindowControls("notes");
    header.append(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `

        <p>Add questions and answers accordion here ...</p>

    `;
    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}