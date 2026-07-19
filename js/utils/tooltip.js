// EXTERNAL LIBRARIES:
// import tippy from "tippy.js";
// import "tippy.js/dist/tippy.css";

export function dockTooltip(container) {
    const dockItems = container.querySelectorAll(".dock-item");

    dockItems.forEach(dockItem => {
        const dockImg = dockItem.querySelector("img");

        if(!dockImg) return;

        tippy(dockItem, {
            // content: img.alt,
            // placement: "top",
            // theme: "mac",
            // animation: "shift-away",
            // delay: [120, 0],
            // duration: [180, 120],
            // offset: [0, 12],
            // inertia: true,
            // arrow: true,
            content: dockImg.alt,
            placement: "top",
            theme: "mac",
            animation: "shift-away",
            delay: [120, 0],
            duration: [180, 120],
            offset: [0, 25],
            inertia: true,
            arrow: true,
        })
    })
}