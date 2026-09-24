
import { windowManager } from "../state/WindowManager.js";

import { ImagePreview } from "../windows/Images.js";
import { TextPreview } from "../windows/Text.js";
import { ResumePreview, renderPdf } from "../windows/Resume.js";

// render files content/files/docs
export function renderFilesContent({ header, container, navigation }) {
    const current = getCurrent(navigation); // Get the folder/file currently being viewed

    // Render an image preview
    if(current.type === "image") {
        container.innerHTML = `
            ${renderBreadcrumb(navigation)}
            ${ImagePreview(current.data)}
        `;
        attachEventListeners({ header, container, navigation });
        return;
    }

    // Render an text preview
    if (current.type === "text") {
        container.innerHTML = `
            ${renderBreadcrumb(navigation)}
            ${TextPreview(current.data)}
        `;
        attachEventListeners({ header, container, navigation });
        return;
    }

    // Render an pdf preview
    if (current.type === "pdf") {
        container.innerHTML = `
            ${renderBreadcrumb(navigation)}
            ${ResumePreview(current.data)}
        `;

        // ResumePreview creates the canvas element. 
        // renderPdf then uses that canvas to render the actual PDF. 
        const canvas = container.querySelector("canvas");
        renderPdf(current.data.pdfUrl, canvas);

        attachEventListeners({ header, container, navigation });
        return;
    }

    container.innerHTML = `
        ${renderBreadcrumb(navigation)}

        <ul class="files-list">
            ${getFilesChildren(current).map(item => `
                <li class="files-item" data-id="${item.id}">
                    <img src="${getIcon(item)}" alt="${item.name}" loading="lazy" />
                    <span>${item.name}</span>

                    ${item.kind === "folder" ? `<i class="ri-arrow-right-s-line"></i>` : "" }
                </li>
            `).join("")}
        </ul>
    `;

    attachEventListeners({ header, container, navigation });
}

/** 
    Returns the appropriate icon for a file or folder.
    Folders use the folder icon while files are mapped to icons based on their fileType. 
*/
function getIcon(item) {
    // if (item.kind === "folder") {
    //     return "./assets/docs/folder.png";
    // }

    // Choose an icon to display based on the file type
    switch (item.fileType) {
        case "pdf":
            return "./assets/docs/pdf.png";
        case "txt":
            return "./assets/docs/txt.png";
        case "img":
            return "./assets/docs/image.png";
        case "url":
            return "./assets/docs/plain.png";
        case "video":
            return "./assets/docs/plain.png";
        default:
            return "./assets/docs/folder.png";
    }
}

/** 
    Builds the breadcrumb navigation for the current path. 
    Each navigation item becomes a button that allows the user to jump back to that point in the navigation stack. 
*/
function renderBreadcrumb(navigation) {
    if (navigation.length === 1) return ""; // Don't show breadcrumbs when viewing the root folder

    return `
        <div class="breadcrumb">
            ${navigation.map( (item, index) => `
                <button data-index="${index}">
                    ${item.name}
                </button>

                ${index < navigation.length - 1 ? `<i class="ri-arrow-right-s-line"></i>` : "" }
            `).join("")}
        </div>
    `
}

/** 
    Attaches interaction handlers to the Files interface. 
    Because renderFilesContent() replaces container.innerHTML, the DOM elements are recreated each time the view changes. 
    Event listeners therefore need to be attached after rendering. 
*/
function attachEventListeners({ header, container, navigation }) {
    /* 
        FILE / FOLDER NAVIGATION:
        - Find the data object represented by the clicked 
        - Files item and pass it to openItem(). 
    */
    container.querySelectorAll(".files-item").forEach(item => {
        item.onclick = () => {
            const current = getCurrent(navigation);
            // Find the selected file/folder in the current folder
            const selected = current.data.children.find(child =>
                child.id === Number(item.dataset.id)
            );

            // Prevent the application from trying to open an item that no longer exists
            if (!selected) {
                console.warn("File not found:", item.dataset.id);
                return;
            }
            openItem({ item:selected, header, container, navigation });
        }
    });

    /* 
        BREADCRUMB NAVIGATION: 
         - Clicking a breadcrumb removes everything after that  location from the navigation stack. 
    */
    container.querySelectorAll(".breadcrumb button").forEach(button => {
        button.onclick = () => {
            const index = Number(button.dataset.index);
            navigation.splice(index + 1);

            renderFilesContent({ header, container, navigation });
        }
    })
}

// get the current navigation
function getCurrent(navigation) {
    return navigation[navigation.length-1];
}

/** 
    Folders update the navigation stack 
    Files either render inside Files, open through WindowManager, or open an external URL
*/
function openItem({ item, header, container, navigation }) {
    // open folders
    if(item.kind==="folder"){
        navigation.push({ name:item.name, data:item });
        renderFilesContent({ header, container, navigation });
        return;
    }

    switch(item.fileType) {
        // open pdf
        case "pdf":
            // Desktop
            if (window.innerWidth >= 768) {
                windowManager.open("resume", item);
                break;
            }

            // keep the PDF inside the Files navigation instead of opening a desktop-style floating window
            navigation.push({ name: item.name, type: "pdf", data: item });
            renderFilesContent({ header,container, navigation });
            break;

        // open text file
        case "txt":
            navigation.push({ name: item.name, type: "text", data: item });
            renderFilesContent({ header, container, navigation })
            break;

        // open image file
        case "img":
            navigation.push({ name: item.name, type: "image", data: item });
            renderFilesContent({ header, container, navigation })
            break;

        // open external link
        case "url":
            if(item.href){
                window.open(item.href,"_blank");
            }
            break;
    }
}

/** 
    Controls which files are visible in a particular folder. 
    Most folders display all of their children.
    The profile folder is treated differently and only exposes * text files, keeping the mobile profile experience focused. 
*/
function  getFilesChildren(current) {
    // Safely handle folders without children
    if (!current.data.children) {
        return [];
    }

    // Only show text files inside the profile folder
    if(current.data.mobileMode === "profile") {
        return current.data.children.filter(
            item =>
                item.fileType === "txt"
        );
    }
    // All other folders display their complete contents
    return current.data.children;
}

