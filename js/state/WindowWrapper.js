
import { windowManager } from "./WindowManager.js";
import { windowState } from "./WindowState.js";

export default class WindowWrapper {
    constructor(windowKey) {
        this.windowKey = windowKey;
        this.element = null;
        this.dragInstance = null;
    }

    mount(parent = document.body) {
        this.element = document.createElement("section");
        this.element.id = this.windowKey;
        this.element.className = "window absolute";
        this.element.style.display = "none";
        parent.appendChild(this.element);

        // Initial position
        // gsap.set(this.element, {
        //     x: 250,
        //     y: 100
        // });

        windowManager.register(this.windowKey, this);
        return this.element;
    }

    enableDrag() {
        if (window.innerWidth < 599) {
            return;
        }
        if (!window.Draggable) return;

        this.dragInstance?.kill();
        const header = this.element.querySelector(".window-header");
        if (!header) return;

        const [instance] = window.Draggable.create(this.element, {
            trigger: header,
            onPress: () => {
                windowManager.focus(this.windowKey);
            }
        });

        this.dragInstance = instance;
    }

    update() {
        const state = windowState.windows[this.windowKey];
        if (!state) return;

        this.element.style.display = state.isOpen ? "block" : "none";
        this.element.style.zIndex = state.zIndex;

        if (state.justOpened) {
            this.animateOpen();
            state.justOpened = false;
        }
    }

    animateOpen() {
        gsap.fromTo(
            this.element,
            {
                opacity: 0,
                scale: .9
            },
            {
                opacity: 1,
                scale: 1,
                duration: .35,
                ease: "power3.out"
            }
        );
    }
}

