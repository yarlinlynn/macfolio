
export function dockAnimation(dockContainer) {
    if(!dockContainer) return;

    const dockIcons = document.querySelectorAll(".dock-item");

    function animateDockIcons(mouseX) {
        const { left } = dockContainer.getBoundingClientRect();

        dockIcons.forEach(icon => {
            const rect = icon.getBoundingClientRect();

            const center = rect.left - left + rect.width / 2;
            const distance = Math.abs(mouseX - center);

            const intensity = Math.exp(
                -(distance ** 2.5) / 20000
            );

            gsap.to(icon, {
                // scale: 1 + 0.55 * intensity,
                // y: -25 * intensity,
                // duration: 0.15,
                // ease: "power3.out",
                // overwrite: true
                scale: 1 + 0.25 * intensity,
                y: -15 * intensity,
                duration: 0.2,
                ease: "power1.out",
                overwrite: true
            })
        })
    }

    function handleMouseMove(e) {
        const { left } = dockContainer.getBoundingClientRect();
        animateDockIcons(e.clientX - left);
    }

    function resetDock() {
        dockIcons.forEach(icon => {
            gsap.to(icon, {
                scale: 1,
                y: 0,
                duration: 0.25,
                ease: "power3.out",
                overwrite: true
            })
        })
    }

    dockContainer.addEventListener("mousemove", handleMouseMove);
    dockContainer.addEventListener("mouseleave", resetDock);

    return () => {
        dockContainer.removeEventListener("mousemove", handleMouseMove);
        dockContainer.removeEventListener("mouseleave", resetDock);
    };
}