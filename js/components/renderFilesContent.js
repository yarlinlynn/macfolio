
import { windowManager } from "../state/WindowManager.js";

// render files content/files/docs
export function renderFilesContent({
    header,
    container,
    navigation
}) {
    const current = getCurrent(navigation);
    header.querySelector("h2").textContent = current.name;

    container.innerHTML = `
        ${renderBreadcrumb(navigation)}

        <ul class="files-list">
            ${
                current.data.children ? current.data.children.map(item => `
                    <li class="files-item" data-id="${item.id}">
                        <img src="${getIcon(item)}" alt="${item.name}" loading="lazy" />
                        <span>${item.name}</span>

                        ${
                            item.kind === "folder" ? `<i class="ri-arrow-right-s-line"></i>` : ""
                        }
                    </li>    
                `).join("")
                : ""
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
    container.querySelectorAll(".files-item").forEach(item => {
        item.onclick = () => {
            const current = getCurrent(navigation);
            const selected = current.data.children.find(child =>
                child.id === Number(item.dataset.id)
            );

            if(!selected) return;
            openItem({
                item:selected,
                header,
                container,
                navigation
            });
        }
    });

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

function getCurrent(navigation) {
    return navigation[navigation.length-1];
}

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
            windowManager.open("resume",item);
            break;

        // open text file
        case "txt":
            windowManager.open("txtfile",item);
            break;

        // open image file
        case "img":
            windowManager.open("imgfile",item);
            break;

        // open external link
        case "url":
            if(item.href){
                window.open(item.href,"_blank");
            }
            break;
    }
}