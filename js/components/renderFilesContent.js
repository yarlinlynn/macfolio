
import { windowManager } from "../state/WindowManager.js";

import { ImagePreview } from "../windows/Images.js";
import { TextPreview } from "../windows/Text.js";
import { ResumePreview, renderPdf } from "../windows/Resume.js";

// render files content/files/docs
export function renderFilesContent({
    header,
    container,
    navigation
}) {
    const current = getCurrent(navigation);
    header.querySelector("h2").textContent = current.name;

    // image preview
    if(current.type === "image") {
        container.innerHTML = `
            ${renderBreadcrumb(navigation)}
            ${ImagePreview(current.data)}
        `;

        attachEventListeners({
            header,
            container,
            navigation
        });
        return;
    }

    // text preview
    if (current.type === "text") {
        container.innerHTML = `
            ${renderBreadcrumb(navigation)}
            ${TextPreview(current.data)}
        `;

        attachEventListeners({
            header,
            container,
            navigation
        });

        return;
    }

    // pdf preview
    if (current.type === "pdf") {
        container.innerHTML = `
            ${renderBreadcrumb(navigation)}
            ${ResumePreview(current.data)}
        `;
        const canvas = container.querySelector("canvas");
        renderPdf(current.data.pdfUrl, canvas);

        attachEventListeners({
            header,
            container,
            navigation
        });
        return;
    }

    container.innerHTML = `
        ${renderBreadcrumb(navigation)}

        <ul class="files-list">
            ${
                getFilesChildren(current).map(item => `
                    <li class="files-item" data-id="${item.id}">
                        <img src="${getIcon(item)}" alt="${item.name}" loading="lazy" />
                        <span>${item.name}</span>

                        ${
                            item.kind === "folder" ? `<i class="ri-arrow-right-s-line"></i>` : ""
                        }
                    </li>
                `).join("")
            }
        </ul>
    `;

    attachEventListeners({
        header,
        container,
        navigation
    });
}

// get fileType icon
function getIcon(item) {
    if (item.kind === "folder") {
        return "./assets/docs/folder.png";
    }

    switch (item.fileType) {
        case "pdf":
            return "./assets/docs/pdf.png";
        case "txt":
            return "./assets/docs/txt.png";
        case "img":
            return "./assets/docs/image.png";
        case "url":
            return "./assets/app/safri.png";
        case "video":
            return "./assets/docs/plain.png";
        default:
            return "./assets/docs/folder.png";
    }
}

// render breadcrumb navigation
function renderBreadcrumb(navigation) {
    if (navigation.length === 1) return "";

    return `
        <div class="breadcrumb">
            ${
                navigation.map( (item, index) => `
                    <button data-index="${index}">
                        ${item.name}
                    </button>

                    ${
                        index < navigation.length - 1 ? `<i class="ri-arrow-right-s-line"></i>` : "" 
                    }
                `).join("")
            }
        </div>
    `
}

// attach click event listeners
function attachEventListeners({
    header,
    container,
    navigation
}) {
    // open files/folders
    container.querySelectorAll(".files-item").forEach(item => {
        item.onclick = () => {
            const current = getCurrent(navigation);
            const selected = current.data.children.find(child =>
                child.id === Number(item.dataset.id)
            );

            // if(!selected) return;
            if (!selected) {
                console.warn(
                    "File not found:",
                    element.dataset.id
                );
                return;
            }
            openItem({
                item:selected,
                header,
                container,
                navigation
            });
        }
    });

    // breadcrumb navigation
    container.querySelectorAll(".breadcrumb button").forEach(button => {
        button.onclick = () => {
            const index = Number(button.dataset.index);
            navigation.splice(index + 1);

            renderFilesContent({
                header,
                container,
                navigation
            });
        }
    })
}

// get the current navigation
function getCurrent(navigation) {
    return navigation[navigation.length-1];
}

// open different content from different files
function openItem({
    item,
    header,
    container,
    navigation
}) {
    // open folders
    if(item.kind==="folder"){
        navigation.push({
            name:item.name,
            data:item
        });

        renderFilesContent({
            header,
            container,
            navigation
        });

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

            // Mobile Files
            navigation.push({
                name: item.name,
                type: "pdf",
                data: item
            });

            renderFilesContent({
                header,
                container,
                navigation
            });
            break;

        // open text file
        case "txt":
            navigation.push({
                name: item.name,
                type: "text",
                data: item
            });

            renderFilesContent({
                header,
                container,
                navigation
            })
            break;

        // open image file
        case "img":
            navigation.push({
                name: item.name,
                type: "image",
                data: item
            });

            renderFilesContent({
                header,
                container,
                navigation
            })
            break;

        // open external link
        case "url":
            if(item.href){
                window.open(item.href,"_blank");
            }
            break;
    }
}

// render only txt file for about me folder
function  getFilesChildren(current) {
    if (!current.data.children) {
        return [];
    }

    // Only show profile.txt
    if(current.data.mobileMode === "profile") {
        return current.data.children.filter(
            item =>
                item.fileType === "txt"
        );
    }

    return current.data.children;
}

