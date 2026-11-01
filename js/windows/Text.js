
import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Text(parent=document.body, key = "txtfile") {
    // const window = new WindowWrapper("txtfile");
    const window = new WindowWrapper(key);
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.prepend(WindowControls(key));

    // GitHub + Live site
    const linksContainer = document.createElement("div");
    linksContainer.className = "window-header-links";
    header.append(linksContainer);

    // CONTENT
    const content = document.createElement("div");
    content.className="text-content";


    window.renderContent = function(item) {

        linksContainer.innerHTML = ""; // Clear previous links
        if (item.githubLink || item.liveWebsite) {
            linksContainer.innerHTML = `
                ${item.liveWebsite ? `
                    <a href="${item.liveWebsite}" target="_blank" rel="noopener" title="Live Website">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="19px" width="20px" fill="currentColor">
                            <path d="M8.13,21.21Q6.3,20.43 4.94,19.06Q3.58,17.7 2.79,15.88T2,11.99T2.79,8.11T4.94,4.94T8.13,2.79T12.01,2t3.88,0.79t3.17,2.15t2.15,3.17T22,11.99t-0.79,3.89t-2.15,3.19t-3.17,2.15T12.01,22T8.13,21.21ZM12,19.95q0.65-0.9 1.13-1.88T13.9,16H10.1q0.3,1.1 0.77,2.07T12,19.95Zm-2.6-0.4q-0.45-0.82-0.79-1.71T8.05,16H5.1q0.72,1.25 1.81,2.18T9.4,19.55Zm5.2,0q1.4-0.45 2.49-1.38T18.9,16H15.95q-0.22,0.95-0.56,1.84q-0.34,0.89-0.79,1.71ZM4.25,14h3.4q-0.08-0.5-0.11-0.99T7.5,12t0.04-1.01T7.65,10H4.25q-0.13,0.5-0.19,0.99Q4,11.48 4,12q0,0.52 0.06,1.01T4.25,14Zm5.4,0h4.7q0.07-0.5 0.11-0.99T14.5,12t-0.04-1.01T14.35,10H9.65q-0.07,0.5-0.11,0.99Q9.5,11.48 9.5,12q0,0.52 0.04,1.01Q9.58,13.5 9.65,14Zm6.7,0h3.4q0.13-0.5 0.19-0.99T20,12t-0.06-1.01T19.75,10h-3.4q0.07,0.5 0.11,0.99Q16.5,11.48 16.5,12q0,0.52-0.04,1.01T16.35,14Zm-0.4-6H18.9q-0.73-1.25-1.81-2.18T14.6,4.45q0.45,0.82 0.79,1.71T15.95,8ZM10.1,8h3.8q-0.3-1.1-0.78-2.07T12,4.05q-0.65,0.9-1.13,1.88T10.1,8Zm-5,0H8.05Q8.28,7.05 8.61,6.16T9.4,4.45Q8,4.9 6.91,5.82T5.1,8Z"/>
                        </svg>
                    </a>
                ` : ""}

                ${item.githubLink ? `
                    <a href="${item.githubLink}" target="_blank" rel="noopener" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                        </svg>
                    </a>
                ` : ""}
            `;
        }

        content.innerHTML = `
            ${item.imageUrl ? `
                <img src="${item.imageUrl}" alt="${item.name}" loading="lazy"/>
            ` : ""}

            <div class="text">
                ${(item.description ?? [])
                    .map(text => `<p>${text}</p>`)
                    .join("")}
            </div>
        `;
    };

    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}

// render text content
export function TextPreview(item) {
    return `
        <div  class="text-preview">
            ${item.imageUrl ? `<img class="text-preview-image" src="${item.imageUrl}" alt="${item.name}" loading="lazy" />` : ""}

            <div class="text-content">
                ${item.description.map(text => `<p>${text}</p>`).join("")}
            </div>
        </div>
    `;
}