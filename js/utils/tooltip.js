
export function dockTooltip(container) {
    if (!container) return;

    // Disable tooltips on mobile
    if (window.matchMedia("(max-width: 899px)").matches) {
        return;
    }
    const dockItems = container.querySelectorAll(".dock-item");

    dockItems.forEach(dockItem => {
        const dockImg = dockItem.querySelector("img");

        if(!dockImg) return;

        tippy(dockItem, {
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