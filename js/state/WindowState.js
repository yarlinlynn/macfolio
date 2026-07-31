
import { 
    INITIAL_Z_INDEX, 
    WINDOW_CONFIG 
} from "../constants/index.js";

// stores window information
class WindowState {
    constructor() {
        this.windows = structuredClone(WINDOW_CONFIG);
        this.nextZ = INITIAL_Z_INDEX + 1;
    }

    open(key, data = null) {
        const window = this.windows[key];
        if (!window) return;

        window.isOpen = true;
        window.data = data;
        window.zIndex = this.nextZ++;
        window.justOpened = true;
    }

    close(key) {
        const window = this.windows[key];
        if (!window) return;

        window.isOpen = false;
        window.data = null;
        window.zIndex = INITIAL_Z_INDEX;
    }

    focus(key) {
        const window = this.windows[key];
        if (!window || !window.isOpen) return;

        window.zIndex = this.nextZ++;
    }
}

export const windowState = new WindowState();
